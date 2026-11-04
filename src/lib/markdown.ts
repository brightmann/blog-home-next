import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import '@/lib/css/editor-v3.style.css';

// Markdown comes only from the trusted local content file, not user input.
export async function transformMarkdown(markdownString: string): Promise<string> {
  return marked.parse(markdownString, {
    highlight(code: string, lang: string) {
      const grammar = Prism.languages[lang];
      return grammar ? Prism.highlight(code, grammar, lang) : code;
    },
  });
}
