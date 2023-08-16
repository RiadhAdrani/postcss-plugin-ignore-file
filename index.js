/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: "postcss-plugin-ignore-file",

    prepare(res) {
      // if the first node is a comment containing @ignore we nullify the file
      const first = res.root.nodes[0];

      if (!first || first.type !== "comment") {
        return;
      }

      if (first.text.trim() === "@ignore") {
        res.root.nodes = [];
        res.css = "";
        res.content = "";

        if (res.root.source.input.file) {
          console.log(
            `[postcss-plugin-ignore-file] ignored file "${res.root.source.input.file}"`
          );
        }
      }
    },
  };
};

module.exports.postcss = true;
