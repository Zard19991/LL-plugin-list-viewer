interface Manifest {
  manifest_version?: number
  /** 插件类型 */
  type?: 'extension' | 'theme' | 'framework'
  /** 插件名字 */
  name: string
  /** 代码内标识 */
  slug: string
  /** 插件描述 */
  description: string
  /** 版本号 */
  version: string
  /** 插件的图标，写入相对路径字符串 */
  icon?: string | null
  /** 置选项的图标，写入相对路径字符串 */
  thumb?: string | null
  /** 作者们的信息 */
  authors: Author[]
  /** 插件仓库信息 */
  repository: Repository
  /** 插件支持的系统平台 */
  platform: Array<'win32' | 'linux' | 'darwin'>
  /** 要注入的脚本 */
  injects: Injects
  /** 插件依赖项，写入插件slug名 */
  dependencies?: string[]
}
