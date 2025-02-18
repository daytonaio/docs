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
| `config?` | `DaytonaConfig` | Configuration options |

##### Returns

`Daytona`

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
| `params?` | `CreateWorkspaceParams` | Parameters for workspace creation |

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
| `async?` | `boolean` | If true, will not wait for the workspace to be ready before returning |
| `autoStopInterval?` | `number` | Auto-stop interval in minutes (0 means disabled) (must be a non-negative integer) |
| `envVars?` | `Record<string, string>` | Optional environment variables to set in the workspace |
| `id?` | `string` | Optional workspace ID. If not provided, a random ID will be generated |
| `image?` | `string` | Optional Docker image to use for the workspace |
| `labels?` | `Record<string, string>` | Workspace labels |
| `language?` | `CodeLanguage` | Programming language for direct code execution |
| `public?` | `boolean` | Is the workspace port preview public |
| `resources?` | `WorkspaceResources` | Resource allocation for the workspace |
| `target?` | `string` | Target location for the workspace |
| `timeout?` | `number` | Timeout in seconds, for the workspace to be ready (0 means no timeout) |
| `user?` | `string` | Optional os user to use for the workspace |

***

## DaytonaConfig

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L17)

Configuration options for initializing the Daytona client
 DaytonaConfig

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `apiKey` | `string` | API key for authentication with Daytona server |
| `serverUrl` | `string` | URL of the Daytona server |
| `target` | `CreateWorkspaceTargetEnum` | Target environment for workspaces |

***

## WorkspaceResources

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L35)

Resource allocation for a workspace
 WorkspaceResources

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `cpu?` | `number` | CPU allocation for the workspace |
| `disk?` | `number` | Disk space allocation for the workspace in MB |
| `gpu?` | `number` | GPU allocation for the workspace |
| `memory?` | `number` | Memory allocation for the workspace in MB |

***

## CodeLanguage

```ts
type CodeLanguage = "python" | "javascript" | "typescript";
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L29)

Supported programming languages for code execution
