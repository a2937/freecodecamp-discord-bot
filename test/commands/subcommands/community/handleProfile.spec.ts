import { describe, assert, test } from "vitest";
import { handleProfile }
  from "../../../../src/commands/subcommands/community/handleProfile.js";

describe("profile handler", () => {
  test("profile command is defined", () => {
    assert.isDefined(handleProfile);
  });
});
