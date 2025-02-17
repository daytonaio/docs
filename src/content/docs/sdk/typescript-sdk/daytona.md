---
title: Daytona
description: Daytona
---

## Daytona

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L81)

Main class for interacting with Daytona Server API
 Daytona

### Constructors

#### new Daytona()

```ts
new Daytona(config?: DaytonaConfig): Daytona
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L94)

Creates a new Daytona client instance

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config?` | [`DaytonaConfig`](#daytonaconfig) | Configuration options |

##### Returns

[`Daytona`](#daytona)

##### Throws

When API key or server URL is missing

### Methods

#### create()

```ts
create(params?: CreateWorkspaceParams): Promise<Workspace>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L128)

Creates a new workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | [`CreateWorkspaceParams`](#createworkspaceparams) | Parameters for workspace creation |

##### Returns

`Promise<Workspace>`

The created workspace instance

***

#### get()

```ts
get(workspaceId: string): Promise<Workspace>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L182)

Gets a workspace by its ID

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace to retrieve |

##### Returns

`Promise<Workspace>`

The workspace instance

***

#### getCurrentWorkspace()

```ts
getCurrentWorkspace(workspaceId: string): Promise<Workspace>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L243)

Gets the current workspace by ID

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace to retrieve |

##### Returns

`Promise<Workspace>`

The workspace instance

***

#### list()

```ts
list(): Promise<Workspace[]>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L195)

Lists all workspaces

##### Returns

`Promise<Workspace[]>`

The list of workspaces

***

#### remove()

```ts
remove(workspace: Workspace): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L234)

Removes a workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspace` | `Workspace` | The workspace to remove |

##### Returns

`Promise<void>`

***

#### start()

```ts
start(workspace: Workspace, timeout?: number): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L216)

Starts a workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspace` | `Workspace` | The workspace to start |
| `timeout?` | `number` | - |

##### Returns

`Promise<void>`

***

#### stop()

```ts
stop(workspace: Workspace): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L225)

Stops a workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspace` | `Workspace` | The workspace to stop |

##### Returns

`Promise<void>`

***

## CreateWorkspaceParams

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L50)

Parameters for creating a new workspace
 CreateWorkspaceParams

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="async-1"></a> `async?` | `boolean` | If true, will not wait for the workspace to be ready before returning |
| <a id="autostopinterval-1"></a> `autoStopInterval?` | `number` | Auto-stop interval in minutes (0 means disabled) (must be a non-negative integer) |
| <a id="envvars-1"></a> `envVars?` | `Record`\<`string`, `string`\> | Optional environment variables to set in the workspace |
| <a id="id-1"></a> `id?` | `string` | Optional workspace ID. If not provided, a random ID will be generated |
| <a id="image-1"></a> `image?` | `string` | Optional Docker image to use for the workspace |
| <a id="labels-1"></a> `labels?` | `Record`\<`string`, `string`\> | Workspace labels |
| <a id="language-1"></a> `language?` | [`CodeLanguage`](#codelanguage) | Programming language for direct code execution |
| <a id="public-1"></a> `public?` | `boolean` | Is the workspace port preview public |
| <a id="resources-1"></a> `resources?` | [`WorkspaceResources`](#workspaceresources) | Resource allocation for the workspace |
| <a id="target-1"></a> `target?` | `string` | Target location for the workspace |
| <a id="timeout-3"></a> `timeout?` | `number` | Timeout in seconds, for the workspace to be ready (0 means no timeout) |
| <a id="user-1"></a> `user?` | `string` | Optional os user to use for the workspace |

***

## DaytonaConfig

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L17)

Configuration options for initializing the Daytona client
 DaytonaConfig

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="apikey-1"></a> `apiKey` | `string` | API key for authentication with Daytona server |
| <a id="serverurl-1"></a> `serverUrl` | `string` | URL of the Daytona server |
| <a id="target-3"></a> `target` | `CreateWorkspaceTargetEnum` | Target environment for workspaces |

***

## WorkspaceResources

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L35)

Resource allocation for a workspace
 WorkspaceResources

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="cpu-1"></a> `cpu?` | `number` | CPU allocation for the workspace |
| <a id="disk-1"></a> `disk?` | `number` | Disk space allocation for the workspace in MB |
| <a id="gpu-1"></a> `gpu?` | `number` | GPU allocation for the workspace |
| <a id="memory-1"></a> `memory?` | `number` | Memory allocation for the workspace in MB |

***

## CodeLanguage

```ts
type CodeLanguage = "python" | "javascript" | "typescript";
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L29)

Supported programming languages for code execution
