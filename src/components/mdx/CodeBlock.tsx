import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, filename }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-gray-900 border border-white/10">
      {filename && (
        <div className="border-b border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
          {filename}
        </div>
      )}
      <div className="relative group">
        <pre className="overflow-x-auto p-4 text-sm leading-6">
          <code className={language ? `language-${language}` : ''}>
            {children}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute right-4 top-4 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-white/5 hover:bg-white/10"
          title="Copiar código"
        >
          <Copy className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default CodeBlock; 