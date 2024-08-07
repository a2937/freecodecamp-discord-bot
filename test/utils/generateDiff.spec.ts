import { describe, assert, test } from "vitest";
import { generateDiff } from "../../src/utils/generateDiff.js";

describe("generateDiff", () => {
  test("is defined", () => {
    assert.isDefined(generateDiff, "generateDiff is not defined");
    assert.isFunction(generateDiff, "generateDiff is not a function");
  });

  test("returns an expected diff string", () => {
    const old = "this is a test";
    const updated = "this is a test, but different";
    const expected = "- this is a test\n+ this is a test, but different";
    const actual = generateDiff(old, updated);
    assert.equal(actual, expected);
  });
});
