import { visit } from "unist-util-visit";
import kebabcase from "lodash.kebabcase";
import type { Plugin } from "unified";
import type { Root, Text, PhrasingContent } from "mdast";

const WIKI_LINK_RE = /\[\[([^\]]+?)\]\]/g;

const remarkWikiLinks: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index == null) return;

      const matches = [...node.value.matchAll(WIKI_LINK_RE)];
      if (matches.length === 0) return;

      const children: PhrasingContent[] = [];
      let lastIndex = 0;

      for (const match of matches) {
        const fullMatch = match[0];
        const inner = match[1];
        const start = match.index!;

        // Text before this match
        if (start > lastIndex) {
          children.push({ type: "text", value: node.value.slice(lastIndex, start) });
        }

        // Parse [[Target]] or [[Target|display text]]
        const pipeIndex = inner.indexOf("|");
        const target = pipeIndex === -1 ? inner.trim() : inner.slice(0, pipeIndex).trim();
        const display = pipeIndex === -1 ? inner.trim() : inner.slice(pipeIndex + 1).trim();

        children.push({
          type: "link",
          url: `/wiki/books/${kebabcase(target)}/`,
          data: { hProperties: { class: "wiki-link" } },
          children: [{ type: "text", value: display }],
        });

        lastIndex = start + fullMatch.length;
      }

      // Remaining text after last match
      if (lastIndex < node.value.length) {
        children.push({ type: "text", value: node.value.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...children);
    });
  };
};

export default remarkWikiLinks;
