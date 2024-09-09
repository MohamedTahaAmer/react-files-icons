import type { SVGProps } from "react"
import { icons } from "./icons"
import { getIconNameForFile, getIconNameForFolder, getIconNameForOpenFolder } from "./get-icons"

let svgFileNameToTSX = (svgFileName: string) => {
  let camelCaseFileName = svgFileName.replace(/[_-]([a-z])/g, (_, p1: string) => p1.toUpperCase())
  const pascalCaseFileName = camelCaseFileName.charAt(0).toUpperCase() + camelCaseFileName.slice(1)
  return pascalCaseFileName.replace(".svg", "")
}

let getTSXIcon = (svgName: string) => {
  let tsxIconName = svgFileNameToTSX(svgName) as keyof typeof icons
  return icons[tsxIconName]
}

export let getIcon = (name: string, type: "File" | "Folder" | "OpenFolder") => {
  if (type === "File") {
    let svgFileName = getIconNameForFile(name) ?? ""
    return getTSXIcon(svgFileName) ?? icons.DefaultFile
  } else if (type === "Folder") {
    let svgFileName = getIconNameForFolder(name)
    return getTSXIcon(svgFileName) ?? icons.DefaultFolder
  } else if (type === "OpenFolder") {
    let svgFileName = getIconNameForOpenFolder(name)
    return getTSXIcon(svgFileName) ?? icons.DefaultFolderOpened
  }
  return icons.DefaultFile
}

export let getIconForFile = (name: string) => getIcon(name, "File")
export let getIconForFolder = (name: string) => getIcon(name, "Folder")
export let getIconForOpenFolder = (name: string) => getIcon(name, "OpenFolder")

type IconTypes = "File" | "Folder" | "OpenFolder"
interface SvgsForTheClientProps extends SVGProps<SVGSVGElement> {
  name: string
  type: IconTypes
}
export type DynamicIconType = Omit<SvgsForTheClientProps, "type">

export let GetIcon = ({ name, type, ...props }: SvgsForTheClientProps) => {
  let Icon = getIcon(name, type)
  return <Icon {...props} />
}

export let FileIcon = (props: DynamicIconType) => <GetIcon {...props} type="File" />
export let FolderIcon = (props: DynamicIconType) => <GetIcon {...props} type="Folder" />
export let OpenFolderIcon = (props: DynamicIconType) => <GetIcon {...props} type="OpenFolder" />
