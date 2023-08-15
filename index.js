/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: "postcss-plugin-ignore-file",

    Root(root) {
      // if the first node is a comment containing @ignore we nullify the file
      const first = root.nodes[0];

      if (!first || first.type !== "comment") {
        return;
      }

      if (first.text.trim() === "@ignore") {
        root.nodes = [];
      }
    },
  };
};

module.exports.postcss = true;
