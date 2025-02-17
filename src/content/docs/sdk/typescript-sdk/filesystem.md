---
title: FileSystem
description: FileSystem
---

# Class: FileSystem

Defined in: [FileSystem.ts:28](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L28)

Provides file system operations within a workspace
 FileSystem

## Constructors

### new FileSystem()

```ts
new FileSystem(instance, toolboxApi): FileSystem
```

Defined in: [FileSystem.ts:29](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L29)

#### Parameters

##### instance

`Workspace`

##### toolboxApi

`ToolboxApi`

#### Returns

[`FileSystem`](Class.FileSystem.md)

## Methods

### createFolder()

```ts
createFolder(path, mode): Promise<void>
```

Defined in: [FileSystem.ts:40](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L40)

Creates a new folder in the workspace

#### Parameters

##### path

`string`

Path where the folder should be created

##### mode

`string`

Folder permissions in octal format

#### Returns

`Promise`\<`void`\>

***

### deleteFile()

```ts
deleteFile(path): Promise<void>
```

Defined in: [FileSystem.ts:50](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L50)

Deletes a file from the workspace

#### Parameters

##### path

`string`

Path to the file to delete

#### Returns

`Promise`\<`void`\>

***

### downloadFile()

```ts
downloadFile(path): Promise<Blob>
```

Defined in: [FileSystem.ts:60](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L60)

Downloads a file from the workspace

#### Parameters

##### path

`string`

Path to the file to download

#### Returns

`Promise`\<`Blob`\>

The file contents as a Blob

***

### findFiles()

```ts
findFiles(path, pattern): Promise<Match[]>
```

Defined in: [FileSystem.ts:71](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L71)

Searches for files matching a pattern

#### Parameters

##### path

`string`

Directory to search in

##### pattern

`string`

Search pattern

#### Returns

`Promise`\<`Match`[]\>

Array of matching files

***

### getFileDetails()

```ts
getFileDetails(path): Promise<FileInfo>
```

Defined in: [FileSystem.ts:81](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L81)

Gets details about a file

#### Parameters

##### path

`string`

Path to the file

#### Returns

`Promise`\<`FileInfo`\>

File information

***

### listFiles()

```ts
listFiles(path): Promise<FileInfo[]>
```

Defined in: [FileSystem.ts:91](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L91)

Lists files in a directory

#### Parameters

##### path

`string`

Directory path to list

#### Returns

`Promise`\<`FileInfo`[]\>

Array of file information

***

### moveFiles()

```ts
moveFiles(source, destination): Promise<void>
```

Defined in: [FileSystem.ts:102](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L102)

Moves/renames files

#### Parameters

##### source

`string`

Source path

##### destination

`string`

Destination path

#### Returns

`Promise`\<`void`\>

***

### replaceInFiles()

```ts
replaceInFiles(
   files, 
   pattern, 
newValue): Promise<ReplaceResult[]>
```

Defined in: [FileSystem.ts:114](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L114)

Replaces text in multiple files

#### Parameters

##### files

`string`[]

Array of file paths

##### pattern

`string`

Pattern to replace

##### newValue

`string`

Replacement value

#### Returns

`Promise`\<`ReplaceResult`[]\>

Results of the replace operation

***

### searchFiles()

```ts
searchFiles(path, pattern): Promise<SearchFilesResponse>
```

Defined in: [FileSystem.ts:135](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L135)

Searches for files by name pattern

#### Parameters

##### path

`string`

Directory to search in

##### pattern

`string`

Search pattern

#### Returns

`Promise`\<`SearchFilesResponse`\>

Search results

***

### setFilePermissions()

```ts
setFilePermissions(path, permissions): Promise<void>
```

Defined in: [FileSystem.ts:149](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L149)

Sets file permissions

#### Parameters

##### path

`string`

Path to the file

##### permissions

`FilePermissionsParams`

Permission settings

#### Returns

`Promise`\<`void`\>

***

### uploadFile()

```ts
uploadFile(path, file): Promise<void>
```

Defined in: [FileSystem.ts:163](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L163)

Uploads a file to the workspace

#### Parameters

##### path

`string`

Destination path

##### file

`File`

File contents to upload

#### Returns

`Promise`\<`void`\>
