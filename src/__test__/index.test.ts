// import { expect, describe, it } from "bun:test"
// import { getObjSize, numToReadableBytes, unique } from "../.."

// // unique
// describe("unique", () => {
// 	it("should return an array with unique values", () => {
// 		expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
// 	})
// })

// describe("numToReadableBytes", () => {
// 	it("should convert 1024 to 1 KB", () => {
// 		expect(numToReadableBytes(1024)).toBe("1.00 KB")
// 	})

// 	it("should convert 1024 * 1024 to 1 MB", () => {
// 		expect(numToReadableBytes(1024 * 1024)).toBe("1.00 MB")
// 	})

// 	it("should convert 1024 * 1024 * 1024 to 1 GB", () => {
// 		expect(numToReadableBytes(1024 * 1024 * 1024)).toBe("1.00 GB")
// 	})

// 	it("should convert 1024 * 1024 * 1024 * 1024 to 1 TB", () => {
// 		expect(numToReadableBytes(1024 * 1024 * 1024 * 1024)).toBe("1.00 TB")
// 	})

// 	it("should convert a number less than 1024 to itself", () => {
// 		expect(numToReadableBytes(512)).toBe("512.00 B")
// 	})

// 	it("should convert a number less than 1 to itself", () => {
// 		expect(numToReadableBytes(0.5)).toBe("0.50 B")
// 	})
// })

// describe("getObjSize", () => {
// 	it("should return the size of an empty object", () => {
// 		let obj = {}
// 		let size = JSON.stringify(obj).length
// 		expect(getObjSize(obj)).toBe(`${size}.00 B`)
// 	})

// 	it("should return the size of an object with a single property", () => {
// 		let obj = { foo: "bar" }
// 		let size = JSON.stringify(obj).length
// 		expect(getObjSize(obj)).toBe(`${size}.00 B`)
// 	})

// 	it("should return the size of an object with multiple properties", () => {
// 		let obj = { foo: "bar", baz: "qux" }
// 		let size = JSON.stringify(obj).length
// 		expect(getObjSize(obj)).toBe(`${size}.00 B`)
// 	})

// 	it("should return the size of an object with a nested property", () => {
// 		let obj = { foo: { bar: "baz" } }
// 		let size = JSON.stringify(obj).length
// 		expect(getObjSize(obj)).toBe(`${size}.00 B`)
// 	})
// })
