import { describe, it, expect } from "vitest";
import { lookupAddress } from ".";

describe("lookupAddress", async () => {
  it("should allow you to lookup an address", async () => {
    const result = await lookupAddress("4147AZ", "5");
    expect(result).toMatchSnapshot();
  });

  it("should return null in case no address is found", async () => {
    const result = await lookupAddress("5211ER", "1000");
    expect(result).toBeNull();
  });
});
