---
title: Git
description: Git
---

## Git

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L13)

Provides Git operations within a workspace
 Git

### Constructors

#### new Git()

```ts
new Git(
   workspace: Workspace, 
   toolboxApi: ToolboxApi, 
   instance: Workspace): Git
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L14)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspace` | `Workspace` |
| `toolboxApi` | `ToolboxApi` |
| `instance` | `Workspace` |

##### Returns

[`Git`](#git)

### Methods

#### add()

```ts
add(path: string, files: string[]): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L26)

Stages files for commit

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Repository path |
| `files` | `string`[] | Array of file paths to stage |

##### Returns

`Promise<void>`

***

#### branches()

```ts
branches(path: string): Promise<ListBranchResponse>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L38)

Lists branches in the repository

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Repository path |

##### Returns

`Promise<ListBranchResponse>`

List of branches

***

#### clone()

```ts
clone(
   url: string, 
   path: string, 
   branch?: string, 
   commitId?: string, 
   username?: string, 
password?: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L53)

Clones a Git repository

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | Repository URL |
| `path` | `string` | Destination path |
| `branch?` | `string` | Branch to clone |
| `commitId?` | `string` | Specific commit to clone |
| `username?` | `string` | Git username for authentication |
| `password?` | `string` | Git password/token for authentication |

##### Returns

`Promise<void>`

***

#### commit()

```ts
commit(
   path: string, 
   message: string, 
   author: string, 
email: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L80)

Creates a new commit with staged changes

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Repository path |
| `message` | `string` | Commit message |
| `author` | `string` | Author name |
| `email` | `string` | Author email |

##### Returns

`Promise<void>`

***

#### pull()

```ts
pull(
   path: string, 
   username?: string, 
password?: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L120)

Pulls changes from remote repository

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Repository path |
| `username?` | `string` | Git username for authentication |
| `password?` | `string` | Git password/token for authentication |

##### Returns

`Promise<void>`

***

#### push()

```ts
push(
   path: string, 
   username?: string, 
password?: string): Promise<void>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L101)

Pushes local commits to remote repository

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Repository path |
| `username?` | `string` | Git username for authentication |
| `password?` | `string` | Git password/token for authentication |

##### Returns

`Promise<void>`

***

#### status()

```ts
status(path: string): Promise<GitStatus>
```

[[view_source]](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L137)

Gets the current Git repository status

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | Repository path |

##### Returns

`Promise<GitStatus>`

Repository status information
