---
title: Git
description: Git
---

# Class: Git

Defined in: [Git.ts:13](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L13)

Provides Git operations within a workspace
 Git

## Constructors

### new Git()

```ts
new Git(
   workspace, 
   toolboxApi, 
   instance): Git
```

Defined in: [Git.ts:14](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L14)

#### Parameters

##### workspace

[`Workspace`](Class.Workspace.md)

##### toolboxApi

`ToolboxApi`

##### instance

`Workspace`

#### Returns

[`Git`](Class.Git.md)

## Methods

### add()

```ts
add(path, files): Promise<void>
```

Defined in: [Git.ts:26](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L26)

Stages files for commit

#### Parameters

##### path

`string`

Repository path

##### files

`string`[]

Array of file paths to stage

#### Returns

`Promise`\<`void`\>

***

### branches()

```ts
branches(path): Promise<ListBranchResponse>
```

Defined in: [Git.ts:38](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L38)

Lists branches in the repository

#### Parameters

##### path

`string`

Repository path

#### Returns

`Promise`\<`ListBranchResponse`\>

List of branches

***

### clone()

```ts
clone(
   url, 
   path, 
   branch?, 
   commitId?, 
   username?, 
password?): Promise<void>
```

Defined in: [Git.ts:53](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L53)

Clones a Git repository

#### Parameters

##### url

`string`

Repository URL

##### path

`string`

Destination path

##### branch?

`string`

Branch to clone

##### commitId?

`string`

Specific commit to clone

##### username?

`string`

Git username for authentication

##### password?

`string`

Git password/token for authentication

#### Returns

`Promise`\<`void`\>

***

### commit()

```ts
commit(
   path, 
   message, 
   author, 
email): Promise<void>
```

Defined in: [Git.ts:80](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L80)

Creates a new commit with staged changes

#### Parameters

##### path

`string`

Repository path

##### message

`string`

Commit message

##### author

`string`

Author name

##### email

`string`

Author email

#### Returns

`Promise`\<`void`\>

***

### pull()

```ts
pull(
   path, 
   username?, 
password?): Promise<void>
```

Defined in: [Git.ts:120](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L120)

Pulls changes from remote repository

#### Parameters

##### path

`string`

Repository path

##### username?

`string`

Git username for authentication

##### password?

`string`

Git password/token for authentication

#### Returns

`Promise`\<`void`\>

***

### push()

```ts
push(
   path, 
   username?, 
password?): Promise<void>
```

Defined in: [Git.ts:101](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L101)

Pushes local commits to remote repository

#### Parameters

##### path

`string`

Repository path

##### username?

`string`

Git username for authentication

##### password?

`string`

Git password/token for authentication

#### Returns

`Promise`\<`void`\>

***

### status()

```ts
status(path): Promise<GitStatus>
```

Defined in: [Git.ts:137](https://github.com/MDzaja/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/typescript/src/Git.ts#L137)

Gets the current Git repository status

#### Parameters

##### path

`string`

Repository path

#### Returns

`Promise`\<`GitStatus`\>

Repository status information
