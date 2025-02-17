---
title: Git
description: Git
---

<a id="daytona_sdk.git"></a>

## daytona\_sdk.git

Git operations within a Daytona workspace.

This module provides functionality for managing Git repositories, including cloning,
committing changes, pushing/pulling, and checking repository status.

<a id="daytona_sdk.git.Git"></a>

### Git

```python
class Git()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L24)

Provides Git operations within a workspace.

**Arguments**:

- `workspace` - The parent workspace instance
- `toolbox_api` - API client for workspace operations
- `instance` - The workspace instance

<a id="daytona_sdk.git.Git.add"></a>

#### Git.add

```python
def add(path: str, files: List[str]) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L43)

Stages files for commit.

**Arguments**:

- `path` - Repository path
- `files` - List of file paths to stage

<a id="daytona_sdk.git.Git.branches"></a>

#### Git.branches

```python
def branches(path: str) -> ListBranchResponse
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L58)

Lists branches in the repository.

**Arguments**:

- `path` - Repository path
  

**Returns**:

  List of branches and their information

<a id="daytona_sdk.git.Git.clone"></a>

#### Git.clone

```python
def clone(url: str,
          path: str,
          branch: Optional[str] = None,
          commit_id: Optional[str] = None,
          username: Optional[str] = None,
          password: Optional[str] = None) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L72)

Clones a Git repository.

**Arguments**:

- `url` - Repository URL
- `path` - Destination path
- `branch` - Branch to clone (optional)
- `commit_id` - Specific commit to clone (optional)
- `username` - Git username for authentication (optional)
- `password` - Git password/token for authentication (optional)

<a id="daytona_sdk.git.Git.commit"></a>

#### Git.commit

```python
def commit(path: str, message: str, author: str, email: str) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L103)

Commits staged changes.

**Arguments**:

- `path` - Repository path
- `message` - Commit message
- `author` - Name of the commit author
- `email` - Email of the commit author

<a id="daytona_sdk.git.Git.push"></a>

#### Git.push

```python
def push(path: str,
         username: Optional[str] = None,
         password: Optional[str] = None) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L122)

Pushes local commits to the remote repository.

**Arguments**:

- `path` - Repository path
- `username` - Git username for authentication (optional)
- `password` - Git password/token for authentication (optional)

<a id="daytona_sdk.git.Git.pull"></a>

#### Git.pull

```python
def pull(path: str,
         username: Optional[str] = None,
         password: Optional[str] = None) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L141)

Pulls changes from the remote repository.

**Arguments**:

- `path` - Repository path
- `username` - Git username for authentication (optional)
- `password` - Git password/token for authentication (optional)

<a id="daytona_sdk.git.Git.status"></a>

#### Git.status

```python
def status(path: str) -> GitStatus
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/git.py#L160)

Gets the current Git repository status.

**Arguments**:

- `path` - Repository path
  

**Returns**:

  Repository status information including staged, unstaged, and untracked files

