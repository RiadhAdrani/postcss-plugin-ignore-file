# postcss-plugin-ignore-file

[PostCSS] plugin that ignore a file with a comment.

[PostCSS]: https://github.com/postcss/postcss

```css
/* @ignore */

.foo {
  /* Input example */
}
```

```css

```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-plugin-ignore-file
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-plugin-ignore-file'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
