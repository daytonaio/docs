---
title: File System
description: File System
---

## FileSystem

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L28)

Provides file system operations within a workspace
 FileSystem

### Constructors

#### new FileSystem()

```ts
new FileSystem(instance: Workspace, toolboxApi: ToolboxApi): FileSystem
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L29)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `Workspace` |
| `toolboxApi` | `ToolboxApi` |

##### Returns

`FileSystem`

### Methods

#### createFolder()

```ts
createFolder(path: string, mode: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L40)

Creates a new folder in the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path where the folder should be created |
| `mode` | `string` | Folder permissions in octal format |

##### Returns

`Promise<void>`

***

#### deleteFile()

```ts
deleteFile(path: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L50)

Deletes a file from the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file to delete |

##### Returns

`Promise<void>`

***

#### downloadFile()

```ts
downloadFile(path: string): Promise<Blob>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L60)

Downloads a file from the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file to download |

##### Returns

`Promise<Blob>`

The file contents as a Blob

***

#### findFiles()

```ts
findFiles(path: string, pattern: string): Promise<Match[]>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L71)

Searches for files matching a pattern

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Directory to search in |
| `pattern` | `string` | Search pattern |

##### Returns

`Promise<Match[]>`

Array of matching files

***

#### getFileDetails()

```ts
getFileDetails(path: string): Promise<FileInfo>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L81)

Gets details about a file

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file |

##### Returns

`Promise<FileInfo>`

File information

***

#### listFiles()

```ts
listFiles(path: string): Promise<FileInfo[]>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L91)

Lists files in a directory

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Directory path to list |

##### Returns

`Promise<FileInfo[]>`

Array of file information

***

#### moveFiles()

```ts
moveFiles(source: string, destination: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L102)

Moves/renames files

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | Source path |
| `destination` | `string` | Destination path |

##### Returns

`Promise<void>`

***

#### replaceInFiles()

```ts
replaceInFiles(
   files: string[], 
   pattern: string, 
newValue: string): Promise<ReplaceResult[]>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L114)

Replaces text in multiple files

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `files` | `string[]` | Array of file paths |
| `pattern` | `string` | Pattern to replace |
| `newValue` | `string` | Replacement value |

##### Returns

`Promise<ReplaceResult[]>`

Results of the replace operation

***

#### searchFiles()

```ts
searchFiles(path: string, pattern: string): Promise<SearchFilesResponse>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L135)

Searches for files by name pattern

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Directory to search in |
| `pattern` | `string` | Search pattern |

##### Returns

`Promise<SearchFilesResponse>`

Search results

***

#### setFilePermissions()

```ts
setFilePermissions(path: string, permissions: FilePermissionsParams): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L149)

Sets file permissions

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file |
| `permissions` | `FilePermissionsParams` | Permission settings |

##### Returns

`Promise<void>`

***

#### uploadFile()

```ts
uploadFile(path: string, file: File): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/FileSystem.ts#L163)

Uploads a file to the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Destination path |
| `file` | `File` | File contents to upload |

##### Returns

`Promise<void>`
