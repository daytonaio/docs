---
title: Workspace
description: Workspace
---

# Class: Workspace

Defined in: [Workspace.ts:70](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L70)

Represents a Daytona workspace instance with file system, git, and process management capabilities
 Workspace

## Constructors

### new Workspace()

```ts
new Workspace(
   id, 
   instance, 
   workspaceApi, 
   toolboxApi, 
   codeToolbox): Workspace
```

Defined in: [Workspace.ts:87](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L87)

Creates a new workspace instance

#### Parameters

##### id

`string`

Unique identifier for the workspace

##### instance

`Workspace`

The underlying workspace instance

##### workspaceApi

`WorkspaceApi`

API client for workspace operations

##### toolboxApi

`ToolboxApi`

API client for toolbox operations

##### codeToolbox

[`WorkspaceCodeToolbox`](README.md#workspacecodetoolbox)

Language-specific toolbox implementation

#### Returns

[`Workspace`](Class.Workspace.md)

## Properties

### fs

```ts
readonly fs: FileSystem;
```

Defined in: [Workspace.ts:72](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L72)

File system operations for the workspace

***

### git

```ts
readonly git: Git;
```

Defined in: [Workspace.ts:74](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L74)

Git operations for the workspace

***

### id

```ts
readonly id: string;
```

Defined in: [Workspace.ts:88](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L88)

Unique identifier for the workspace

***

### instance

```ts
readonly instance: Workspace;
```

Defined in: [Workspace.ts:89](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L89)

The underlying workspace instance

***

### process

```ts
readonly process: Process;
```

Defined in: [Workspace.ts:76](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L76)

Process and code execution operations

***

### toolboxApi

```ts
readonly toolboxApi: ToolboxApi;
```

Defined in: [Workspace.ts:91](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L91)

API client for toolbox operations

***

### workspaceApi

```ts
readonly workspaceApi: WorkspaceApi;
```

Defined in: [Workspace.ts:90](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L90)

API client for workspace operations

## Methods

### createLspServer()

```ts
createLspServer(languageId, pathToProject): LspServer
```

Defined in: [Workspace.ts:116](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L116)

Creates a new Language Server Protocol (LSP) server instance

#### Parameters

##### languageId

`"typescript"`

The language server type

##### pathToProject

`string`

Path to the project root

#### Returns

`LspServer`

A new LSP server instance

***

### delete()

```ts
delete(): Promise<void>
```

Defined in: [Workspace.ts:161](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L161)

Deletes the workspace

#### Returns

`Promise`\<`void`\>

***

### getWorkspaceRootDir()

```ts
getWorkspaceRootDir(): Promise<undefined | string>
```

Defined in: [Workspace.ts:103](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L103)

Gets the root directory path of the workspace

#### Returns

`Promise`\<`undefined` \| `string`\>

The absolute path to the workspace root

***

### info()

```ts
info(): Promise<WorkspaceInfo>
```

Defined in: [Workspace.ts:218](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L218)

Get structured information about the workspace

#### Returns

`Promise`\<`WorkspaceInfo`\>

Structured workspace information

***

### setAutostopInterval()

```ts
setAutostopInterval(interval): Promise<void>
```

Defined in: [Workspace.ts:256](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L256)

Sets the auto-stop interval for the workspace

#### Parameters

##### interval

`number`

Number of minutes after which the workspace will automatically stop (must be an integer). Set to 0 to disable auto-stop.

#### Returns

`Promise`\<`void`\>

#### Throws

If interval is negative

***

### setLabels()

```ts
setLabels(labels): Promise<void>
```

Defined in: [Workspace.ts:132](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L132)

Sets labels for the workspace

#### Parameters

##### labels

`Record`\<`string`, `string`\>

The labels to set

#### Returns

`Promise`\<`void`\>

***

### start()

```ts
start(timeout?): Promise<void>
```

Defined in: [Workspace.ts:140](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L140)

Starts the workspace

#### Parameters

##### timeout?

`number`

#### Returns

`Promise`\<`void`\>

***

### stop()

```ts
stop(): Promise<void>
```

Defined in: [Workspace.ts:152](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L152)

Stops the workspace

#### Returns

`Promise`\<`void`\>

***

### waitUntilStarted()

```ts
waitUntilStarted(timeout): Promise<void>
```

Defined in: [Workspace.ts:165](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L165)

#### Parameters

##### timeout

`number` = `60`

#### Returns

`Promise`\<`void`\>

***

### waitUntilStopped()

```ts
waitUntilStopped(): Promise<void>
```

Defined in: [Workspace.ts:191](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L191)

#### Returns

`Promise`\<`void`\>
