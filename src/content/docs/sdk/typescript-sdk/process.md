---
title: Process
description: Process
---

# Class: Process

Defined in: [Process.ts:16](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L16)

Handles process and code execution within a workspace
 Process

## Constructors

### new Process()

```ts
new Process(
   codeToolbox, 
   toolboxApi, 
   instance): Process
```

Defined in: [Process.ts:17](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L17)

#### Parameters

##### codeToolbox

[`WorkspaceCodeToolbox`](README.md#workspacecodetoolbox)

##### toolboxApi

`ToolboxApi`

##### instance

`Workspace`

#### Returns

[`Process`](Class.Process.md)

## Methods

### codeRun()

```ts
codeRun(code): Promise<ExecuteResponse>
```

Defined in: [Process.ts:47](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L47)

Executes code in the workspace using the appropriate language runtime

#### Parameters

##### code

`string`

Code to execute

#### Returns

`Promise`\<`ExecuteResponse`\>

Code execution results

***

### createSession()

```ts
createSession(sessionId): Promise<void>
```

Defined in: [Process.ts:62](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L62)

Creates a new exec session in the workspace

#### Parameters

##### sessionId

`string`

Unique identifier for the session

#### Returns

`Promise`\<`void`\>

Code execution results

***

### deleteSession()

```ts
deleteSession(sessionId): Promise<void>
```

Defined in: [Process.ts:124](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L124)

Deletes a session in the workspace

#### Parameters

##### sessionId

`string`

Unique identifier for the session

#### Returns

`Promise`\<`void`\>

***

### executeCommand()

```ts
executeCommand(
   command, 
   cwd?, 
timeout?): Promise<ExecuteResponse>
```

Defined in: [Process.ts:28](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L28)

Executes a shell command in the workspace

#### Parameters

##### command

`string`

Command to execute

##### cwd?

`string`

##### timeout?

`number`

#### Returns

`Promise`\<`ExecuteResponse`\>

Command execution results

***

### executeSessionCommand()

```ts
executeSessionCommand(sessionId, req): Promise<SessionExecuteResponse>
```

Defined in: [Process.ts:74](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L74)

Executes a command in the session

#### Parameters

##### sessionId

`string`

Unique identifier for the session

##### req

`SessionExecuteRequest`

Command to execute and async flag

#### Returns

`Promise`\<`SessionExecuteResponse`\>

Command execution results

***

### getSession()

```ts
getSession(sessionId): Promise<Session>
```

Defined in: [Process.ts:95](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L95)

Gets the session

#### Parameters

##### sessionId

`string`

Unique identifier for the session

#### Returns

`Promise`\<`Session`\>

Session

***

### getSessionCommand()

```ts
getSessionCommand(sessionId, commandId): Promise<Command>
```

Defined in: [Process.ts:106](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L106)

Gets the session command

#### Parameters

##### sessionId

`string`

Unique identifier for the session

##### commandId

`string`

Unique identifier for the command

#### Returns

`Promise`\<`Command`\>

Session command

***

### getSessionCommandLogs()

```ts
getSessionCommandLogs(sessionId, commandId): Promise<string>
```

Defined in: [Process.ts:85](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L85)

Gets the logs for a command in the session

#### Parameters

##### sessionId

`string`

Unique identifier for the session

##### commandId

`string`

Unique identifier for the command

#### Returns

`Promise`\<`string`\>

Command logs

***

### listSessions()

```ts
listSessions(): Promise<Session[]>
```

Defined in: [Process.ts:115](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Process.ts#L115)

Lists all sessions in the workspace

#### Returns

`Promise`\<`Session`[]\>

List of sessions
