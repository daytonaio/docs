---
title: Language  Server  Protocol
description: Language  Server  Protocol
---

## LspServer

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L29)

Provides Language Server Protocol (LSP) functionality
 LspServer

### Constructors

#### new LspServer()

```ts
new LspServer(
   languageId: "typescript", 
   pathToProject: string, 
   toolboxApi: ToolboxApi, 
   instance: Workspace): LspServer
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L30)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageId` | `"typescript"` |
| `pathToProject` | `string` |
| `toolboxApi` | `ToolboxApi` |
| `instance` | `Workspace` |

##### Returns

`LspServer`

### Methods

#### completions()

```ts
completions(path: string, position: Position): Promise<CompletionList>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L132)

Gets code completion suggestions

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file |
| `position` | `Position` | Cursor position |

##### Returns

`Promise<CompletionList>`

List of completion suggestions

***

#### didClose()

```ts
didClose(path: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L85)

Notifies the server that a file has been closed

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the closed file |

##### Returns

`Promise<void>`

***

#### didOpen()

```ts
didOpen(path: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L69)

Notifies the server that a file has been opened

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the opened file |

##### Returns

`Promise<void>`

***

#### documentSymbols()

```ts
documentSymbols(path: string): Promise<LspSymbol[]>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L101)

Gets document symbols (functions, classes, etc.)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Path to the file |

##### Returns

`Promise<LspSymbol[]>`

Array of document symbols

***

#### start()

```ts
start(): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L41)

Starts the language server

##### Returns

`Promise<void>`

***

#### stop()

```ts
stop(): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L54)

Stops the language server

##### Returns

`Promise<void>`

***

#### workspaceSymbols()

```ts
workspaceSymbols(query: string): Promise<LspSymbol[]>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L116)

Searches for symbols across the workspace

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | Search query |

##### Returns

`Promise<LspSymbol[]>`

Array of matching symbols

***

## Position

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L18)

Position in a text document
 Position

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `character` | `number` | Zero-based character offset |
| `line` | `number` | Zero-based line number |

***

## LspLanguageId

```ts
type LspLanguageId = "typescript";
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/LspServer.ts#L12)

Supported language server types
