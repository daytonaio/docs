---
title: Workspace
description: Workspace
---

## Workspace

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L70)

Represents a Daytona workspace instance with file system, git, and process management capabilities
 Workspace

### Constructors

#### new Workspace()

```ts
new Workspace(
   id: string, 
   instance: Workspace, 
   workspaceApi: WorkspaceApi, 
   toolboxApi: ToolboxApi, 
   codeToolbox: WorkspaceCodeToolbox): Workspace
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L87)

Creates a new workspace instance

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Unique identifier for the workspace |
| `instance` | `Workspace` | The underlying workspace instance |
| `workspaceApi` | `WorkspaceApi` | API client for workspace operations |
| `toolboxApi` | `ToolboxApi` | API client for toolbox operations |
| `codeToolbox` | `WorkspaceCodeToolbox` | Language-specific toolbox implementation |

##### Returns

`Workspace`

### Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| `fs` | `readonly` | `FileSystem` | File system operations for the workspace |
| `git` | `readonly` | `Git` | Git operations for the workspace |
| `id` | `readonly` | `string` | Unique identifier for the workspace |
| `instance` | `readonly` | `Workspace` | The underlying workspace instance |
| `process` | `readonly` | `Process` | Process and code execution operations |
| `toolboxApi` | `readonly` | `ToolboxApi` | API client for toolbox operations |
| `workspaceApi` | `readonly` | `WorkspaceApi` | API client for workspace operations |

### Methods

#### createLspServer()

```ts
createLspServer(languageId: "typescript", pathToProject: string): LspServer
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L116)

Creates a new Language Server Protocol (LSP) server instance

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `languageId` | `"typescript"` | The language server type |
| `pathToProject` | `string` | Path to the project root |

##### Returns

`LspServer`

A new LSP server instance

***

#### delete()

```ts
delete(): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L161)

Deletes the workspace

##### Returns

`Promise<void>`

***

#### getWorkspaceRootDir()

```ts
getWorkspaceRootDir(): Promise<undefined | string>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L103)

Gets the root directory path of the workspace

##### Returns

`Promise<undefined | string>`

The absolute path to the workspace root

***

#### info()

```ts
info(): Promise<WorkspaceInfo>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L218)

Get structured information about the workspace

##### Returns

`Promise<WorkspaceInfo>`

Structured workspace information

***

#### setAutostopInterval()

```ts
setAutostopInterval(interval: number): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L256)

Sets the auto-stop interval for the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `interval` | `number` | Number of minutes after which the workspace will automatically stop (must be an integer). Set to 0 to disable auto-stop. |

##### Returns

`Promise<void>`

##### Throws

If interval is negative

***

#### setLabels()

```ts
setLabels(labels: Record<string, string>): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L132)

Sets labels for the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `labels` | `Record<string, string>` | The labels to set |

##### Returns

`Promise<void>`

***

#### start()

```ts
start(timeout?: number): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L140)

Starts the workspace

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

##### Returns

`Promise<void>`

***

#### stop()

```ts
stop(): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L152)

Stops the workspace

##### Returns

`Promise<void>`

***

#### waitUntilStarted()

```ts
waitUntilStarted(timeout: number): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L165)

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `timeout` | `number` | `60` |

##### Returns

`Promise<void>`

***

#### waitUntilStopped()

```ts
waitUntilStopped(): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L191)

##### Returns

`Promise<void>`

***

## WorkspaceCodeToolbox

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L61)

Interface defining methods that a code toolbox must implement
 WorkspaceCodeToolbox

### Methods

#### getRunCommand()

```ts
getRunCommand(code: string): string
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L63)

Generates a command to run the provided code

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |

##### Returns

`string`

***

## WorkspaceInfo

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L28)

Structured information about a workspace
 WorkspaceInfo

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `env` | `Record<string, string>` | Environment variables |
| `errorReason` | `null \| string` | Error reason if any |
| `id` | `string` | Unique identifier |
| `image` | `string` | Docker image |
| `labels` | `Record<string, string>` | Workspace labels |
| `name` | `string` | Workspace name |
| `public` | `boolean` | Public access flag |
| `resources` | `WorkspaceResources` | Resource allocations |
| `snapshotState` | `null \| string` | Snapshot state |
| `snapshotStateCreatedAt` | `null \| Date` | Snapshot state creation timestamp |
| `state` | `string` | Current state |
| `target` | `string` | Target location |
| `user` | `string` | OS user |

***

## WorkspaceResources

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Workspace.ts#L13)

Resources allocated to a workspace
 WorkspaceResources

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `cpu` | `string` | CPU allocation |
| `disk` | `string` | Disk allocation |
| `gpu` | `null \| string` | GPU allocation |
| `memory` | `string` | Memory a