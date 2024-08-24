//#region // <
/*
1- `bun init`
2- add inside the compilerOptions in tsconfig.json:
		"baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"]
		}
3- `bun i -d tsup`, in package.json scripts: "build": "tsup src/index.ts --dts --format cjs,esm --out-dir dist"
	add to your package.json file: 
	// -- these are for old bundlers, the exports syntax is the new official way of defining the entry points to your package
		"main": "./dist/index.cjs", // - this is for cjs
		"module": "./dist/index.js", // - this is for esm
		"types": "./dist/index.d.ts", // - this is for types
	// -- files to be included in the package
		"files": [
			"dist"
		],
	// -- this is the new way to define the entry points to your package
		"exports": {
			".": {
				"import": {
					"types": "./dist/index.d.ts",
					"default": "./dist/index.js"
				},
				"require": {
					"types": "./dist/index.d.cts",
					"default": "./dist/index.cjs"
				}
			}
		},
4- make sure that noEmit is 'true' in tsconfig.json and in package.json scripts, "lint": "tsc"
5- testing
  add "dev": "bun test --watch" to package.json scripts
  add "test": "bun test" to package.json scripts
6- CI
	add "ci": "bun run lint && bun run test && bun run build" to package.json scripts
	then add the 'ci.yml' file
7- manage releases
	`bun i -d @changesets/cli` `bunx changeset init`  
	add "version": "0.0.1" to your package.json file then `bunx changeset` to create a new changeset for the new version
	change 'restricted' to 'public' in the changeset config file
8- CD AKA 'release'
	add "release": "bun run ci && changeset publish" to package.json scripts
	then add the 'release.yml' file
	allow the github action to write to the repo, and to create and approve pull requests
		- settings> actions> general> Allow GitHub Actions to create and approve pull requests
	add the 'NPM_TOKEN' to the secrets in the repo
		- settings> actions> secrets> new repository secret
	get the 'NPM_TOKEN' from the npm website
		make it a classic token instead of granular one
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
