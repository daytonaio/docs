---
title: Process
description: Process
---

## Process

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L16)

Handles process and code execution within a workspace
 Process

### Constructors

#### new Process()

```ts
new Process(
   codeToolbox: WorkspaceCodeToolbox, 
   toolboxApi: ToolboxApi, 
   instance: Workspace): Process
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L17)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `codeToolbox` | `WorkspaceCodeToolbox` |
| `toolboxApi` | `ToolboxApi` |
| `instance` | `Workspace` |

##### Returns

`Process`

### Methods

#### codeRun()

```ts
codeRun(code: string): Promise<ExecuteResponse>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L47)

Executes code in the workspace using the appropriate language runtime

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `string` | Code to execute |

##### Returns

`Promise<ExecuteResponse>`

Code execution results

***

#### createSession()

```ts
createSession(sessionId: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L62)

Creates a new exec session in the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | Unique identifier for the session |

##### Returns

`Promise<void>`

Code execution results

***

#### deleteSession()

```ts
deleteSession(sessionId: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L124)

Deletes a session in the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | Unique identifier for the session |

##### Returns

`Promise<void>`

***

#### executeCommand()

```ts
executeCommand(
   command: string, 
   cwd?: string, 
timeout?: number): Promise<ExecuteResponse>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L28)

Executes a shell command in the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | Command to execute |
| `cwd?` | `string` | - |
| `timeout?` | `number` | - |

##### Returns

`Promise<ExecuteResponse>`

Command execution results

***

#### executeSessionCommand()

```ts
executeSessionCommand(sessionId: string, req: SessionExecuteRequest): Promise<SessionExecuteResponse>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L74)

Executes a command in the session

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | Unique identifier for the session |
| `req` | `SessionExecuteRequest` | Command to execute and async flag |

##### Returns

`Promise<SessionExecuteResponse>`

Command execution results

***

#### getSession()

```ts
getSession(sessionId: string): Promise<Session>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L95)

Gets the session

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | Unique identifier for the session |

##### Returns

`Promise<Session>`

Session

***

#### getSessionCommand()

```ts
getSessionCommand(sessionId: string, commandId: string): Promise<Command>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L106)

Gets the session command

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | Unique identifier for the session |
| `commandId` | `string` | Unique identifier for the command |

##### Returns

`Promise<Command>`

Session command

***

#### getSessionCommandLogs()

```ts
getSessionCommandLogs(sessionId: string, commandId: string): Promise<string>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L85)

Gets the logs for a command in the session

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | Unique identifier for the session |
| `commandId` | `string` | Unique identifier for the command |

##### Returns

`Promise<string>`

Command logs

***

#### listSessions()

```ts
listSessions(): Promise<Session[]>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L115)

Lists all sessions in the workspace

##### Returns

`Promise<Session[]>`

List of sessions
