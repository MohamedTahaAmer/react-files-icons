import { expect, describe, it } from "bun:test"
import { unique } from ".."

// unique
describe("unique", () => {
	it("should return an array with unique values", () => {
		expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
	})
})
