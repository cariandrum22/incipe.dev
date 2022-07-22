/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
  GatsbyImageData: any;
  HASURA_timestamptz: any;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly trailingSlash: Maybe<Scalars['String']>;
  readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly author: Maybe<SiteSiteMetadataAuthor>;
};

type SiteSiteMetadataAuthor = {
  readonly name: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly url: Maybe<Scalars['String']>;
  readonly placeholderUrl: Maybe<Scalars['String']>;
  readonly mimeType: Scalars['String'];
  readonly filename: Scalars['String'];
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly filesize: Maybe<Scalars['Int']>;
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  fit?: Maybe<RemoteFileFit>;
  format?: Maybe<RemoteFileFormat>;
  cropFocus: Maybe<ReadonlyArray<Maybe<RemoteFileCropFocus>>>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_gatsbyImageArgs = {
  layout?: Maybe<RemoteFileLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<RemoteFilePlaceholder>;
  aspectRatio: Maybe<Scalars['Float']>;
  formats?: Maybe<ReadonlyArray<RemoteFileFormat>>;
  outputPixelDensities?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  fit?: Maybe<RemoteFileFit>;
  cropFocus: Maybe<ReadonlyArray<Maybe<RemoteFileCropFocus>>>;
  quality?: Maybe<Scalars['Int']>;
};

/** Remote Interface */
type RemoteFile = {
  readonly id: Scalars['ID'];
  readonly mimeType: Scalars['String'];
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
};


/** Remote Interface */
type RemoteFile_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  fit?: Maybe<RemoteFileFit>;
  format?: Maybe<RemoteFileFormat>;
  cropFocus: Maybe<ReadonlyArray<Maybe<RemoteFileCropFocus>>>;
  quality?: Maybe<Scalars['Int']>;
};


/** Remote Interface */
type RemoteFile_gatsbyImageArgs = {
  layout?: Maybe<RemoteFileLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<RemoteFilePlaceholder>;
  aspectRatio: Maybe<Scalars['Float']>;
  formats?: Maybe<ReadonlyArray<RemoteFileFormat>>;
  outputPixelDensities?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  fit?: Maybe<RemoteFileFit>;
  cropFocus: Maybe<ReadonlyArray<Maybe<RemoteFileCropFocus>>>;
  quality?: Maybe<Scalars['Int']>;
};

type RemoteFileResize = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly src: Maybe<Scalars['String']>;
};

type RemoteFileFit =
  | 'cover'
  | 'fill'
  | 'outside'
  | 'contain';

type RemoteFileFormat =
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type RemoteFileCropFocus =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'entropy'
  | 'edges'
  | 'faces';


type RemoteFileLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type RemoteFilePlaceholder =
  | 'dominantColor'
  | 'blurred'
  | 'tracedSVG'
  | 'none';

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulPage = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<contentfulPageBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPageSys>;
  /** Returns all children nodes filtered by type contentfulPageBodyTextNode */
  readonly childrenContentfulPageBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulPageBodyTextNode>>>;
  /** Returns the first child node of type contentfulPageBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulPageBodyTextNode: Maybe<contentfulPageBodyTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPage_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPage_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPageSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPageSysContentType>;
};

type ContentfulPageSysContentType = {
  readonly sys: Maybe<ContentfulPageSysContentTypeSys>;
};

type ContentfulPageSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly publishedOn: Maybe<Scalars['Date']>;
  readonly body: Maybe<contentfulPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPostSys>;
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly heroImage: Maybe<ContentfulAsset>;
  readonly authors: Maybe<ReadonlyArray<Maybe<ContentfulAuthor>>>;
  readonly description: Maybe<contentfulPostDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulPostDescriptionTextNode */
  readonly childrenContentfulPostDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulPostDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulPostDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulPostBodyTextNode */
  readonly childrenContentfulPostBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulPostBodyTextNode>>>;
  /** Returns the first child node of type contentfulPostBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPost_publishedOnArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly contentType: Maybe<ContentfulPostSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulPostSysContentType = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSys>;
};

type ContentfulPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly identity: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly emailAddress: Maybe<Scalars['String']>;
  readonly profile: Maybe<Scalars['String']>;
  readonly picture: Maybe<ContentfulAsset>;
  readonly post: Maybe<ReadonlyArray<Maybe<ContentfulPost>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAuthorSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAuthor_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAuthor_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulAuthorSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulAuthorSysContentType>;
};

type ContentfulAuthorSysContentType = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSys>;
};

type ContentfulAuthorSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type contentfulPostDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPostDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
};

type contentfulPostDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPostBodyTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
};

type contentfulPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPageBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPageBodyTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
};

type contentfulPageBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type GraphQLSource = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
type HASURA_Int_comparison_exp = {
  readonly _eq: Maybe<Scalars['Int']>;
  readonly _gt: Maybe<Scalars['Int']>;
  readonly _gte: Maybe<Scalars['Int']>;
  readonly _in: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null: Maybe<Scalars['Boolean']>;
  readonly _lt: Maybe<Scalars['Int']>;
  readonly _lte: Maybe<Scalars['Int']>;
  readonly _neq: Maybe<Scalars['Int']>;
  readonly _nin: Maybe<ReadonlyArray<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
type HASURA_String_comparison_exp = {
  readonly _eq: Maybe<Scalars['String']>;
  readonly _gt: Maybe<Scalars['String']>;
  readonly _gte: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike: Maybe<Scalars['String']>;
  readonly _in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex: Maybe<Scalars['String']>;
  readonly _is_null: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like: Maybe<Scalars['String']>;
  readonly _lt: Maybe<Scalars['String']>;
  readonly _lte: Maybe<Scalars['String']>;
  readonly _neq: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike: Maybe<Scalars['String']>;
  readonly _nin: Maybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar: Maybe<Scalars['String']>;
};

/** column ordering options */
type HASURA_order_by =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "pages" */
type HASURA_pages = {
  readonly body: Scalars['String'];
  readonly created_at: Scalars['HASURA_timestamptz'];
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly title: Scalars['String'];
  readonly updated_at: Scalars['HASURA_timestamptz'];
};

/** aggregated selection of "pages" */
type HASURA_pages_aggregate = {
  readonly aggregate: Maybe<HASURA_pages_aggregate_fields>;
  readonly nodes: ReadonlyArray<HASURA_pages>;
};

/** aggregate fields of "pages" */
type HASURA_pages_aggregate_fields = {
  readonly avg: Maybe<HASURA_pages_avg_fields>;
  readonly count: Scalars['Int'];
  readonly max: Maybe<HASURA_pages_max_fields>;
  readonly min: Maybe<HASURA_pages_min_fields>;
  readonly stddev: Maybe<HASURA_pages_stddev_fields>;
  readonly stddev_pop: Maybe<HASURA_pages_stddev_pop_fields>;
  readonly stddev_samp: Maybe<HASURA_pages_stddev_samp_fields>;
  readonly sum: Maybe<HASURA_pages_sum_fields>;
  readonly var_pop: Maybe<HASURA_pages_var_pop_fields>;
  readonly var_samp: Maybe<HASURA_pages_var_samp_fields>;
  readonly variance: Maybe<HASURA_pages_variance_fields>;
};


/** aggregate fields of "pages" */
type HASURA_pages_aggregate_fields_countArgs = {
  columns: Maybe<ReadonlyArray<HASURA_pages_select_column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
type HASURA_pages_avg_fields = {
  readonly id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pages". All fields are combined with a logical 'AND'. */
type HASURA_pages_bool_exp = {
  readonly _and: Maybe<ReadonlyArray<HASURA_pages_bool_exp>>;
  readonly _not: Maybe<HASURA_pages_bool_exp>;
  readonly _or: Maybe<ReadonlyArray<HASURA_pages_bool_exp>>;
  readonly body: Maybe<HASURA_String_comparison_exp>;
  readonly created_at: Maybe<HASURA_timestamptz_comparison_exp>;
  readonly description: Maybe<HASURA_String_comparison_exp>;
  readonly id: Maybe<HASURA_Int_comparison_exp>;
  readonly title: Maybe<HASURA_String_comparison_exp>;
  readonly updated_at: Maybe<HASURA_timestamptz_comparison_exp>;
};

/** unique or primary key constraints on table "pages" */
type HASURA_pages_constraint =
  /** unique or primary key constraint on columns "id" */
  | 'pages_pkey';

/** input type for incrementing numeric columns in table "pages" */
type HASURA_pages_inc_input = {
  readonly id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "pages" */
type HASURA_pages_insert_input = {
  readonly body: Maybe<Scalars['String']>;
  readonly created_at: Maybe<Scalars['HASURA_timestamptz']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updated_at: Maybe<Scalars['HASURA_timestamptz']>;
};

/** aggregate max on columns */
type HASURA_pages_max_fields = {
  readonly body: Maybe<Scalars['String']>;
  readonly created_at: Maybe<Scalars['HASURA_timestamptz']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updated_at: Maybe<Scalars['HASURA_timestamptz']>;
};

/** aggregate min on columns */
type HASURA_pages_min_fields = {
  readonly body: Maybe<Scalars['String']>;
  readonly created_at: Maybe<Scalars['HASURA_timestamptz']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updated_at: Maybe<Scalars['HASURA_timestamptz']>;
};

/** response of any mutation on the table "pages" */
type HASURA_pages_mutation_response = {
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<HASURA_pages>;
};

/** on_conflict condition type for table "pages" */
type HASURA_pages_on_conflict = {
  readonly constraint: HASURA_pages_constraint;
  readonly update_columns: ReadonlyArray<HASURA_pages_update_column>;
  readonly where: Maybe<HASURA_pages_bool_exp>;
};

/** Ordering options when selecting data from "pages". */
type HASURA_pages_order_by = {
  readonly body: Maybe<HASURA_order_by>;
  readonly created_at: Maybe<HASURA_order_by>;
  readonly description: Maybe<HASURA_order_by>;
  readonly id: Maybe<HASURA_order_by>;
  readonly title: Maybe<HASURA_order_by>;
  readonly updated_at: Maybe<HASURA_order_by>;
};

/** primary key columns input for table: pages */
type HASURA_pages_pk_columns_input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "pages" */
type HASURA_pages_select_column =
  /** column name */
  | 'body'
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "pages" */
type HASURA_pages_set_input = {
  readonly body: Maybe<Scalars['String']>;
  readonly created_at: Maybe<Scalars['HASURA_timestamptz']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updated_at: Maybe<Scalars['HASURA_timestamptz']>;
};

/** aggregate stddev on columns */
type HASURA_pages_stddev_fields = {
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
type HASURA_pages_stddev_pop_fields = {
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
type HASURA_pages_stddev_samp_fields = {
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
type HASURA_pages_sum_fields = {
  readonly id: Maybe<Scalars['Int']>;
};

/** update columns of table "pages" */
type HASURA_pages_update_column =
  /** column name */
  | 'body'
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
type HASURA_pages_var_pop_fields = {
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
type HASURA_pages_var_samp_fields = {
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
type HASURA_pages_variance_fields = {
  readonly id: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
type HASURA_timestamptz_comparison_exp = {
  readonly _eq: Maybe<Scalars['HASURA_timestamptz']>;
  readonly _gt: Maybe<Scalars['HASURA_timestamptz']>;
  readonly _gte: Maybe<Scalars['HASURA_timestamptz']>;
  readonly _in: Maybe<ReadonlyArray<Scalars['HASURA_timestamptz']>>;
  readonly _is_null: Maybe<Scalars['Boolean']>;
  readonly _lt: Maybe<Scalars['HASURA_timestamptz']>;
  readonly _lte: Maybe<Scalars['HASURA_timestamptz']>;
  readonly _neq: Maybe<Scalars['HASURA_timestamptz']>;
  readonly _nin: Maybe<ReadonlyArray<Scalars['HASURA_timestamptz']>>;
};

type HASURA = {
  /** fetch data from the table: "pages" */
  readonly pages: ReadonlyArray<HASURA_pages>;
  /** fetch aggregated fields from the table: "pages" */
  readonly pages_aggregate: HASURA_pages_aggregate;
  /** fetch data from the table: "pages" using primary key columns */
  readonly pages_by_pk: Maybe<HASURA_pages>;
};


type HASURA_pagesArgs = {
  distinct_on: Maybe<ReadonlyArray<HASURA_pages_select_column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<ReadonlyArray<HASURA_pages_order_by>>;
  where: Maybe<HASURA_pages_bool_exp>;
};


type HASURA_pages_aggregateArgs = {
  distinct_on: Maybe<ReadonlyArray<HASURA_pages_select_column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<ReadonlyArray<HASURA_pages_order_by>>;
  where: Maybe<HASURA_pages_bool_exp>;
};


type HASURA_pages_by_pkArgs = {
  id: Scalars['Int'];
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulPage: Maybe<ContentfulPage>;
  readonly allContentfulPage: ContentfulPageConnection;
  readonly contentfulPost: Maybe<ContentfulPost>;
  readonly allContentfulPost: ContentfulPostConnection;
  readonly contentfulAuthor: Maybe<ContentfulAuthor>;
  readonly allContentfulAuthor: ContentfulAuthorConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNode>;
  readonly allContentfulPostDescriptionTextNode: contentfulPostDescriptionTextNodeConnection;
  readonly contentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNode>;
  readonly allContentfulPostBodyTextNode: contentfulPostBodyTextNodeConnection;
  readonly contentfulPageBodyTextNode: Maybe<contentfulPageBodyTextNode>;
  readonly allContentfulPageBodyTextNode: contentfulPageBodyTextNodeConnection;
  readonly graphQlSource: Maybe<GraphQLSource>;
  readonly allGraphQlSource: GraphQLSourceConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly hasura: HASURA;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  trailingSlash: Maybe<StringQueryOperatorInput>;
  graphqlTypegen: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  placeholderUrl: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  filename: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  filesize: Maybe<IntQueryOperatorInput>;
  publicUrl: Maybe<StringQueryOperatorInput>;
  resize: Maybe<RemoteFileResizeFilterInput>;
  gatsbyImage: Maybe<GatsbyImageDataQueryOperatorInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  body: Maybe<contentfulPageBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPageSysFilterInput>;
  childrenContentfulPageBodyTextNode: Maybe<contentfulPageBodyTextNodeFilterListInput>;
  childContentfulPageBodyTextNode: Maybe<contentfulPageBodyTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPageArgs = {
  filter: Maybe<ContentfulPageFilterInput>;
  sort: Maybe<ContentfulPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  publishedOn: Maybe<DateQueryOperatorInput>;
  body: Maybe<contentfulPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPostSysFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  heroImage: Maybe<ContentfulAssetFilterInput>;
  authors: Maybe<ContentfulAuthorFilterListInput>;
  description: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
  childrenContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterListInput>;
  childContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
  childrenContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterListInput>;
  childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPostArgs = {
  filter: Maybe<ContentfulPostFilterInput>;
  sort: Maybe<ContentfulPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  identity: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  emailAddress: Maybe<StringQueryOperatorInput>;
  profile: Maybe<StringQueryOperatorInput>;
  picture: Maybe<ContentfulAssetFilterInput>;
  post: Maybe<ContentfulPostFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAuthorSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAuthorArgs = {
  filter: Maybe<ContentfulAuthorFilterInput>;
  sort: Maybe<ContentfulAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<GatsbyImageDataQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPostDescriptionTextNodeSysFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
};


type Query_allContentfulPostDescriptionTextNodeArgs = {
  filter: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulPostDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPostBodyTextNodeSysFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
};


type Query_allContentfulPostBodyTextNodeArgs = {
  filter: Maybe<contentfulPostBodyTextNodeFilterInput>;
  sort: Maybe<contentfulPostBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPageBodyTextNodeSysFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
};


type Query_allContentfulPageBodyTextNodeArgs = {
  filter: Maybe<contentfulPageBodyTextNodeFilterInput>;
  sort: Maybe<contentfulPageBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphQlSourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
};


type Query_allGraphQlSourceArgs = {
  filter: Maybe<GraphQLSourceFilterInput>;
  sort: Maybe<GraphQLSourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<GatsbyImageDataQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type GatsbyImageDataQueryOperatorInput = {
  readonly eq: Maybe<Scalars['GatsbyImageData']>;
  readonly ne: Maybe<Scalars['GatsbyImageData']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['GatsbyImageData']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['GatsbyImageData']>>>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<SiteSiteMetadataAuthorFilterInput>;
};

type SiteSiteMetadataAuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly github: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.author.name'
  | 'siteMetadata.author.email'
  | 'siteMetadata.author.github'
  | 'siteMetadata.author.twitter'
  | 'siteMetadata.author.facebook'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'graphqlTypegen'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly trailingSlash: Maybe<StringQueryOperatorInput>;
  readonly graphqlTypegen: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type RemoteFileResizeFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'gatsbyImageData'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'url'
  | 'placeholderUrl'
  | 'mimeType'
  | 'filename'
  | 'width'
  | 'height'
  | 'size'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'filesize'
  | 'publicUrl'
  | 'resize.width'
  | 'resize.height'
  | 'resize.src'
  | 'gatsbyImage';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly placeholderUrl: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly filename: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly filesize: Maybe<IntQueryOperatorInput>;
  readonly publicUrl: Maybe<StringQueryOperatorInput>;
  readonly resize: Maybe<RemoteFileResizeFilterInput>;
  readonly gatsbyImage: Maybe<GatsbyImageDataQueryOperatorInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPageBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPageBodyTextNodeSysFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
};

type contentfulPageBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type ContentfulPageSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

type ContentfulPageSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

type ContentfulPageSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulPageBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPageBodyTextNodeFilterInput>;
};

type ContentfulPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageEdge>;
  readonly nodes: ReadonlyArray<ContentfulPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPageGroupConnection>;
};


type ContentfulPageConnection_distinctArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageConnection_maxArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageConnection_minArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageConnection_sumArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

type ContentfulPageEdge = {
  readonly next: Maybe<ContentfulPage>;
  readonly node: ContentfulPage;
  readonly previous: Maybe<ContentfulPage>;
};

type ContentfulPageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'body.id'
  | 'body.parent.id'
  | 'body.parent.parent.id'
  | 'body.parent.parent.children'
  | 'body.parent.children'
  | 'body.parent.children.id'
  | 'body.parent.children.children'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.children'
  | 'body.children.id'
  | 'body.children.parent.id'
  | 'body.children.parent.children'
  | 'body.children.children'
  | 'body.children.children.id'
  | 'body.children.children.children'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.body'
  | 'body.sys.type'
  | 'body.childrenMdx'
  | 'body.childrenMdx.rawBody'
  | 'body.childrenMdx.fileAbsolutePath'
  | 'body.childrenMdx.frontmatter.title'
  | 'body.childrenMdx.slug'
  | 'body.childrenMdx.body'
  | 'body.childrenMdx.excerpt'
  | 'body.childrenMdx.headings'
  | 'body.childrenMdx.headings.value'
  | 'body.childrenMdx.headings.depth'
  | 'body.childrenMdx.html'
  | 'body.childrenMdx.mdxAST'
  | 'body.childrenMdx.tableOfContents'
  | 'body.childrenMdx.timeToRead'
  | 'body.childrenMdx.wordCount.paragraphs'
  | 'body.childrenMdx.wordCount.sentences'
  | 'body.childrenMdx.wordCount.words'
  | 'body.childrenMdx.id'
  | 'body.childrenMdx.parent.id'
  | 'body.childrenMdx.parent.children'
  | 'body.childrenMdx.children'
  | 'body.childrenMdx.children.id'
  | 'body.childrenMdx.children.children'
  | 'body.childrenMdx.internal.content'
  | 'body.childrenMdx.internal.contentDigest'
  | 'body.childrenMdx.internal.description'
  | 'body.childrenMdx.internal.fieldOwners'
  | 'body.childrenMdx.internal.ignoreType'
  | 'body.childrenMdx.internal.mediaType'
  | 'body.childrenMdx.internal.owner'
  | 'body.childrenMdx.internal.type'
  | 'body.childMdx.rawBody'
  | 'body.childMdx.fileAbsolutePath'
  | 'body.childMdx.frontmatter.title'
  | 'body.childMdx.slug'
  | 'body.childMdx.body'
  | 'body.childMdx.excerpt'
  | 'body.childMdx.headings'
  | 'body.childMdx.headings.value'
  | 'body.childMdx.headings.depth'
  | 'body.childMdx.html'
  | 'body.childMdx.mdxAST'
  | 'body.childMdx.tableOfContents'
  | 'body.childMdx.timeToRead'
  | 'body.childMdx.wordCount.paragraphs'
  | 'body.childMdx.wordCount.sentences'
  | 'body.childMdx.wordCount.words'
  | 'body.childMdx.id'
  | 'body.childMdx.parent.id'
  | 'body.childMdx.parent.children'
  | 'body.childMdx.children'
  | 'body.childMdx.children.id'
  | 'body.childMdx.children.children'
  | 'body.childMdx.internal.content'
  | 'body.childMdx.internal.contentDigest'
  | 'body.childMdx.internal.description'
  | 'body.childMdx.internal.fieldOwners'
  | 'body.childMdx.internal.ignoreType'
  | 'body.childMdx.internal.mediaType'
  | 'body.childMdx.internal.owner'
  | 'body.childMdx.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulPageBodyTextNode'
  | 'childrenContentfulPageBodyTextNode.id'
  | 'childrenContentfulPageBodyTextNode.parent.id'
  | 'childrenContentfulPageBodyTextNode.parent.parent.id'
  | 'childrenContentfulPageBodyTextNode.parent.parent.children'
  | 'childrenContentfulPageBodyTextNode.parent.children'
  | 'childrenContentfulPageBodyTextNode.parent.children.id'
  | 'childrenContentfulPageBodyTextNode.parent.children.children'
  | 'childrenContentfulPageBodyTextNode.parent.internal.content'
  | 'childrenContentfulPageBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPageBodyTextNode.parent.internal.description'
  | 'childrenContentfulPageBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPageBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPageBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulPageBodyTextNode.parent.internal.owner'
  | 'childrenContentfulPageBodyTextNode.parent.internal.type'
  | 'childrenContentfulPageBodyTextNode.children'
  | 'childrenContentfulPageBodyTextNode.children.id'
  | 'childrenContentfulPageBodyTextNode.children.parent.id'
  | 'childrenContentfulPageBodyTextNode.children.parent.children'
  | 'childrenContentfulPageBodyTextNode.children.children'
  | 'childrenContentfulPageBodyTextNode.children.children.id'
  | 'childrenContentfulPageBodyTextNode.children.children.children'
  | 'childrenContentfulPageBodyTextNode.children.internal.content'
  | 'childrenContentfulPageBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulPageBodyTextNode.children.internal.description'
  | 'childrenContentfulPageBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPageBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulPageBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulPageBodyTextNode.children.internal.owner'
  | 'childrenContentfulPageBodyTextNode.children.internal.type'
  | 'childrenContentfulPageBodyTextNode.internal.content'
  | 'childrenContentfulPageBodyTextNode.internal.contentDigest'
  | 'childrenContentfulPageBodyTextNode.internal.description'
  | 'childrenContentfulPageBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulPageBodyTextNode.internal.ignoreType'
  | 'childrenContentfulPageBodyTextNode.internal.mediaType'
  | 'childrenContentfulPageBodyTextNode.internal.owner'
  | 'childrenContentfulPageBodyTextNode.internal.type'
  | 'childrenContentfulPageBodyTextNode.body'
  | 'childrenContentfulPageBodyTextNode.sys.type'
  | 'childrenContentfulPageBodyTextNode.childrenMdx'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.rawBody'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.frontmatter.title'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.slug'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.body'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.excerpt'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.headings'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.headings.value'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.headings.depth'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.html'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.mdxAST'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.tableOfContents'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.timeToRead'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.wordCount.paragraphs'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.wordCount.sentences'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.wordCount.words'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.id'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.parent.id'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.parent.children'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.children'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.children.id'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.children.children'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.content'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.contentDigest'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.description'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.fieldOwners'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.ignoreType'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.mediaType'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.owner'
  | 'childrenContentfulPageBodyTextNode.childrenMdx.internal.type'
  | 'childrenContentfulPageBodyTextNode.childMdx.rawBody'
  | 'childrenContentfulPageBodyTextNode.childMdx.fileAbsolutePath'
  | 'childrenContentfulPageBodyTextNode.childMdx.frontmatter.title'
  | 'childrenContentfulPageBodyTextNode.childMdx.slug'
  | 'childrenContentfulPageBodyTextNode.childMdx.body'
  | 'childrenContentfulPageBodyTextNode.childMdx.excerpt'
  | 'childrenContentfulPageBodyTextNode.childMdx.headings'
  | 'childrenContentfulPageBodyTextNode.childMdx.headings.value'
  | 'childrenContentfulPageBodyTextNode.childMdx.headings.depth'
  | 'childrenContentfulPageBodyTextNode.childMdx.html'
  | 'childrenContentfulPageBodyTextNode.childMdx.mdxAST'
  | 'childrenContentfulPageBodyTextNode.childMdx.tableOfContents'
  | 'childrenContentfulPageBodyTextNode.childMdx.timeToRead'
  | 'childrenContentfulPageBodyTextNode.childMdx.wordCount.paragraphs'
  | 'childrenContentfulPageBodyTextNode.childMdx.wordCount.sentences'
  | 'childrenContentfulPageBodyTextNode.childMdx.wordCount.words'
  | 'childrenContentfulPageBodyTextNode.childMdx.id'
  | 'childrenContentfulPageBodyTextNode.childMdx.parent.id'
  | 'childrenContentfulPageBodyTextNode.childMdx.parent.children'
  | 'childrenContentfulPageBodyTextNode.childMdx.children'
  | 'childrenContentfulPageBodyTextNode.childMdx.children.id'
  | 'childrenContentfulPageBodyTextNode.childMdx.children.children'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.content'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.contentDigest'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.description'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.fieldOwners'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.ignoreType'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.mediaType'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.owner'
  | 'childrenContentfulPageBodyTextNode.childMdx.internal.type'
  | 'childContentfulPageBodyTextNode.id'
  | 'childContentfulPageBodyTextNode.parent.id'
  | 'childContentfulPageBodyTextNode.parent.parent.id'
  | 'childContentfulPageBodyTextNode.parent.parent.children'
  | 'childContentfulPageBodyTextNode.parent.children'
  | 'childContentfulPageBodyTextNode.parent.children.id'
  | 'childContentfulPageBodyTextNode.parent.children.children'
  | 'childContentfulPageBodyTextNode.parent.internal.content'
  | 'childContentfulPageBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulPageBodyTextNode.parent.internal.description'
  | 'childContentfulPageBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulPageBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulPageBodyTextNode.parent.internal.mediaType'
  | 'childContentfulPageBodyTextNode.parent.internal.owner'
  | 'childContentfulPageBodyTextNode.parent.internal.type'
  | 'childContentfulPageBodyTextNode.children'
  | 'childContentfulPageBodyTextNode.children.id'
  | 'childContentfulPageBodyTextNode.children.parent.id'
  | 'childContentfulPageBodyTextNode.children.parent.children'
  | 'childContentfulPageBodyTextNode.children.children'
  | 'childContentfulPageBodyTextNode.children.children.id'
  | 'childContentfulPageBodyTextNode.children.children.children'
  | 'childContentfulPageBodyTextNode.children.internal.content'
  | 'childContentfulPageBodyTextNode.children.internal.contentDigest'
  | 'childContentfulPageBodyTextNode.children.internal.description'
  | 'childContentfulPageBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulPageBodyTextNode.children.internal.ignoreType'
  | 'childContentfulPageBodyTextNode.children.internal.mediaType'
  | 'childContentfulPageBodyTextNode.children.internal.owner'
  | 'childContentfulPageBodyTextNode.children.internal.type'
  | 'childContentfulPageBodyTextNode.internal.content'
  | 'childContentfulPageBodyTextNode.internal.contentDigest'
  | 'childContentfulPageBodyTextNode.internal.description'
  | 'childContentfulPageBodyTextNode.internal.fieldOwners'
  | 'childContentfulPageBodyTextNode.internal.ignoreType'
  | 'childContentfulPageBodyTextNode.internal.mediaType'
  | 'childContentfulPageBodyTextNode.internal.owner'
  | 'childContentfulPageBodyTextNode.internal.type'
  | 'childContentfulPageBodyTextNode.body'
  | 'childContentfulPageBodyTextNode.sys.type'
  | 'childContentfulPageBodyTextNode.childrenMdx'
  | 'childContentfulPageBodyTextNode.childrenMdx.rawBody'
  | 'childContentfulPageBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'childContentfulPageBodyTextNode.childrenMdx.frontmatter.title'
  | 'childContentfulPageBodyTextNode.childrenMdx.slug'
  | 'childContentfulPageBodyTextNode.childrenMdx.body'
  | 'childContentfulPageBodyTextNode.childrenMdx.excerpt'
  | 'childContentfulPageBodyTextNode.childrenMdx.headings'
  | 'childContentfulPageBodyTextNode.childrenMdx.headings.value'
  | 'childContentfulPageBodyTextNode.childrenMdx.headings.depth'
  | 'childContentfulPageBodyTextNode.childrenMdx.html'
  | 'childContentfulPageBodyTextNode.childrenMdx.mdxAST'
  | 'childContentfulPageBodyTextNode.childrenMdx.tableOfContents'
  | 'childContentfulPageBodyTextNode.childrenMdx.timeToRead'
  | 'childContentfulPageBodyTextNode.childrenMdx.wordCount.paragraphs'
  | 'childContentfulPageBodyTextNode.childrenMdx.wordCount.sentences'
  | 'childContentfulPageBodyTextNode.childrenMdx.wordCount.words'
  | 'childContentfulPageBodyTextNode.childrenMdx.id'
  | 'childContentfulPageBodyTextNode.childrenMdx.parent.id'
  | 'childContentfulPageBodyTextNode.childrenMdx.parent.children'
  | 'childContentfulPageBodyTextNode.childrenMdx.children'
  | 'childContentfulPageBodyTextNode.childrenMdx.children.id'
  | 'childContentfulPageBodyTextNode.childrenMdx.children.children'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.content'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.contentDigest'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.description'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.fieldOwners'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.ignoreType'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.mediaType'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.owner'
  | 'childContentfulPageBodyTextNode.childrenMdx.internal.type'
  | 'childContentfulPageBodyTextNode.childMdx.rawBody'
  | 'childContentfulPageBodyTextNode.childMdx.fileAbsolutePath'
  | 'childContentfulPageBodyTextNode.childMdx.frontmatter.title'
  | 'childContentfulPageBodyTextNode.childMdx.slug'
  | 'childContentfulPageBodyTextNode.childMdx.body'
  | 'childContentfulPageBodyTextNode.childMdx.excerpt'
  | 'childContentfulPageBodyTextNode.childMdx.headings'
  | 'childContentfulPageBodyTextNode.childMdx.headings.value'
  | 'childContentfulPageBodyTextNode.childMdx.headings.depth'
  | 'childContentfulPageBodyTextNode.childMdx.html'
  | 'childContentfulPageBodyTextNode.childMdx.mdxAST'
  | 'childContentfulPageBodyTextNode.childMdx.tableOfContents'
  | 'childContentfulPageBodyTextNode.childMdx.timeToRead'
  | 'childContentfulPageBodyTextNode.childMdx.wordCount.paragraphs'
  | 'childContentfulPageBodyTextNode.childMdx.wordCount.sentences'
  | 'childContentfulPageBodyTextNode.childMdx.wordCount.words'
  | 'childContentfulPageBodyTextNode.childMdx.id'
  | 'childContentfulPageBodyTextNode.childMdx.parent.id'
  | 'childContentfulPageBodyTextNode.childMdx.parent.children'
  | 'childContentfulPageBodyTextNode.childMdx.children'
  | 'childContentfulPageBodyTextNode.childMdx.children.id'
  | 'childContentfulPageBodyTextNode.childMdx.children.children'
  | 'childContentfulPageBodyTextNode.childMdx.internal.content'
  | 'childContentfulPageBodyTextNode.childMdx.internal.contentDigest'
  | 'childContentfulPageBodyTextNode.childMdx.internal.description'
  | 'childContentfulPageBodyTextNode.childMdx.internal.fieldOwners'
  | 'childContentfulPageBodyTextNode.childMdx.internal.ignoreType'
  | 'childContentfulPageBodyTextNode.childMdx.internal.mediaType'
  | 'childContentfulPageBodyTextNode.childMdx.internal.owner'
  | 'childContentfulPageBodyTextNode.childMdx.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageEdge>;
  readonly nodes: ReadonlyArray<ContentfulPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulPageGroupConnection_distinctArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageGroupConnection_maxArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageGroupConnection_minArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageGroupConnection_sumArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

type ContentfulPageFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<contentfulPageBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPageSysFilterInput>;
  readonly childrenContentfulPageBodyTextNode: Maybe<contentfulPageBodyTextNodeFilterListInput>;
  readonly childContentfulPageBodyTextNode: Maybe<contentfulPageBodyTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPostBodyTextNodeSysFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
};

type contentfulPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPostSysContentTypeFilterInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

type ContentfulPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulAuthorFilterListInput = {
  readonly elemMatch: Maybe<ContentfulAuthorFilterInput>;
};

type ContentfulAuthorFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly identity: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly emailAddress: Maybe<StringQueryOperatorInput>;
  readonly profile: Maybe<StringQueryOperatorInput>;
  readonly picture: Maybe<ContentfulAssetFilterInput>;
  readonly post: Maybe<ContentfulPostFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAuthorSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulPostFilterInput>;
};

type ContentfulPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly publishedOn: Maybe<DateQueryOperatorInput>;
  readonly body: Maybe<contentfulPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPostSysFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly heroImage: Maybe<ContentfulAssetFilterInput>;
  readonly authors: Maybe<ContentfulAuthorFilterListInput>;
  readonly description: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
  readonly childrenContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterListInput>;
  readonly childContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
  readonly childrenContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterListInput>;
  readonly childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulPostDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPostDescriptionTextNodeSysFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
};

type contentfulPostDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulPostDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
};

type contentfulPostBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPostBodyTextNodeFilterInput>;
};

type ContentfulAuthorSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

type ContentfulAuthorSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

type ContentfulAuthorSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
};


type ContentfulPostConnection_distinctArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_maxArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_minArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_sumArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

type ContentfulPostEdge = {
  readonly next: Maybe<ContentfulPost>;
  readonly node: ContentfulPost;
  readonly previous: Maybe<ContentfulPost>;
};

type ContentfulPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'publishedOn'
  | 'body.id'
  | 'body.parent.id'
  | 'body.parent.parent.id'
  | 'body.parent.parent.children'
  | 'body.parent.children'
  | 'body.parent.children.id'
  | 'body.parent.children.children'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.children'
  | 'body.children.id'
  | 'body.children.parent.id'
  | 'body.children.parent.children'
  | 'body.children.children'
  | 'body.children.children.id'
  | 'body.children.children.children'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.body'
  | 'body.sys.type'
  | 'body.childrenMdx'
  | 'body.childrenMdx.rawBody'
  | 'body.childrenMdx.fileAbsolutePath'
  | 'body.childrenMdx.frontmatter.title'
  | 'body.childrenMdx.slug'
  | 'body.childrenMdx.body'
  | 'body.childrenMdx.excerpt'
  | 'body.childrenMdx.headings'
  | 'body.childrenMdx.headings.value'
  | 'body.childrenMdx.headings.depth'
  | 'body.childrenMdx.html'
  | 'body.childrenMdx.mdxAST'
  | 'body.childrenMdx.tableOfContents'
  | 'body.childrenMdx.timeToRead'
  | 'body.childrenMdx.wordCount.paragraphs'
  | 'body.childrenMdx.wordCount.sentences'
  | 'body.childrenMdx.wordCount.words'
  | 'body.childrenMdx.id'
  | 'body.childrenMdx.parent.id'
  | 'body.childrenMdx.parent.children'
  | 'body.childrenMdx.children'
  | 'body.childrenMdx.children.id'
  | 'body.childrenMdx.children.children'
  | 'body.childrenMdx.internal.content'
  | 'body.childrenMdx.internal.contentDigest'
  | 'body.childrenMdx.internal.description'
  | 'body.childrenMdx.internal.fieldOwners'
  | 'body.childrenMdx.internal.ignoreType'
  | 'body.childrenMdx.internal.mediaType'
  | 'body.childrenMdx.internal.owner'
  | 'body.childrenMdx.internal.type'
  | 'body.childMdx.rawBody'
  | 'body.childMdx.fileAbsolutePath'
  | 'body.childMdx.frontmatter.title'
  | 'body.childMdx.slug'
  | 'body.childMdx.body'
  | 'body.childMdx.excerpt'
  | 'body.childMdx.headings'
  | 'body.childMdx.headings.value'
  | 'body.childMdx.headings.depth'
  | 'body.childMdx.html'
  | 'body.childMdx.mdxAST'
  | 'body.childMdx.tableOfContents'
  | 'body.childMdx.timeToRead'
  | 'body.childMdx.wordCount.paragraphs'
  | 'body.childMdx.wordCount.sentences'
  | 'body.childMdx.wordCount.words'
  | 'body.childMdx.id'
  | 'body.childMdx.parent.id'
  | 'body.childMdx.parent.children'
  | 'body.childMdx.children'
  | 'body.childMdx.children.id'
  | 'body.childMdx.children.children'
  | 'body.childMdx.internal.content'
  | 'body.childMdx.internal.contentDigest'
  | 'body.childMdx.internal.description'
  | 'body.childMdx.internal.fieldOwners'
  | 'body.childMdx.internal.ignoreType'
  | 'body.childMdx.internal.mediaType'
  | 'body.childMdx.internal.owner'
  | 'body.childMdx.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'sys.revision'
  | 'slug'
  | 'tags'
  | 'heroImage.contentful_id'
  | 'heroImage.id'
  | 'heroImage.gatsbyImageData'
  | 'heroImage.spaceId'
  | 'heroImage.createdAt'
  | 'heroImage.updatedAt'
  | 'heroImage.file.url'
  | 'heroImage.file.details.size'
  | 'heroImage.file.fileName'
  | 'heroImage.file.contentType'
  | 'heroImage.title'
  | 'heroImage.description'
  | 'heroImage.node_locale'
  | 'heroImage.sys.type'
  | 'heroImage.sys.revision'
  | 'heroImage.url'
  | 'heroImage.placeholderUrl'
  | 'heroImage.mimeType'
  | 'heroImage.filename'
  | 'heroImage.width'
  | 'heroImage.height'
  | 'heroImage.size'
  | 'heroImage.parent.id'
  | 'heroImage.parent.parent.id'
  | 'heroImage.parent.parent.children'
  | 'heroImage.parent.children'
  | 'heroImage.parent.children.id'
  | 'heroImage.parent.children.children'
  | 'heroImage.parent.internal.content'
  | 'heroImage.parent.internal.contentDigest'
  | 'heroImage.parent.internal.description'
  | 'heroImage.parent.internal.fieldOwners'
  | 'heroImage.parent.internal.ignoreType'
  | 'heroImage.parent.internal.mediaType'
  | 'heroImage.parent.internal.owner'
  | 'heroImage.parent.internal.type'
  | 'heroImage.children'
  | 'heroImage.children.id'
  | 'heroImage.children.parent.id'
  | 'heroImage.children.parent.children'
  | 'heroImage.children.children'
  | 'heroImage.children.children.id'
  | 'heroImage.children.children.children'
  | 'heroImage.children.internal.content'
  | 'heroImage.children.internal.contentDigest'
  | 'heroImage.children.internal.description'
  | 'heroImage.children.internal.fieldOwners'
  | 'heroImage.children.internal.ignoreType'
  | 'heroImage.children.internal.mediaType'
  | 'heroImage.children.internal.owner'
  | 'heroImage.children.internal.type'
  | 'heroImage.internal.content'
  | 'heroImage.internal.contentDigest'
  | 'heroImage.internal.description'
  | 'heroImage.internal.fieldOwners'
  | 'heroImage.internal.ignoreType'
  | 'heroImage.internal.mediaType'
  | 'heroImage.internal.owner'
  | 'heroImage.internal.type'
  | 'heroImage.filesize'
  | 'heroImage.publicUrl'
  | 'heroImage.resize.width'
  | 'heroImage.resize.height'
  | 'heroImage.resize.src'
  | 'heroImage.gatsbyImage'
  | 'authors'
  | 'authors.contentful_id'
  | 'authors.id'
  | 'authors.node_locale'
  | 'authors.identity'
  | 'authors.name'
  | 'authors.emailAddress'
  | 'authors.profile'
  | 'authors.picture.contentful_id'
  | 'authors.picture.id'
  | 'authors.picture.gatsbyImageData'
  | 'authors.picture.spaceId'
  | 'authors.picture.createdAt'
  | 'authors.picture.updatedAt'
  | 'authors.picture.file.url'
  | 'authors.picture.file.fileName'
  | 'authors.picture.file.contentType'
  | 'authors.picture.title'
  | 'authors.picture.description'
  | 'authors.picture.node_locale'
  | 'authors.picture.sys.type'
  | 'authors.picture.sys.revision'
  | 'authors.picture.url'
  | 'authors.picture.placeholderUrl'
  | 'authors.picture.mimeType'
  | 'authors.picture.filename'
  | 'authors.picture.width'
  | 'authors.picture.height'
  | 'authors.picture.size'
  | 'authors.picture.parent.id'
  | 'authors.picture.parent.children'
  | 'authors.picture.children'
  | 'authors.picture.children.id'
  | 'authors.picture.children.children'
  | 'authors.picture.internal.content'
  | 'authors.picture.internal.contentDigest'
  | 'authors.picture.internal.description'
  | 'authors.picture.internal.fieldOwners'
  | 'authors.picture.internal.ignoreType'
  | 'authors.picture.internal.mediaType'
  | 'authors.picture.internal.owner'
  | 'authors.picture.internal.type'
  | 'authors.picture.filesize'
  | 'authors.picture.publicUrl'
  | 'authors.picture.resize.width'
  | 'authors.picture.resize.height'
  | 'authors.picture.resize.src'
  | 'authors.picture.gatsbyImage'
  | 'authors.post'
  | 'authors.post.contentful_id'
  | 'authors.post.id'
  | 'authors.post.node_locale'
  | 'authors.post.title'
  | 'authors.post.publishedOn'
  | 'authors.post.body.id'
  | 'authors.post.body.children'
  | 'authors.post.body.body'
  | 'authors.post.body.childrenMdx'
  | 'authors.post.spaceId'
  | 'authors.post.createdAt'
  | 'authors.post.updatedAt'
  | 'authors.post.sys.type'
  | 'authors.post.sys.revision'
  | 'authors.post.slug'
  | 'authors.post.tags'
  | 'authors.post.heroImage.contentful_id'
  | 'authors.post.heroImage.id'
  | 'authors.post.heroImage.gatsbyImageData'
  | 'authors.post.heroImage.spaceId'
  | 'authors.post.heroImage.createdAt'
  | 'authors.post.heroImage.updatedAt'
  | 'authors.post.heroImage.title'
  | 'authors.post.heroImage.description'
  | 'authors.post.heroImage.node_locale'
  | 'authors.post.heroImage.url'
  | 'authors.post.heroImage.placeholderUrl'
  | 'authors.post.heroImage.mimeType'
  | 'authors.post.heroImage.filename'
  | 'authors.post.heroImage.width'
  | 'authors.post.heroImage.height'
  | 'authors.post.heroImage.size'
  | 'authors.post.heroImage.children'
  | 'authors.post.heroImage.filesize'
  | 'authors.post.heroImage.publicUrl'
  | 'authors.post.heroImage.gatsbyImage'
  | 'authors.post.authors'
  | 'authors.post.authors.contentful_id'
  | 'authors.post.authors.id'
  | 'authors.post.authors.node_locale'
  | 'authors.post.authors.identity'
  | 'authors.post.authors.name'
  | 'authors.post.authors.emailAddress'
  | 'authors.post.authors.profile'
  | 'authors.post.authors.post'
  | 'authors.post.authors.spaceId'
  | 'authors.post.authors.createdAt'
  | 'authors.post.authors.updatedAt'
  | 'authors.post.authors.children'
  | 'authors.post.description.id'
  | 'authors.post.description.children'
  | 'authors.post.description.description'
  | 'authors.post.description.childrenMdx'
  | 'authors.post.childrenContentfulPostDescriptionTextNode'
  | 'authors.post.childrenContentfulPostDescriptionTextNode.id'
  | 'authors.post.childrenContentfulPostDescriptionTextNode.children'
  | 'authors.post.childrenContentfulPostDescriptionTextNode.description'
  | 'authors.post.childrenContentfulPostDescriptionTextNode.childrenMdx'
  | 'authors.post.childContentfulPostDescriptionTextNode.id'
  | 'authors.post.childContentfulPostDescriptionTextNode.children'
  | 'authors.post.childContentfulPostDescriptionTextNode.description'
  | 'authors.post.childContentfulPostDescriptionTextNode.childrenMdx'
  | 'authors.post.childrenContentfulPostBodyTextNode'
  | 'authors.post.childrenContentfulPostBodyTextNode.id'
  | 'authors.post.childrenContentfulPostBodyTextNode.children'
  | 'authors.post.childrenContentfulPostBodyTextNode.body'
  | 'authors.post.childrenContentfulPostBodyTextNode.childrenMdx'
  | 'authors.post.childContentfulPostBodyTextNode.id'
  | 'authors.post.childContentfulPostBodyTextNode.children'
  | 'authors.post.childContentfulPostBodyTextNode.body'
  | 'authors.post.childContentfulPostBodyTextNode.childrenMdx'
  | 'authors.post.parent.id'
  | 'authors.post.parent.children'
  | 'authors.post.children'
  | 'authors.post.children.id'
  | 'authors.post.children.children'
  | 'authors.post.internal.content'
  | 'authors.post.internal.contentDigest'
  | 'authors.post.internal.description'
  | 'authors.post.internal.fieldOwners'
  | 'authors.post.internal.ignoreType'
  | 'authors.post.internal.mediaType'
  | 'authors.post.internal.owner'
  | 'authors.post.internal.type'
  | 'authors.spaceId'
  | 'authors.createdAt'
  | 'authors.updatedAt'
  | 'authors.sys.type'
  | 'authors.sys.revision'
  | 'authors.parent.id'
  | 'authors.parent.parent.id'
  | 'authors.parent.parent.children'
  | 'authors.parent.children'
  | 'authors.parent.children.id'
  | 'authors.parent.children.children'
  | 'authors.parent.internal.content'
  | 'authors.parent.internal.contentDigest'
  | 'authors.parent.internal.description'
  | 'authors.parent.internal.fieldOwners'
  | 'authors.parent.internal.ignoreType'
  | 'authors.parent.internal.mediaType'
  | 'authors.parent.internal.owner'
  | 'authors.parent.internal.type'
  | 'authors.children'
  | 'authors.children.id'
  | 'authors.children.parent.id'
  | 'authors.children.parent.children'
  | 'authors.children.children'
  | 'authors.children.children.id'
  | 'authors.children.children.children'
  | 'authors.children.internal.content'
  | 'authors.children.internal.contentDigest'
  | 'authors.children.internal.description'
  | 'authors.children.internal.fieldOwners'
  | 'authors.children.internal.ignoreType'
  | 'authors.children.internal.mediaType'
  | 'authors.children.internal.owner'
  | 'authors.children.internal.type'
  | 'authors.internal.content'
  | 'authors.internal.contentDigest'
  | 'authors.internal.description'
  | 'authors.internal.fieldOwners'
  | 'authors.internal.ignoreType'
  | 'authors.internal.mediaType'
  | 'authors.internal.owner'
  | 'authors.internal.type'
  | 'description.id'
  | 'description.parent.id'
  | 'description.parent.parent.id'
  | 'description.parent.parent.children'
  | 'description.parent.children'
  | 'description.parent.children.id'
  | 'description.parent.children.children'
  | 'description.parent.internal.content'
  | 'description.parent.internal.contentDigest'
  | 'description.parent.internal.description'
  | 'description.parent.internal.fieldOwners'
  | 'description.parent.internal.ignoreType'
  | 'description.parent.internal.mediaType'
  | 'description.parent.internal.owner'
  | 'description.parent.internal.type'
  | 'description.children'
  | 'description.children.id'
  | 'description.children.parent.id'
  | 'description.children.parent.children'
  | 'description.children.children'
  | 'description.children.children.id'
  | 'description.children.children.children'
  | 'description.children.internal.content'
  | 'description.children.internal.contentDigest'
  | 'description.children.internal.description'
  | 'description.children.internal.fieldOwners'
  | 'description.children.internal.ignoreType'
  | 'description.children.internal.mediaType'
  | 'description.children.internal.owner'
  | 'description.children.internal.type'
  | 'description.internal.content'
  | 'description.internal.contentDigest'
  | 'description.internal.description'
  | 'description.internal.fieldOwners'
  | 'description.internal.ignoreType'
  | 'description.internal.mediaType'
  | 'description.internal.owner'
  | 'description.internal.type'
  | 'description.description'
  | 'description.sys.type'
  | 'description.childrenMdx'
  | 'description.childrenMdx.rawBody'
  | 'description.childrenMdx.fileAbsolutePath'
  | 'description.childrenMdx.frontmatter.title'
  | 'description.childrenMdx.slug'
  | 'description.childrenMdx.body'
  | 'description.childrenMdx.excerpt'
  | 'description.childrenMdx.headings'
  | 'description.childrenMdx.headings.value'
  | 'description.childrenMdx.headings.depth'
  | 'description.childrenMdx.html'
  | 'description.childrenMdx.mdxAST'
  | 'description.childrenMdx.tableOfContents'
  | 'description.childrenMdx.timeToRead'
  | 'description.childrenMdx.wordCount.paragraphs'
  | 'description.childrenMdx.wordCount.sentences'
  | 'description.childrenMdx.wordCount.words'
  | 'description.childrenMdx.id'
  | 'description.childrenMdx.parent.id'
  | 'description.childrenMdx.parent.children'
  | 'description.childrenMdx.children'
  | 'description.childrenMdx.children.id'
  | 'description.childrenMdx.children.children'
  | 'description.childrenMdx.internal.content'
  | 'description.childrenMdx.internal.contentDigest'
  | 'description.childrenMdx.internal.description'
  | 'description.childrenMdx.internal.fieldOwners'
  | 'description.childrenMdx.internal.ignoreType'
  | 'description.childrenMdx.internal.mediaType'
  | 'description.childrenMdx.internal.owner'
  | 'description.childrenMdx.internal.type'
  | 'description.childMdx.rawBody'
  | 'description.childMdx.fileAbsolutePath'
  | 'description.childMdx.frontmatter.title'
  | 'description.childMdx.slug'
  | 'description.childMdx.body'
  | 'description.childMdx.excerpt'
  | 'description.childMdx.headings'
  | 'description.childMdx.headings.value'
  | 'description.childMdx.headings.depth'
  | 'description.childMdx.html'
  | 'description.childMdx.mdxAST'
  | 'description.childMdx.tableOfContents'
  | 'description.childMdx.timeToRead'
  | 'description.childMdx.wordCount.paragraphs'
  | 'description.childMdx.wordCount.sentences'
  | 'description.childMdx.wordCount.words'
  | 'description.childMdx.id'
  | 'description.childMdx.parent.id'
  | 'description.childMdx.parent.children'
  | 'description.childMdx.children'
  | 'description.childMdx.children.id'
  | 'description.childMdx.children.children'
  | 'description.childMdx.internal.content'
  | 'description.childMdx.internal.contentDigest'
  | 'description.childMdx.internal.description'
  | 'description.childMdx.internal.fieldOwners'
  | 'description.childMdx.internal.ignoreType'
  | 'description.childMdx.internal.mediaType'
  | 'description.childMdx.internal.owner'
  | 'description.childMdx.internal.type'
  | 'childrenContentfulPostDescriptionTextNode'
  | 'childrenContentfulPostDescriptionTextNode.id'
  | 'childrenContentfulPostDescriptionTextNode.parent.id'
  | 'childrenContentfulPostDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulPostDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulPostDescriptionTextNode.parent.children'
  | 'childrenContentfulPostDescriptionTextNode.parent.children.id'
  | 'childrenContentfulPostDescriptionTextNode.parent.children.children'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulPostDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulPostDescriptionTextNode.children'
  | 'childrenContentfulPostDescriptionTextNode.children.id'
  | 'childrenContentfulPostDescriptionTextNode.children.parent.id'
  | 'childrenContentfulPostDescriptionTextNode.children.parent.children'
  | 'childrenContentfulPostDescriptionTextNode.children.children'
  | 'childrenContentfulPostDescriptionTextNode.children.children.id'
  | 'childrenContentfulPostDescriptionTextNode.children.children.children'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.content'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.description'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulPostDescriptionTextNode.children.internal.type'
  | 'childrenContentfulPostDescriptionTextNode.internal.content'
  | 'childrenContentfulPostDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulPostDescriptionTextNode.internal.description'
  | 'childrenContentfulPostDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulPostDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulPostDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulPostDescriptionTextNode.internal.owner'
  | 'childrenContentfulPostDescriptionTextNode.internal.type'
  | 'childrenContentfulPostDescriptionTextNode.description'
  | 'childrenContentfulPostDescriptionTextNode.sys.type'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.rawBody'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.fileAbsolutePath'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.frontmatter.title'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.slug'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.body'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.excerpt'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.headings'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.headings.value'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.headings.depth'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.html'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.mdxAST'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.tableOfContents'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.timeToRead'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.wordCount.paragraphs'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.wordCount.sentences'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.wordCount.words'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.id'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.parent.id'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.parent.children'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.children'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.children.id'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.children.children'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.content'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.contentDigest'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.description'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.fieldOwners'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.ignoreType'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.mediaType'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.owner'
  | 'childrenContentfulPostDescriptionTextNode.childrenMdx.internal.type'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.rawBody'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.fileAbsolutePath'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.frontmatter.title'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.slug'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.body'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.excerpt'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.headings'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.headings.value'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.headings.depth'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.html'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.mdxAST'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.tableOfContents'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.timeToRead'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.wordCount.paragraphs'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.wordCount.sentences'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.wordCount.words'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.id'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.parent.id'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.parent.children'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.children'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.children.id'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.children.children'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.content'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.contentDigest'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.description'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.fieldOwners'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.ignoreType'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.mediaType'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.owner'
  | 'childrenContentfulPostDescriptionTextNode.childMdx.internal.type'
  | 'childContentfulPostDescriptionTextNode.id'
  | 'childContentfulPostDescriptionTextNode.parent.id'
  | 'childContentfulPostDescriptionTextNode.parent.parent.id'
  | 'childContentfulPostDescriptionTextNode.parent.parent.children'
  | 'childContentfulPostDescriptionTextNode.parent.children'
  | 'childContentfulPostDescriptionTextNode.parent.children.id'
  | 'childContentfulPostDescriptionTextNode.parent.children.children'
  | 'childContentfulPostDescriptionTextNode.parent.internal.content'
  | 'childContentfulPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulPostDescriptionTextNode.parent.internal.description'
  | 'childContentfulPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulPostDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulPostDescriptionTextNode.parent.internal.owner'
  | 'childContentfulPostDescriptionTextNode.parent.internal.type'
  | 'childContentfulPostDescriptionTextNode.children'
  | 'childContentfulPostDescriptionTextNode.children.id'
  | 'childContentfulPostDescriptionTextNode.children.parent.id'
  | 'childContentfulPostDescriptionTextNode.children.parent.children'
  | 'childContentfulPostDescriptionTextNode.children.children'
  | 'childContentfulPostDescriptionTextNode.children.children.id'
  | 'childContentfulPostDescriptionTextNode.children.children.children'
  | 'childContentfulPostDescriptionTextNode.children.internal.content'
  | 'childContentfulPostDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulPostDescriptionTextNode.children.internal.description'
  | 'childContentfulPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulPostDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulPostDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulPostDescriptionTextNode.children.internal.owner'
  | 'childContentfulPostDescriptionTextNode.children.internal.type'
  | 'childContentfulPostDescriptionTextNode.internal.content'
  | 'childContentfulPostDescriptionTextNode.internal.contentDigest'
  | 'childContentfulPostDescriptionTextNode.internal.description'
  | 'childContentfulPostDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulPostDescriptionTextNode.internal.ignoreType'
  | 'childContentfulPostDescriptionTextNode.internal.mediaType'
  | 'childContentfulPostDescriptionTextNode.internal.owner'
  | 'childContentfulPostDescriptionTextNode.internal.type'
  | 'childContentfulPostDescriptionTextNode.description'
  | 'childContentfulPostDescriptionTextNode.sys.type'
  | 'childContentfulPostDescriptionTextNode.childrenMdx'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.rawBody'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.fileAbsolutePath'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.frontmatter.title'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.slug'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.body'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.excerpt'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.headings'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.headings.value'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.headings.depth'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.html'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.mdxAST'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.tableOfContents'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.timeToRead'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.wordCount.paragraphs'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.wordCount.sentences'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.wordCount.words'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.id'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.parent.id'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.parent.children'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.children'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.children.id'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.children.children'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.content'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.contentDigest'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.description'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.fieldOwners'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.ignoreType'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.mediaType'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.owner'
  | 'childContentfulPostDescriptionTextNode.childrenMdx.internal.type'
  | 'childContentfulPostDescriptionTextNode.childMdx.rawBody'
  | 'childContentfulPostDescriptionTextNode.childMdx.fileAbsolutePath'
  | 'childContentfulPostDescriptionTextNode.childMdx.frontmatter.title'
  | 'childContentfulPostDescriptionTextNode.childMdx.slug'
  | 'childContentfulPostDescriptionTextNode.childMdx.body'
  | 'childContentfulPostDescriptionTextNode.childMdx.excerpt'
  | 'childContentfulPostDescriptionTextNode.childMdx.headings'
  | 'childContentfulPostDescriptionTextNode.childMdx.headings.value'
  | 'childContentfulPostDescriptionTextNode.childMdx.headings.depth'
  | 'childContentfulPostDescriptionTextNode.childMdx.html'
  | 'childContentfulPostDescriptionTextNode.childMdx.mdxAST'
  | 'childContentfulPostDescriptionTextNode.childMdx.tableOfContents'
  | 'childContentfulPostDescriptionTextNode.childMdx.timeToRead'
  | 'childContentfulPostDescriptionTextNode.childMdx.wordCount.paragraphs'
  | 'childContentfulPostDescriptionTextNode.childMdx.wordCount.sentences'
  | 'childContentfulPostDescriptionTextNode.childMdx.wordCount.words'
  | 'childContentfulPostDescriptionTextNode.childMdx.id'
  | 'childContentfulPostDescriptionTextNode.childMdx.parent.id'
  | 'childContentfulPostDescriptionTextNode.childMdx.parent.children'
  | 'childContentfulPostDescriptionTextNode.childMdx.children'
  | 'childContentfulPostDescriptionTextNode.childMdx.children.id'
  | 'childContentfulPostDescriptionTextNode.childMdx.children.children'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.content'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.contentDigest'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.description'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.fieldOwners'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.ignoreType'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.mediaType'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.owner'
  | 'childContentfulPostDescriptionTextNode.childMdx.internal.type'
  | 'childrenContentfulPostBodyTextNode'
  | 'childrenContentfulPostBodyTextNode.id'
  | 'childrenContentfulPostBodyTextNode.parent.id'
  | 'childrenContentfulPostBodyTextNode.parent.parent.id'
  | 'childrenContentfulPostBodyTextNode.parent.parent.children'
  | 'childrenContentfulPostBodyTextNode.parent.children'
  | 'childrenContentfulPostBodyTextNode.parent.children.id'
  | 'childrenContentfulPostBodyTextNode.parent.children.children'
  | 'childrenContentfulPostBodyTextNode.parent.internal.content'
  | 'childrenContentfulPostBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPostBodyTextNode.parent.internal.description'
  | 'childrenContentfulPostBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPostBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPostBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulPostBodyTextNode.parent.internal.owner'
  | 'childrenContentfulPostBodyTextNode.parent.internal.type'
  | 'childrenContentfulPostBodyTextNode.children'
  | 'childrenContentfulPostBodyTextNode.children.id'
  | 'childrenContentfulPostBodyTextNode.children.parent.id'
  | 'childrenContentfulPostBodyTextNode.children.parent.children'
  | 'childrenContentfulPostBodyTextNode.children.children'
  | 'childrenContentfulPostBodyTextNode.children.children.id'
  | 'childrenContentfulPostBodyTextNode.children.children.children'
  | 'childrenContentfulPostBodyTextNode.children.internal.content'
  | 'childrenContentfulPostBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulPostBodyTextNode.children.internal.description'
  | 'childrenContentfulPostBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPostBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulPostBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulPostBodyTextNode.children.internal.owner'
  | 'childrenContentfulPostBodyTextNode.children.internal.type'
  | 'childrenContentfulPostBodyTextNode.internal.content'
  | 'childrenContentfulPostBodyTextNode.internal.contentDigest'
  | 'childrenContentfulPostBodyTextNode.internal.description'
  | 'childrenContentfulPostBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulPostBodyTextNode.internal.ignoreType'
  | 'childrenContentfulPostBodyTextNode.internal.mediaType'
  | 'childrenContentfulPostBodyTextNode.internal.owner'
  | 'childrenContentfulPostBodyTextNode.internal.type'
  | 'childrenContentfulPostBodyTextNode.body'
  | 'childrenContentfulPostBodyTextNode.sys.type'
  | 'childrenContentfulPostBodyTextNode.childrenMdx'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.rawBody'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.frontmatter.title'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.slug'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.body'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.excerpt'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.headings'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.headings.value'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.headings.depth'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.html'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.mdxAST'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.tableOfContents'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.timeToRead'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.wordCount.paragraphs'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.wordCount.sentences'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.wordCount.words'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.id'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.parent.id'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.parent.children'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.children'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.children.id'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.children.children'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.content'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.contentDigest'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.description'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.fieldOwners'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.ignoreType'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.mediaType'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.owner'
  | 'childrenContentfulPostBodyTextNode.childrenMdx.internal.type'
  | 'childrenContentfulPostBodyTextNode.childMdx.rawBody'
  | 'childrenContentfulPostBodyTextNode.childMdx.fileAbsolutePath'
  | 'childrenContentfulPostBodyTextNode.childMdx.frontmatter.title'
  | 'childrenContentfulPostBodyTextNode.childMdx.slug'
  | 'childrenContentfulPostBodyTextNode.childMdx.body'
  | 'childrenContentfulPostBodyTextNode.childMdx.excerpt'
  | 'childrenContentfulPostBodyTextNode.childMdx.headings'
  | 'childrenContentfulPostBodyTextNode.childMdx.headings.value'
  | 'childrenContentfulPostBodyTextNode.childMdx.headings.depth'
  | 'childrenContentfulPostBodyTextNode.childMdx.html'
  | 'childrenContentfulPostBodyTextNode.childMdx.mdxAST'
  | 'childrenContentfulPostBodyTextNode.childMdx.tableOfContents'
  | 'childrenContentfulPostBodyTextNode.childMdx.timeToRead'
  | 'childrenContentfulPostBodyTextNode.childMdx.wordCount.paragraphs'
  | 'childrenContentfulPostBodyTextNode.childMdx.wordCount.sentences'
  | 'childrenContentfulPostBodyTextNode.childMdx.wordCount.words'
  | 'childrenContentfulPostBodyTextNode.childMdx.id'
  | 'childrenContentfulPostBodyTextNode.childMdx.parent.id'
  | 'childrenContentfulPostBodyTextNode.childMdx.parent.children'
  | 'childrenContentfulPostBodyTextNode.childMdx.children'
  | 'childrenContentfulPostBodyTextNode.childMdx.children.id'
  | 'childrenContentfulPostBodyTextNode.childMdx.children.children'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.content'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.contentDigest'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.description'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.fieldOwners'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.ignoreType'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.mediaType'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.owner'
  | 'childrenContentfulPostBodyTextNode.childMdx.internal.type'
  | 'childContentfulPostBodyTextNode.id'
  | 'childContentfulPostBodyTextNode.parent.id'
  | 'childContentfulPostBodyTextNode.parent.parent.id'
  | 'childContentfulPostBodyTextNode.parent.parent.children'
  | 'childContentfulPostBodyTextNode.parent.children'
  | 'childContentfulPostBodyTextNode.parent.children.id'
  | 'childContentfulPostBodyTextNode.parent.children.children'
  | 'childContentfulPostBodyTextNode.parent.internal.content'
  | 'childContentfulPostBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulPostBodyTextNode.parent.internal.description'
  | 'childContentfulPostBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulPostBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulPostBodyTextNode.parent.internal.mediaType'
  | 'childContentfulPostBodyTextNode.parent.internal.owner'
  | 'childContentfulPostBodyTextNode.parent.internal.type'
  | 'childContentfulPostBodyTextNode.children'
  | 'childContentfulPostBodyTextNode.children.id'
  | 'childContentfulPostBodyTextNode.children.parent.id'
  | 'childContentfulPostBodyTextNode.children.parent.children'
  | 'childContentfulPostBodyTextNode.children.children'
  | 'childContentfulPostBodyTextNode.children.children.id'
  | 'childContentfulPostBodyTextNode.children.children.children'
  | 'childContentfulPostBodyTextNode.children.internal.content'
  | 'childContentfulPostBodyTextNode.children.internal.contentDigest'
  | 'childContentfulPostBodyTextNode.children.internal.description'
  | 'childContentfulPostBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulPostBodyTextNode.children.internal.ignoreType'
  | 'childContentfulPostBodyTextNode.children.internal.mediaType'
  | 'childContentfulPostBodyTextNode.children.internal.owner'
  | 'childContentfulPostBodyTextNode.children.internal.type'
  | 'childContentfulPostBodyTextNode.internal.content'
  | 'childContentfulPostBodyTextNode.internal.contentDigest'
  | 'childContentfulPostBodyTextNode.internal.description'
  | 'childContentfulPostBodyTextNode.internal.fieldOwners'
  | 'childContentfulPostBodyTextNode.internal.ignoreType'
  | 'childContentfulPostBodyTextNode.internal.mediaType'
  | 'childContentfulPostBodyTextNode.internal.owner'
  | 'childContentfulPostBodyTextNode.internal.type'
  | 'childContentfulPostBodyTextNode.body'
  | 'childContentfulPostBodyTextNode.sys.type'
  | 'childContentfulPostBodyTextNode.childrenMdx'
  | 'childContentfulPostBodyTextNode.childrenMdx.rawBody'
  | 'childContentfulPostBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'childContentfulPostBodyTextNode.childrenMdx.frontmatter.title'
  | 'childContentfulPostBodyTextNode.childrenMdx.slug'
  | 'childContentfulPostBodyTextNode.childrenMdx.body'
  | 'childContentfulPostBodyTextNode.childrenMdx.excerpt'
  | 'childContentfulPostBodyTextNode.childrenMdx.headings'
  | 'childContentfulPostBodyTextNode.childrenMdx.headings.value'
  | 'childContentfulPostBodyTextNode.childrenMdx.headings.depth'
  | 'childContentfulPostBodyTextNode.childrenMdx.html'
  | 'childContentfulPostBodyTextNode.childrenMdx.mdxAST'
  | 'childContentfulPostBodyTextNode.childrenMdx.tableOfContents'
  | 'childContentfulPostBodyTextNode.childrenMdx.timeToRead'
  | 'childContentfulPostBodyTextNode.childrenMdx.wordCount.paragraphs'
  | 'childContentfulPostBodyTextNode.childrenMdx.wordCount.sentences'
  | 'childContentfulPostBodyTextNode.childrenMdx.wordCount.words'
  | 'childContentfulPostBodyTextNode.childrenMdx.id'
  | 'childContentfulPostBodyTextNode.childrenMdx.parent.id'
  | 'childContentfulPostBodyTextNode.childrenMdx.parent.children'
  | 'childContentfulPostBodyTextNode.childrenMdx.children'
  | 'childContentfulPostBodyTextNode.childrenMdx.children.id'
  | 'childContentfulPostBodyTextNode.childrenMdx.children.children'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.content'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.contentDigest'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.description'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.fieldOwners'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.ignoreType'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.mediaType'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.owner'
  | 'childContentfulPostBodyTextNode.childrenMdx.internal.type'
  | 'childContentfulPostBodyTextNode.childMdx.rawBody'
  | 'childContentfulPostBodyTextNode.childMdx.fileAbsolutePath'
  | 'childContentfulPostBodyTextNode.childMdx.frontmatter.title'
  | 'childContentfulPostBodyTextNode.childMdx.slug'
  | 'childContentfulPostBodyTextNode.childMdx.body'
  | 'childContentfulPostBodyTextNode.childMdx.excerpt'
  | 'childContentfulPostBodyTextNode.childMdx.headings'
  | 'childContentfulPostBodyTextNode.childMdx.headings.value'
  | 'childContentfulPostBodyTextNode.childMdx.headings.depth'
  | 'childContentfulPostBodyTextNode.childMdx.html'
  | 'childContentfulPostBodyTextNode.childMdx.mdxAST'
  | 'childContentfulPostBodyTextNode.childMdx.tableOfContents'
  | 'childContentfulPostBodyTextNode.childMdx.timeToRead'
  | 'childContentfulPostBodyTextNode.childMdx.wordCount.paragraphs'
  | 'childContentfulPostBodyTextNode.childMdx.wordCount.sentences'
  | 'childContentfulPostBodyTextNode.childMdx.wordCount.words'
  | 'childContentfulPostBodyTextNode.childMdx.id'
  | 'childContentfulPostBodyTextNode.childMdx.parent.id'
  | 'childContentfulPostBodyTextNode.childMdx.parent.children'
  | 'childContentfulPostBodyTextNode.childMdx.children'
  | 'childContentfulPostBodyTextNode.childMdx.children.id'
  | 'childContentfulPostBodyTextNode.childMdx.children.children'
  | 'childContentfulPostBodyTextNode.childMdx.internal.content'
  | 'childContentfulPostBodyTextNode.childMdx.internal.contentDigest'
  | 'childContentfulPostBodyTextNode.childMdx.internal.description'
  | 'childContentfulPostBodyTextNode.childMdx.internal.fieldOwners'
  | 'childContentfulPostBodyTextNode.childMdx.internal.ignoreType'
  | 'childContentfulPostBodyTextNode.childMdx.internal.mediaType'
  | 'childContentfulPostBodyTextNode.childMdx.internal.owner'
  | 'childContentfulPostBodyTextNode.childMdx.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulPostGroupConnection_distinctArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_maxArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_minArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_sumArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

type ContentfulPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
};


type ContentfulAuthorConnection_distinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_maxArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_minArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_sumArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

type ContentfulAuthorEdge = {
  readonly next: Maybe<ContentfulAuthor>;
  readonly node: ContentfulAuthor;
  readonly previous: Maybe<ContentfulAuthor>;
};

type ContentfulAuthorFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'identity'
  | 'name'
  | 'emailAddress'
  | 'profile'
  | 'picture.contentful_id'
  | 'picture.id'
  | 'picture.gatsbyImageData'
  | 'picture.spaceId'
  | 'picture.createdAt'
  | 'picture.updatedAt'
  | 'picture.file.url'
  | 'picture.file.details.size'
  | 'picture.file.fileName'
  | 'picture.file.contentType'
  | 'picture.title'
  | 'picture.description'
  | 'picture.node_locale'
  | 'picture.sys.type'
  | 'picture.sys.revision'
  | 'picture.url'
  | 'picture.placeholderUrl'
  | 'picture.mimeType'
  | 'picture.filename'
  | 'picture.width'
  | 'picture.height'
  | 'picture.size'
  | 'picture.parent.id'
  | 'picture.parent.parent.id'
  | 'picture.parent.parent.children'
  | 'picture.parent.children'
  | 'picture.parent.children.id'
  | 'picture.parent.children.children'
  | 'picture.parent.internal.content'
  | 'picture.parent.internal.contentDigest'
  | 'picture.parent.internal.description'
  | 'picture.parent.internal.fieldOwners'
  | 'picture.parent.internal.ignoreType'
  | 'picture.parent.internal.mediaType'
  | 'picture.parent.internal.owner'
  | 'picture.parent.internal.type'
  | 'picture.children'
  | 'picture.children.id'
  | 'picture.children.parent.id'
  | 'picture.children.parent.children'
  | 'picture.children.children'
  | 'picture.children.children.id'
  | 'picture.children.children.children'
  | 'picture.children.internal.content'
  | 'picture.children.internal.contentDigest'
  | 'picture.children.internal.description'
  | 'picture.children.internal.fieldOwners'
  | 'picture.children.internal.ignoreType'
  | 'picture.children.internal.mediaType'
  | 'picture.children.internal.owner'
  | 'picture.children.internal.type'
  | 'picture.internal.content'
  | 'picture.internal.contentDigest'
  | 'picture.internal.description'
  | 'picture.internal.fieldOwners'
  | 'picture.internal.ignoreType'
  | 'picture.internal.mediaType'
  | 'picture.internal.owner'
  | 'picture.internal.type'
  | 'picture.filesize'
  | 'picture.publicUrl'
  | 'picture.resize.width'
  | 'picture.resize.height'
  | 'picture.resize.src'
  | 'picture.gatsbyImage'
  | 'post'
  | 'post.contentful_id'
  | 'post.id'
  | 'post.node_locale'
  | 'post.title'
  | 'post.publishedOn'
  | 'post.body.id'
  | 'post.body.parent.id'
  | 'post.body.parent.children'
  | 'post.body.children'
  | 'post.body.children.id'
  | 'post.body.children.children'
  | 'post.body.internal.content'
  | 'post.body.internal.contentDigest'
  | 'post.body.internal.description'
  | 'post.body.internal.fieldOwners'
  | 'post.body.internal.ignoreType'
  | 'post.body.internal.mediaType'
  | 'post.body.internal.owner'
  | 'post.body.internal.type'
  | 'post.body.body'
  | 'post.body.sys.type'
  | 'post.body.childrenMdx'
  | 'post.body.childrenMdx.rawBody'
  | 'post.body.childrenMdx.fileAbsolutePath'
  | 'post.body.childrenMdx.slug'
  | 'post.body.childrenMdx.body'
  | 'post.body.childrenMdx.excerpt'
  | 'post.body.childrenMdx.headings'
  | 'post.body.childrenMdx.html'
  | 'post.body.childrenMdx.mdxAST'
  | 'post.body.childrenMdx.tableOfContents'
  | 'post.body.childrenMdx.timeToRead'
  | 'post.body.childrenMdx.id'
  | 'post.body.childrenMdx.children'
  | 'post.body.childMdx.rawBody'
  | 'post.body.childMdx.fileAbsolutePath'
  | 'post.body.childMdx.slug'
  | 'post.body.childMdx.body'
  | 'post.body.childMdx.excerpt'
  | 'post.body.childMdx.headings'
  | 'post.body.childMdx.html'
  | 'post.body.childMdx.mdxAST'
  | 'post.body.childMdx.tableOfContents'
  | 'post.body.childMdx.timeToRead'
  | 'post.body.childMdx.id'
  | 'post.body.childMdx.children'
  | 'post.spaceId'
  | 'post.createdAt'
  | 'post.updatedAt'
  | 'post.sys.type'
  | 'post.sys.revision'
  | 'post.slug'
  | 'post.tags'
  | 'post.heroImage.contentful_id'
  | 'post.heroImage.id'
  | 'post.heroImage.gatsbyImageData'
  | 'post.heroImage.spaceId'
  | 'post.heroImage.createdAt'
  | 'post.heroImage.updatedAt'
  | 'post.heroImage.file.url'
  | 'post.heroImage.file.fileName'
  | 'post.heroImage.file.contentType'
  | 'post.heroImage.title'
  | 'post.heroImage.description'
  | 'post.heroImage.node_locale'
  | 'post.heroImage.sys.type'
  | 'post.heroImage.sys.revision'
  | 'post.heroImage.url'
  | 'post.heroImage.placeholderUrl'
  | 'post.heroImage.mimeType'
  | 'post.heroImage.filename'
  | 'post.heroImage.width'
  | 'post.heroImage.height'
  | 'post.heroImage.size'
  | 'post.heroImage.parent.id'
  | 'post.heroImage.parent.children'
  | 'post.heroImage.children'
  | 'post.heroImage.children.id'
  | 'post.heroImage.children.children'
  | 'post.heroImage.internal.content'
  | 'post.heroImage.internal.contentDigest'
  | 'post.heroImage.internal.description'
  | 'post.heroImage.internal.fieldOwners'
  | 'post.heroImage.internal.ignoreType'
  | 'post.heroImage.internal.mediaType'
  | 'post.heroImage.internal.owner'
  | 'post.heroImage.internal.type'
  | 'post.heroImage.filesize'
  | 'post.heroImage.publicUrl'
  | 'post.heroImage.resize.width'
  | 'post.heroImage.resize.height'
  | 'post.heroImage.resize.src'
  | 'post.heroImage.gatsbyImage'
  | 'post.authors'
  | 'post.authors.contentful_id'
  | 'post.authors.id'
  | 'post.authors.node_locale'
  | 'post.authors.identity'
  | 'post.authors.name'
  | 'post.authors.emailAddress'
  | 'post.authors.profile'
  | 'post.authors.picture.contentful_id'
  | 'post.authors.picture.id'
  | 'post.authors.picture.gatsbyImageData'
  | 'post.authors.picture.spaceId'
  | 'post.authors.picture.createdAt'
  | 'post.authors.picture.updatedAt'
  | 'post.authors.picture.title'
  | 'post.authors.picture.description'
  | 'post.authors.picture.node_locale'
  | 'post.authors.picture.url'
  | 'post.authors.picture.placeholderUrl'
  | 'post.authors.picture.mimeType'
  | 'post.authors.picture.filename'
  | 'post.authors.picture.width'
  | 'post.authors.picture.height'
  | 'post.authors.picture.size'
  | 'post.authors.picture.children'
  | 'post.authors.picture.filesize'
  | 'post.authors.picture.publicUrl'
  | 'post.authors.picture.gatsbyImage'
  | 'post.authors.post'
  | 'post.authors.post.contentful_id'
  | 'post.authors.post.id'
  | 'post.authors.post.node_locale'
  | 'post.authors.post.title'
  | 'post.authors.post.publishedOn'
  | 'post.authors.post.spaceId'
  | 'post.authors.post.createdAt'
  | 'post.authors.post.updatedAt'
  | 'post.authors.post.slug'
  | 'post.authors.post.tags'
  | 'post.authors.post.authors'
  | 'post.authors.post.childrenContentfulPostDescriptionTextNode'
  | 'post.authors.post.childrenContentfulPostBodyTextNode'
  | 'post.authors.post.children'
  | 'post.authors.spaceId'
  | 'post.authors.createdAt'
  | 'post.authors.updatedAt'
  | 'post.authors.sys.type'
  | 'post.authors.sys.revision'
  | 'post.authors.parent.id'
  | 'post.authors.parent.children'
  | 'post.authors.children'
  | 'post.authors.children.id'
  | 'post.authors.children.children'
  | 'post.authors.internal.content'
  | 'post.authors.internal.contentDigest'
  | 'post.authors.internal.description'
  | 'post.authors.internal.fieldOwners'
  | 'post.authors.internal.ignoreType'
  | 'post.authors.internal.mediaType'
  | 'post.authors.internal.owner'
  | 'post.authors.internal.type'
  | 'post.description.id'
  | 'post.description.parent.id'
  | 'post.description.parent.children'
  | 'post.description.children'
  | 'post.description.children.id'
  | 'post.description.children.children'
  | 'post.description.internal.content'
  | 'post.description.internal.contentDigest'
  | 'post.description.internal.description'
  | 'post.description.internal.fieldOwners'
  | 'post.description.internal.ignoreType'
  | 'post.description.internal.mediaType'
  | 'post.description.internal.owner'
  | 'post.description.internal.type'
  | 'post.description.description'
  | 'post.description.sys.type'
  | 'post.description.childrenMdx'
  | 'post.description.childrenMdx.rawBody'
  | 'post.description.childrenMdx.fileAbsolutePath'
  | 'post.description.childrenMdx.slug'
  | 'post.description.childrenMdx.body'
  | 'post.description.childrenMdx.excerpt'
  | 'post.description.childrenMdx.headings'
  | 'post.description.childrenMdx.html'
  | 'post.description.childrenMdx.mdxAST'
  | 'post.description.childrenMdx.tableOfContents'
  | 'post.description.childrenMdx.timeToRead'
  | 'post.description.childrenMdx.id'
  | 'post.description.childrenMdx.children'
  | 'post.description.childMdx.rawBody'
  | 'post.description.childMdx.fileAbsolutePath'
  | 'post.description.childMdx.slug'
  | 'post.description.childMdx.body'
  | 'post.description.childMdx.excerpt'
  | 'post.description.childMdx.headings'
  | 'post.description.childMdx.html'
  | 'post.description.childMdx.mdxAST'
  | 'post.description.childMdx.tableOfContents'
  | 'post.description.childMdx.timeToRead'
  | 'post.description.childMdx.id'
  | 'post.description.childMdx.children'
  | 'post.childrenContentfulPostDescriptionTextNode'
  | 'post.childrenContentfulPostDescriptionTextNode.id'
  | 'post.childrenContentfulPostDescriptionTextNode.parent.id'
  | 'post.childrenContentfulPostDescriptionTextNode.parent.children'
  | 'post.childrenContentfulPostDescriptionTextNode.children'
  | 'post.childrenContentfulPostDescriptionTextNode.children.id'
  | 'post.childrenContentfulPostDescriptionTextNode.children.children'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.content'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.contentDigest'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.description'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.fieldOwners'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.ignoreType'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.mediaType'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.owner'
  | 'post.childrenContentfulPostDescriptionTextNode.internal.type'
  | 'post.childrenContentfulPostDescriptionTextNode.description'
  | 'post.childrenContentfulPostDescriptionTextNode.sys.type'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.rawBody'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.fileAbsolutePath'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.slug'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.body'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.excerpt'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.headings'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.html'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.mdxAST'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.tableOfContents'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.timeToRead'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.id'
  | 'post.childrenContentfulPostDescriptionTextNode.childrenMdx.children'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.rawBody'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.fileAbsolutePath'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.slug'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.body'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.excerpt'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.headings'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.html'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.mdxAST'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.tableOfContents'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.timeToRead'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.id'
  | 'post.childrenContentfulPostDescriptionTextNode.childMdx.children'
  | 'post.childContentfulPostDescriptionTextNode.id'
  | 'post.childContentfulPostDescriptionTextNode.parent.id'
  | 'post.childContentfulPostDescriptionTextNode.parent.children'
  | 'post.childContentfulPostDescriptionTextNode.children'
  | 'post.childContentfulPostDescriptionTextNode.children.id'
  | 'post.childContentfulPostDescriptionTextNode.children.children'
  | 'post.childContentfulPostDescriptionTextNode.internal.content'
  | 'post.childContentfulPostDescriptionTextNode.internal.contentDigest'
  | 'post.childContentfulPostDescriptionTextNode.internal.description'
  | 'post.childContentfulPostDescriptionTextNode.internal.fieldOwners'
  | 'post.childContentfulPostDescriptionTextNode.internal.ignoreType'
  | 'post.childContentfulPostDescriptionTextNode.internal.mediaType'
  | 'post.childContentfulPostDescriptionTextNode.internal.owner'
  | 'post.childContentfulPostDescriptionTextNode.internal.type'
  | 'post.childContentfulPostDescriptionTextNode.description'
  | 'post.childContentfulPostDescriptionTextNode.sys.type'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.rawBody'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.fileAbsolutePath'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.slug'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.body'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.excerpt'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.headings'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.html'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.mdxAST'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.tableOfContents'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.timeToRead'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.id'
  | 'post.childContentfulPostDescriptionTextNode.childrenMdx.children'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.rawBody'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.fileAbsolutePath'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.slug'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.body'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.excerpt'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.headings'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.html'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.mdxAST'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.tableOfContents'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.timeToRead'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.id'
  | 'post.childContentfulPostDescriptionTextNode.childMdx.children'
  | 'post.childrenContentfulPostBodyTextNode'
  | 'post.childrenContentfulPostBodyTextNode.id'
  | 'post.childrenContentfulPostBodyTextNode.parent.id'
  | 'post.childrenContentfulPostBodyTextNode.parent.children'
  | 'post.childrenContentfulPostBodyTextNode.children'
  | 'post.childrenContentfulPostBodyTextNode.children.id'
  | 'post.childrenContentfulPostBodyTextNode.children.children'
  | 'post.childrenContentfulPostBodyTextNode.internal.content'
  | 'post.childrenContentfulPostBodyTextNode.internal.contentDigest'
  | 'post.childrenContentfulPostBodyTextNode.internal.description'
  | 'post.childrenContentfulPostBodyTextNode.internal.fieldOwners'
  | 'post.childrenContentfulPostBodyTextNode.internal.ignoreType'
  | 'post.childrenContentfulPostBodyTextNode.internal.mediaType'
  | 'post.childrenContentfulPostBodyTextNode.internal.owner'
  | 'post.childrenContentfulPostBodyTextNode.internal.type'
  | 'post.childrenContentfulPostBodyTextNode.body'
  | 'post.childrenContentfulPostBodyTextNode.sys.type'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.rawBody'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.slug'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.body'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.excerpt'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.headings'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.html'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.mdxAST'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.tableOfContents'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.timeToRead'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.id'
  | 'post.childrenContentfulPostBodyTextNode.childrenMdx.children'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.rawBody'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.fileAbsolutePath'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.slug'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.body'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.excerpt'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.headings'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.html'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.mdxAST'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.tableOfContents'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.timeToRead'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.id'
  | 'post.childrenContentfulPostBodyTextNode.childMdx.children'
  | 'post.childContentfulPostBodyTextNode.id'
  | 'post.childContentfulPostBodyTextNode.parent.id'
  | 'post.childContentfulPostBodyTextNode.parent.children'
  | 'post.childContentfulPostBodyTextNode.children'
  | 'post.childContentfulPostBodyTextNode.children.id'
  | 'post.childContentfulPostBodyTextNode.children.children'
  | 'post.childContentfulPostBodyTextNode.internal.content'
  | 'post.childContentfulPostBodyTextNode.internal.contentDigest'
  | 'post.childContentfulPostBodyTextNode.internal.description'
  | 'post.childContentfulPostBodyTextNode.internal.fieldOwners'
  | 'post.childContentfulPostBodyTextNode.internal.ignoreType'
  | 'post.childContentfulPostBodyTextNode.internal.mediaType'
  | 'post.childContentfulPostBodyTextNode.internal.owner'
  | 'post.childContentfulPostBodyTextNode.internal.type'
  | 'post.childContentfulPostBodyTextNode.body'
  | 'post.childContentfulPostBodyTextNode.sys.type'
  | 'post.childContentfulPostBodyTextNode.childrenMdx'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.rawBody'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.slug'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.body'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.excerpt'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.headings'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.html'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.mdxAST'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.tableOfContents'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.timeToRead'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.id'
  | 'post.childContentfulPostBodyTextNode.childrenMdx.children'
  | 'post.childContentfulPostBodyTextNode.childMdx.rawBody'
  | 'post.childContentfulPostBodyTextNode.childMdx.fileAbsolutePath'
  | 'post.childContentfulPostBodyTextNode.childMdx.slug'
  | 'post.childContentfulPostBodyTextNode.childMdx.body'
  | 'post.childContentfulPostBodyTextNode.childMdx.excerpt'
  | 'post.childContentfulPostBodyTextNode.childMdx.headings'
  | 'post.childContentfulPostBodyTextNode.childMdx.html'
  | 'post.childContentfulPostBodyTextNode.childMdx.mdxAST'
  | 'post.childContentfulPostBodyTextNode.childMdx.tableOfContents'
  | 'post.childContentfulPostBodyTextNode.childMdx.timeToRead'
  | 'post.childContentfulPostBodyTextNode.childMdx.id'
  | 'post.childContentfulPostBodyTextNode.childMdx.children'
  | 'post.parent.id'
  | 'post.parent.parent.id'
  | 'post.parent.parent.children'
  | 'post.parent.children'
  | 'post.parent.children.id'
  | 'post.parent.children.children'
  | 'post.parent.internal.content'
  | 'post.parent.internal.contentDigest'
  | 'post.parent.internal.description'
  | 'post.parent.internal.fieldOwners'
  | 'post.parent.internal.ignoreType'
  | 'post.parent.internal.mediaType'
  | 'post.parent.internal.owner'
  | 'post.parent.internal.type'
  | 'post.children'
  | 'post.children.id'
  | 'post.children.parent.id'
  | 'post.children.parent.children'
  | 'post.children.children'
  | 'post.children.children.id'
  | 'post.children.children.children'
  | 'post.children.internal.content'
  | 'post.children.internal.contentDigest'
  | 'post.children.internal.description'
  | 'post.children.internal.fieldOwners'
  | 'post.children.internal.ignoreType'
  | 'post.children.internal.mediaType'
  | 'post.children.internal.owner'
  | 'post.children.internal.type'
  | 'post.internal.content'
  | 'post.internal.contentDigest'
  | 'post.internal.description'
  | 'post.internal.fieldOwners'
  | 'post.internal.ignoreType'
  | 'post.internal.mediaType'
  | 'post.internal.owner'
  | 'post.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAuthorGroupConnection_distinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_maxArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_minArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_sumArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

type ContentfulAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPostDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostDescriptionTextNodeGroupConnection>;
};


type contentfulPostDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeConnection_maxArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeConnection_minArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeConnection_sumArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};

type contentfulPostDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulPostDescriptionTextNode>;
  readonly node: contentfulPostDescriptionTextNode;
  readonly previous: Maybe<contentfulPostDescriptionTextNode>;
};

type contentfulPostDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'description'
  | 'sys.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type';

type contentfulPostDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostDescriptionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPostDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};


type contentfulPostDescriptionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostDescriptionTextNodeFieldsEnum;
};

type contentfulPostDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPostDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostBodyTextNodeGroupConnection>;
};


type contentfulPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeConnection_maxArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeConnection_minArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeConnection_sumArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostBodyTextNodeFieldsEnum;
};

type contentfulPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulPostBodyTextNode>;
  readonly node: contentfulPostBodyTextNode;
  readonly previous: Maybe<contentfulPostBodyTextNode>;
};

type contentfulPostBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'sys.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type';

type contentfulPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPostBodyTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPostBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeGroupConnection_maxArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeGroupConnection_minArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeGroupConnection_sumArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostBodyTextNodeFieldsEnum;
};

type contentfulPostBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPostBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPageBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPageBodyTextNodeGroupConnection>;
};


type contentfulPageBodyTextNodeConnection_distinctArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeConnection_maxArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeConnection_minArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeConnection_sumArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPageBodyTextNodeFieldsEnum;
};

type contentfulPageBodyTextNodeEdge = {
  readonly next: Maybe<contentfulPageBodyTextNode>;
  readonly node: contentfulPageBodyTextNode;
  readonly previous: Maybe<contentfulPageBodyTextNode>;
};

type contentfulPageBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'sys.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type';

type contentfulPageBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPageBodyTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPageBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeGroupConnection_maxArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeGroupConnection_minArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeGroupConnection_sumArgs = {
  field: contentfulPageBodyTextNodeFieldsEnum;
};


type contentfulPageBodyTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPageBodyTextNodeFieldsEnum;
};

type contentfulPageBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPageBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphQLSourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
};


type GraphQLSourceConnection_distinctArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_maxArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_minArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_sumArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourceFieldsEnum;
};

type GraphQLSourceEdge = {
  readonly next: Maybe<GraphQLSource>;
  readonly node: GraphQLSource;
  readonly previous: Maybe<GraphQLSource>;
};

type GraphQLSourceFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'typeName'
  | 'fieldName';

type GraphQLSourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type GraphQLSourceGroupConnection_distinctArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceGroupConnection_maxArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceGroupConnection_minArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceGroupConnection_sumArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourceFieldsEnum;
};

type GraphQLSourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
};

type GraphQLSourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphQLSourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  previousPostSlug: Maybe<Scalars['String']>;
  nextPostSlug: Maybe<Scalars['String']>;
}>;


type PostBySlugQuery = { readonly post: Maybe<(
    Pick<ContentfulPost, 'slug' | 'title' | 'tags' | 'publishedOn'>
    & { rawDate: ContentfulPost['publishedOn'] }
    & { readonly description: Maybe<Pick<contentfulPostDescriptionTextNode, 'description'>>, readonly heroImage: Maybe<(
      Pick<ContentfulAsset, 'gatsbyImageData'>
      & { readonly resize: Maybe<Pick<RemoteFileResize, 'src'>> }
    )>, readonly body: Maybe<(
      Pick<contentfulPostBodyTextNode, 'body'>
      & { readonly childMdx: Maybe<Pick<Mdx, 'body'>> }
    )>, readonly authors: Maybe<ReadonlyArray<Maybe<Pick<ContentfulAuthor, 'name'>>>> }
  )>, readonly previous: Maybe<Pick<ContentfulPost, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulPost, 'slug' | 'title'>> };

type PostsQueryVariables = Exact<{
  tag: Maybe<ReadonlyArray<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  authorId: Maybe<Scalars['String']>;
}>;


type PostsQuery = { readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulPost, 'slug' | 'title' | 'tags' | 'publishedOn'>
      & { readonly description: Maybe<Pick<contentfulPostDescriptionTextNode, 'description'>>, readonly heroImage: Maybe<(
        Pick<ContentfulAsset, 'gatsbyImageData'>
        & { readonly resize: Maybe<Pick<RemoteFileResize, 'src'>> }
      )>, readonly body: Maybe<Pick<contentfulPostBodyTextNode, 'body'>>, readonly authors: Maybe<ReadonlyArray<Maybe<(
        Pick<ContentfulAuthor, 'identity' | 'name'>
        & { readonly picture: Maybe<(
          Pick<ContentfulAsset, 'gatsbyImageData'>
          & { readonly resize: Maybe<Pick<RemoteFileResize, 'src'>> }
        )> }
      )>>> }
    )> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type SiteMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


type SiteMetaDataQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description'>
      & { readonly author: Maybe<Pick<SiteSiteMetadataAuthor, 'name' | 'email' | 'github' | 'twitter' | 'facebook'>> }
    )> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}