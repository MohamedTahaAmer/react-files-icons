import { expect, describe, it } from "bun:test"
import { getIconNameForFile, getIconNameForFolder, getIconNameForOpenFolder } from "../src/get-icons"

describe("Icons test", () => {
	describe("files", () => {
		it("should return icons by special filenames", () => {
			expect([
				getIconNameForFile("manifest.bak"),
				getIconNameForFile(".nvmrc"),
				getIconNameForFile("phpunit"),
				getIconNameForFile("phpunit.xml.dist"),
				getIconNameForFile("rollup.config.js"),
				getIconNameForFile("tsconfig.json"),
				getIconNameForFile("tsconfig.spec.json"),
				getIconNameForFile("webpack.base.conf.js"),
				getIconNameForFile(".eslintrc.yaml"),
			]).toEqual([
				"file_type_manifest_bak.svg",
				"file_type_node.svg",
				"file_type_phpunit.svg",
				"file_type_phpunit.svg",
				"file_type_rollup.svg",
				"file_type_tsconfig.svg",
				"file_type_tsconfig.svg",
				"file_type_webpack.svg",
				"file_type_eslint.svg",
			])
		})

		it("should return icons by special filenames, but defined by vscode langs", () => {
			expect([getIconNameForFile("Jenkinsfile"), getIconNameForFile("guardfile")]).toEqual([
				"file_type_groovy.svg",
				"file_type_ruby.svg",
			])
		})

		it("should return icons by extensions", () => {
			expect([
				getIconNameForFile("All.test.ts"),
				getIconNameForFile("All.test.tsx"),
				getIconNameForFile("package.nls.de.json"),
				getIconNameForFile("content.js.map"),
			]).toEqual([
				"file_type_testts.svg",
				"file_type_testts.svg",
				"file_type_light_json.svg",
				"file_type_light_jsmap.svg",
			])
		})

		it("should return icons by languages", () => {
			expect([
				getIconNameForFile("content.js"),
				getIconNameForFile("Index.script.ts"),
				getIconNameForFile("__main__.py"),
			]).toEqual(["file_type_light_js.svg", "file_type_typescript.svg", "file_type_python.svg"])
		})

		it("should return default icons for unknown", () => {
			expect([getIconNameForFile("undefined")]).toEqual(["default_file.svg"])
		})
	})

	describe("folders", () => {
		it("should return icons for folders", () => {
			expect([getIconNameForFolder("images"), getIconNameForFolder("src"), getIconNameForFolder("locale")]).toEqual([
				"folder_type_images.svg",
				"folder_type_src.svg",
				"folder_type_locale.svg",
			])
		})

		it("should return icons for opened folders", () => {
			expect([
				getIconNameForOpenFolder("images"),
				getIconNameForOpenFolder("src"),
				getIconNameForOpenFolder("locale"),
			]).toEqual(["folder_type_images_opened.svg", "folder_type_src_opened.svg", "folder_type_locale_opened.svg"])
		})

		it("should return default icons for unknown", () => {
			expect([getIconNameForOpenFolder("undefined")]).toEqual(["default_folder_opened.svg"])
		})
	})
})
