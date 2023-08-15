const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("should ignore input when @ignore is detected", async () => {
  await run("/* @ignore */ a{}", "");
});

it("should not ignore input when @ignore is not detected", async () => {
  await run("a{}", "a{}");
});
