import { describe, expect, it, vi } from "vitest";

import { countBy } from "../src/index.js";

describe("countBy", () => {
  it("counts selected keys and preserves key identity", () => {
    const objectKey = {};
    const values = [objectKey, objectKey, {}];

    expect(countBy(values, (value) => value)).toEqual(
      new Map([
        [objectKey, 2],
        [values[2]!, 1],
      ]),
    );
  });

  it("provides full selector context", () => {
    const values = ["a", "bb"];
    const selector = vi.fn<
      (value: string, index: number, input: readonly string[]) => number
    >((value) => value.length);

    expect(countBy(values, selector)).toEqual(
      new Map([
        [1, 1],
        [2, 1],
      ]),
    );
    expect(selector).toHaveBeenNthCalledWith(2, "bb", 1, values);
  });

  it("returns an empty map for empty input", () => {
    expect(countBy([], String)).toEqual(new Map());
  });
});
