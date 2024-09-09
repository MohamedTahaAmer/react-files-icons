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

let svgToAccessibleName = (svgFileName: string) => svgFileName.replace(/\.svg$/, "").replace(/_/g, " ")
export let GetIcon = ({ name, type, ...props }: SvgsForTheClientProps) => {
  if (type === "File") {
    let svgFileName = getIconNameForFile(name) ?? ""
    let accessibleName = svgToAccessibleName(svgFileName)
    let Icon = getTSXIcon(svgFileName) ?? DefaultFile
    return (
      <Suspense fallback={<DefaultFile aria-label="File" />}>
        <Icon {...props} aria-label={accessibleName} />
      </Suspense>
    )
  } else if (type === "Folder") {
    let svgFileName = getIconNameForFolder(name)
    let accessibleName = svgToAccessibleName(svgFileName)
    let Icon = getTSXIcon(svgFileName) ?? DefaultFolder
    return (
      <Suspense fallback={<DefaultFolder aria-label="Folder" />}>
        <Icon {...props} aria-label={accessibleName} />
      </Suspense>
    )
  } else if (type === "OpenFolder") {
    let svgFileName = getIconNameForOpenFolder(name)
    let accessibleName = svgToAccessibleName(svgFileName)
    let Icon = getTSXIcon(svgFileName) ?? DefaultFolderOpened
    return (
      <Suspense fallback={<DefaultFolderOpened aria-label="Folder opened" />}>
        <Icon {...props} aria-label={accessibleName} />
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
type DynamicIconType = Omit<SvgsForTheClientProps, "type">

export let SuspendedFileIcon = (props: DynamicIconType) => <GetIcon {...props} type="File" />
export let SuspendedFolderIcon = (props: DynamicIconType) => <GetIcon {...props} type="Folder" />
export let SuspendedOpenFolderIcon = (props: DynamicIconType) => <GetIcon {...props} type="OpenFolder" />
