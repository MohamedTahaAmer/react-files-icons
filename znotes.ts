//#region // <
/*
1- `bun init`
2- add inside the compilerOptions in tsconfig.json:
		"baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"]
		}
3- `bun i -d tsup`, in package.json scripts: "build": "tsup src/index.ts --dts --minify --format cjs --out-dir dist"
4- make sure that noEmit is 'true' in tsconfig.json and in package.json scripts: 'lint': 'tsc'
5- testing
  add "dev": "bun test --watch" to package.json scripts
  add "test": "bun test" to package.json scripts
6- CI
	add "ci": "bun run lint && bun run test && bun run build" to package.json scripts
*/
//#endregion
//#region // < Notes
/*
1- tell now it seems like tsc is the only one that allows type checking, but for transpiling it's extremely slow.
2- bun can transpile but to esm only, not to cjs, and it also can't type check.
3- tsup uses esbuild for transpiling it's fast, and uses tsc for type checking.
	here for transpiling we can use esbuild, bun, swc, or tsc.
*/
//#endregion
