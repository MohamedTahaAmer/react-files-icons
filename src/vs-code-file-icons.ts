export function unique<T>(array: T[]): T[] {
	return [...new Set(array)]
}

export function numToReadableBytes(bytes: number) {
	const units = ["B", "KB", "MB", "GB", "TB"]
	let unitIndex = 0

	let transformedBytes = bytes
	while (bytes >= 1024 && unitIndex < units.length - 1) {
		transformedBytes /= 1024
		unitIndex++
	}

	return `${bytes.toFixed(2)} ${units[unitIndex]}`
}
export function getObjSize(obj: unknown) {
	const json = JSON.stringify(obj)
	return numToReadableBytes(Buffer.byteLength(json, "utf8"))
}
