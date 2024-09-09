import { lazy, Suspense, type SVGProps } from "react"
import { getIconNameForFile, getIconNameForFolder, getIconNameForOpenFolder } from "./get-icons"
import { DefaultFile, DefaultFolder, DefaultFolderOpened } from "./icons"

let svgFileNameToTSX = (svgFileName: string) => {
  let camelCaseFileName = svgFileName.replace(/[_-]([a-z])/g, (_, p1: string) => p1.toUpperCase())
  const pascalCaseFileName = camelCaseFileName.charAt(0).toUpperCase() + camelCaseFileName.slice(1)
  return pascalCaseFileName.replace(".svg", "")
}

let getTSXIcon = (svgName: string) => {
  let tsxIconName = svgFileNameToTSX(svgName)
  /* @ts-expect-error */
  let Icon = lazy(() => import(`./icons`).then((module) => ({ default: module[tsxIconName] })))
  return Icon
}

export let GetIcon = ({ name, type, ...props }: SvgsForTheClientProps) => {
  if (type === "File") {
    let svgFileName = getIconNameForFile(name) ?? ""
    let Icon = getTSXIcon(svgFileName) ?? DefaultFile
    return (
      <Suspense fallback={<DefaultFile />}>
        <Icon {...props} />
      </Suspense>
    )
  } else if (type === "Folder") {
    let svgFileName = getIconNameForFolder(name)
    let Icon = getTSXIcon(svgFileName) ?? DefaultFolder
    return (
      <Suspense fallback={<DefaultFolder />}>
        <Icon {...props} />
      </Suspense>
    )
  } else if (type === "OpenFolder") {
    let svgFileName = getIconNameForOpenFolder(name)
    let Icon = getTSXIcon(svgFileName) ?? DefaultFolderOpened
    return (
      <Suspense fallback={<DefaultFolderOpened />}>
        <Icon {...props} />
      </Suspense>
    )
  }
  return <DefaultFile {...props} />
}

type IconTypes = "File" | "Folder" | "OpenFolder"
interface SvgsForTheClientProps extends SVGProps<SVGSVGElement> {
  name: string
  type: IconTypes
}
type DynamicIcon = Omit<SvgsForTheClientProps, "type">

export let SuspendedFileIcon = (props: DynamicIcon) => <GetIcon {...props} type="File" />
export let SuspendedFolderIcon = (props: DynamicIcon) => <GetIcon {...props} type="Folder" />
export let SuspendedOpenFolderIcon = (props: DynamicIcon) => <GetIcon {...props} type="OpenFolder" />
