import { useEffect, useRef, useState } from 'react';
import type { Playground, PlaygroundFile } from '../types/lesson';

type Props = {
  playground: Playground;
  /** Key that remounts the editor (used to reset to starter). */
  resetKey?: number;
};

type TabFile = PlaygroundFile;

function buildHtmlCssSrcDoc(files: TabFile[]): string {
  const html = files.find((f) => f.filename.endsWith('.html'))?.code ?? '';
  const css = files.find((f) => f.filename.endsWith('.css'))?.code ?? '';
  if (!html) return '<html><body><p style="font-family:sans-serif;color:#999">Không có file HTML.</p></body></html>';
  if (css && !/<link[^>]*stylesheet/i.test(html)) {
    const styleTag = `<style>${css}</style>`;
    if (/<\/head>/i.test(html)) {
      return html.replace(/<\/head>/i, `${styleTag}</head>`);
    }
    if (/<body[^>]*>/i.test(html)) {
      return html.replace(/<body([^>]*)>/i, `<body$1>${styleTag}`);
    }
    return `${styleTag}${html}`;
  }
  // Replace <link rel="stylesheet" href="style.css" /> with inline style so iframe can render
  return html.replace(
    /<link\s+rel=["']stylesheet["']\s+href=["'][^"']+["']\s*\/?>/gi,
    `<style>${css}</style>`
  );
}

function buildReactSrcDoc(files: TabFile[]): string {
  // All .tsx/.ts files concatenated; the last `App` export is entry point.
  // Strategy: concat files into one big <script type="text/babel" data-presets="react,typescript">
  // with imports stripped.

  const codeBlocks = files
    .map((f) => {
      const name = f.filename.replace(/^\//, '');
      return `// ===== ${name} =====\n${stripImportsAndExports(f.code)}`;
    })
    .join('\n\n');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; }
    .__error { padding: 16px; color: #b91c1c; background: #fee2e2; font-family: monospace; white-space: pre-wrap; }
  </style>
  <script src="https://unpkg.com/react@19/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@19/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script>
    window.addEventListener('error', function(e){
      var root = document.getElementById('root');
      root.innerHTML = '<div class="__error">' + (e.message || e.error) + '</div>';
    });
  </script>
  <script type="text/babel" data-presets="react,typescript">
    const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext } = React;

    ${codeBlocks}

    try {
      const rootEl = document.getElementById('root');
      const root = ReactDOM.createRoot(rootEl);
      if (typeof App !== 'undefined') {
        root.render(React.createElement(App));
      } else {
        rootEl.innerHTML = '<div class="__error">Không tìm thấy component App. Hãy export default function App() { ... }</div>';
      }
    } catch (err) {
      document.getElementById('root').innerHTML = '<div class="__error">' + (err && err.message ? err.message : err) + '</div>';
    }
  </script>
</body>
</html>`;
}

function buildTypeScriptSrcDoc(files: TabFile[]): string {
  const code = files.map((f) => f.code).join('\n\n');
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { margin: 0; font-family: 'Menlo', 'Consolas', monospace; background: #0f172a; color: #e2e8f0; padding: 16px; font-size: 14px; line-height: 1.6; }
    .log { white-space: pre-wrap; }
    .log-error { color: #fca5a5; }
    .log-info { color: #93c5fd; }
    .prefix { color: #64748b; user-select: none; }
  </style>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="output"></div>
  <script>
    const out = document.getElementById('output');
    function append(text, cls){
      const div = document.createElement('div');
      div.className = 'log ' + (cls || '');
      div.innerHTML = '<span class="prefix">› </span>' + String(text);
      out.appendChild(div);
    }
    const origLog = console.log;
    console.log = function(...args) {
      append(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
      origLog.apply(console, args);
    };
    const origErr = console.error;
    console.error = function(...args) {
      append(args.map(a => String(a)).join(' '), 'log-error');
      origErr.apply(console, args);
    };
    window.addEventListener('error', function(e){
      append((e.message || e.error), 'log-error');
    });
  </script>
  <script type="text/babel" data-presets="typescript" data-type="module">
    try {
      ${code}
    } catch (e) {
      console.error(e && e.message ? e.message : e);
    }
  </script>
</body>
</html>`;
}

function stripImportsAndExports(code: string): string {
  return code
    .replace(/^\s*import\s[^;]+;?\s*$/gm, '')
    .replace(/^\s*export\s+default\s+/gm, '')
    .replace(/^\s*export\s+/gm, '');
}

export function CodePlayground({ playground, resetKey }: Props) {
  const playgroundKey = JSON.stringify({
    language: playground.language,
    activeFile: playground.activeFile,
    files: playground.files,
    resetKey: resetKey ?? 0,
  });

  return <CodePlaygroundInner key={playgroundKey} playground={playground} />;
}

type InnerProps = {
  playground: Playground;
};

function CodePlaygroundInner({ playground }: InnerProps) {
  const initialFiles = playground.files.map((f) => ({ ...f }));
  const [files, setFiles] = useState<TabFile[]>(initialFiles);
  const [activeFile, setActiveFile] = useState<string>(
    playground.activeFile ?? playground.files[0].filename
  );
  const [srcDoc, setSrcDoc] = useState<string>('');
  const debounceRef = useRef<number | null>(null);

  // debounce rebuild srcDoc
  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      if (playground.language === 'html' || playground.language === 'css') {
        setSrcDoc(buildHtmlCssSrcDoc(files));
      } else if (playground.language === 'react') {
        setSrcDoc(buildReactSrcDoc(files));
      } else {
        setSrcDoc(buildTypeScriptSrcDoc(files));
      }
    }, 400);
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [files, playground.language]);

  const updateActiveFile = (code: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.filename === activeFile ? { ...f, code } : f))
    );
  };

  const activeCode = files.find((f) => f.filename === activeFile)?.code ?? '';

  const reset = () => {
    setFiles(playground.files.map((f) => ({ ...f })));
    setActiveFile(playground.activeFile ?? playground.files[0].filename);
  };

  return (
    <div className="playground">
      <div className="playground__tabs">
        {files.map((f) => (
        <button
          type="button"
          key={f.filename}
          className={`playground__tab ${f.filename === activeFile ? 'is-active' : ''}`}
          onClick={() => setActiveFile(f.filename)}
          >
            {f.filename}
          </button>
        ))}
        <button
          className="playground__reset"
          type="button"
          onClick={reset}
          title="Reset về code ban đầu"
        >
          ↺ Reset
        </button>
      </div>

      <div className="playground__split">
        <textarea
          className="playground__editor"
          value={activeCode}
          onChange={(e) => updateActiveFile(e.target.value)}
          spellCheck={false}
          wrap="off"
        />
        <iframe
          className="playground__preview"
          title="Preview"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}
