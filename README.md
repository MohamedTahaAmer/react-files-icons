<p align="center">
  <a href="https://github.com/MohamedTahaAmer/react-files-icons">
    <img src="https://utfs.io/f/b9b8de02-2d81-431a-8b09-199f3f24e224-8ndh56.svg" alt="React-Files-Icons" width="200">
  </a>
  <a href="https://github.com/MohamedTahaAmer/react-files-icons">
  <h1 align="center">React Files Icons</h1>
  </a>
</p>

<p align="center">
  <a href="https://github.com/MohamedTahaAmer/react-files-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/react-files-icons" alt="license"></a>
  <a href="https://www.npmjs.com/package/react-files-icons"><img src="https://img.shields.io/npm/v/react-files-icons" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/react-files-icons"><img src="https://img.shields.io/npm/dw/react-files-icons" alt="npm downloads"></a>
</p>

`react-files-icons` is a collection of file and folder icons for `React` applications. This package provides 1200 SVG icons for files and folders.

> You can pass file or folder name and `react file icons` will infer the appropriate Icon to display.

All the Icons are JSX components that accepts all props that can be passed to a JSX Element, allowing for easy styling and total control over the appearance of the icons.

# Design Decisions

- Local SVGs: Instead of fetching icons on the fly, all icons are included locally and converted to JSX components. This reduces the number of requests, resulting in faster performance.

- JSX Components: By converting the SVG icons to JSX components, users can easily customize the style of the icons using React props. This provides more flexibility in terms of scaling, coloring, and applying additional styles.

# Installation

```bash
npm install react-files-icons
bun install react-files-icons
pnpm install react-files-icons
yarn add react-files-icons
```

# Example usage

> Sample App: [react-files-icons-preview](https://react-files-icons-preview.vercel.app/)

### 1. Displaying Icons by their direct name.

```jsx
// - Only these Icons will be shipped in the client bundle.

import { FileTypeCss, FolderTypeSrc, FolderTypeSrcOpened } from "react-files-icons/icons"

function Icons() {
  return (
    <>
      <FileTypeCss className="size-24" aria-label="Css Icon" />
      <FolderTypeSrc className="size-24" aria-label="Folder Icon" />
      <FolderTypeSrcOpened className="size-24" aria-label="Open Folder Icon" />
    </>
  )
}
export default Icons
```

### 2. Inferring the Icon name based on the file or folder name.

```jsx
// - The Icon name will be inferred from the name prop.
// - All Icons will be shipped in the client bundle.

import { FileIcon, FolderIcon, OpenFolderIcon } from "react-files-icons"

function DynamicIcons({ name }) {
  return (
    <>
      <FileIcon name="index.css" />
      <FolderIcon name="src" />
      <OpenFolderIcon name="src" />
    </>
  )
}
export default DynamicIcons
```

### 3. Lazy Loading Icons

```jsx
// - The Icon name will be inferred from the name prop.
// - Icons are fetched from the server after the initial render and a placeholder will be displayed meanwhile.

import { SuspendedFileIcon, SuspendedFolderIcon, SuspendedOpenFolderIcon } from "react-files-icons/suspended"

function DynamicIcons({ name }) {
  return (
    <>
      <SuspendedFileIcon name="index.css" />
      <SuspendedFolderIcon name="src" />
      <SuspendedOpenFolderIcon name="src" />
    </>
  )
}
export default DynamicIcons
```

# Acknowledgements

This package was inspired by vscode-icons-js, which provided a comprehensive set of file and folder icons. I have adapted the logic from this package to infer the appropriate icon based on the file name, while re-imagining how the icons are delivered and used in a React context.
