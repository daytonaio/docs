---
title: Daytona
description: Daytona
---

# Class: Daytona

Defined in: [Daytona.ts:81](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L81)

Main class for interacting with Daytona Server API
 Daytona

## Constructors

### new Daytona()

```ts
new Daytona(config?): Daytona
```

Defined in: [Daytona.ts:94](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L94)

Creates a new Daytona client instance

#### Parameters

##### config?

[`DaytonaConfig`](README.md#daytonaconfig)

Configuration options

#### Returns

[`Daytona`](Class.Daytona.md)

#### Throws

When API key or server URL is missing

## Methods

### create()

```ts
create(params?): Promise<Workspace>
```

Defined in: [Daytona.ts:128](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L128)

Creates a new workspace

#### Parameters

##### params?

[`CreateWorkspaceParams`](README.md#createworkspaceparams)

Parameters for workspace creation

#### Returns

`Promise`\<[`Workspace`](Class.Workspace.md)\>

The created workspace instance

***

### get()

```ts
get(workspaceId): Promise<Workspace>
```

Defined in: [Daytona.ts:182](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L182)

Gets a workspace by its ID

#### Parameters

##### workspaceId

`string`

The ID of the workspace to retrieve

#### Returns

`Promise`\<[`Workspace`](Class.Workspace.md)\>

The workspace instance

***

### getCurrentWorkspace()

```ts
getCurrentWorkspace(workspaceId): Promise<Workspace>
```

Defined in: [Daytona.ts:243](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L243)

Gets the current workspace by ID

#### Parameters

##### workspaceId

`string`

The ID of the workspace to retrieve

#### Returns

`Promise`\<[`Workspace`](Class.Workspace.md)\>

The workspace instance

***

### list()

```ts
list(): Promise<Workspace[]>
```

Defined in: [Daytona.ts:195](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L195)

Lists all workspaces

#### Returns

`Promise`\<[`Workspace`](Class.Workspace.md)[]\>

The list of workspaces

***

### remove()

```ts
remove(workspace): Promise<void>
```

Defined in: [Daytona.ts:234](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L234)

Removes a workspace

#### Parameters

##### workspace

[`Workspace`](Class.Workspace.md)

The workspace to remove

#### Returns

`Promise`\<`void`\>

***

### start()

```ts
start(workspace, timeout?): Promise<void>
```

Defined in: [Daytona.ts:216](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L216)

Starts a workspace

#### Parameters

##### workspace

[`Workspace`](Class.Workspace.md)

The workspace to start

##### timeout?

`number`

#### Returns

`Promise`\<`void`\>

***

### stop()

```ts
stop(workspace): Promise<void>
```

Defined in: [Daytona.ts:225](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Daytona.ts#L225)

Stops a workspace

#### Parameters

##### workspace

[`Workspace`](Class.Workspace.md)

The workspace to stop

#### Returns

`Promise`\<`void`\>
