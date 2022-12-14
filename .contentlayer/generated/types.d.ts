// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Category = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Category'
  title: string
  id: string
  index: number
  subCategory?: string[] | undefined
  /** MDX file body */
  body: MDX
  cnt: number
}

export type Main = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Main'
  /** MDX file body */
  body: MDX

}

export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  /** Title of the post */
  title: string
  /** Published time of the post */
  published_at: IsoDateTimeString
  /** Last modified time of the post */
  last_modified_at: IsoDateTimeString
  category: string[]
  tag?: string[] | undefined
  summary?: string | undefined
  /** MDX file body */
  body: MDX
  fileName: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Category | Main | Post
export type DocumentTypeNames = 'Category' | 'Main' | 'Post'

export type NestedTypes = never
export type NestedTypeNames = never


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Category: Category
  Main: Main
  Post: Post
}

export type NestedTypeMap = {

}

 