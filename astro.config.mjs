import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rousseaddict.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    },
    remarkPlugins: [
      // Plugin to add target="_blank" to external links
      () => {
        return (tree) => {
          const visit = (node) => {
            if (node.type === 'link' && node.url && isExternalUrl(node.url)) {
              node.data = node.data || {};
              node.data.hProperties = node.data.hProperties || {};
              node.data.hProperties.target = '_blank';
              node.data.hProperties.rel = 'noopener noreferrer';
            }
            if (node.children) {
              node.children.forEach(visit);
            }
          };
          visit(tree);
        };
      }
    ]
  }
});

// Helper function to check if URL is external
function isExternalUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}