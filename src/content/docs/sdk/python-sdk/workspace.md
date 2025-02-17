---
title: Workspace
description: Workspace
---

<a id="daytona_sdk.workspace"></a>

## daytona\_sdk.workspace

Core workspace functionality for Daytona.

This module provides the main Workspace class that coordinates file system,
Git, process execution, and LSP functionality.

<a id="daytona_sdk.workspace.WorkspaceResources"></a>

### WorkspaceResources

```python
@dataclass
class WorkspaceResources()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L21)

Resources allocated to a workspace.

<a id="daytona_sdk.workspace.WorkspaceInfo"></a>

### WorkspaceInfo

```python
@dataclass
class WorkspaceInfo()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L29)

Structured information about a workspace.

<a id="daytona_sdk.workspace.Workspace"></a>

### Workspace

```python
class Workspace()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L45)

Represents a Daytona workspace instance.

A workspace provides file system operations, Git operations, process execution,
and LSP functionality.

**Arguments**:

- `id` - Unique identifier for the workspace
- `instance` - The underlying workspace instance
- `workspace_api` - API client for workspace operations
- `toolbox_api` - API client for workspace operations
- `code_toolbox` - Language-specific toolbox implementation
  

**Attributes**:

- `fs` - File system operations interface for managing files and directories
- `git` - Git operations interface for version control functionality
- `process` - Process execution interface for running commands and code

<a id="daytona_sdk.workspace.Workspace.info"></a>

#### Workspace.info

```python
def info() -> WorkspaceInfo
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L83)

Get structured information about the workspace.

**Returns**:

- `WorkspaceInfo` - Structured workspace information

<a id="daytona_sdk.workspace.Workspace.get_workspace_root_dir"></a>

#### Workspace.get\_workspace\_root\_dir

```python
def get_workspace_root_dir() -> str
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L127)

Gets the root directory path of the workspace.

**Returns**:

  The absolute path to the workspace root

<a id="daytona_sdk.workspace.Workspace.create_lsp_server"></a>

#### Workspace.create\_lsp\_server

```python
def create_lsp_server(language_id: LspLanguageId,
                      path_to_project: str) -> LspServer
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L138)

Creates a new Language Server Protocol (LSP) server instance.

**Arguments**:

- `language_id` - The language server type
- `path_to_project` - Path to the project root
  

**Returns**:

  A new LSP server instance

<a id="daytona_sdk.workspace.Workspace.set_labels"></a>

#### Workspace.set\_labels

```python
def set_labels(labels: Dict[str, str]) -> Dict[str, str]
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L152)

Sets labels for the workspace.

**Arguments**:

- `labels` - Dictionary of key-value pairs representing workspace labels
  

**Returns**:

  Dictionary containing the updated workspace labels
  

**Raises**:

- `urllib.error.HTTPError` - If the server request fails
- `urllib.error.URLError` - If there's a network/connection error

<a id="daytona_sdk.workspace.Workspace.start"></a>

#### Workspace.start

```python
def start(timeout: Optional[float] = None)
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L170)

Starts the workspace.

**Arguments**:

- `timeout` - Maximum time to wait in seconds. 0 means no timeout.
  

**Raises**:

- `ValueError` - If timeout is negative
- `Exception` - If workspace fails to start or times out

<a id="daytona_sdk.workspace.Workspace.stop"></a>

#### Workspace.stop

```python
def stop()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L184)

Stops the workspace.

<a id="daytona_sdk.workspace.Workspace.wait_for_workspace_start"></a>

#### Workspace.wait\_for\_workspace\_start

```python
def wait_for_workspace_start(timeout: float = 60) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L189)

Wait for workspace to reach 'started' state.

**Arguments**:

- `timeout` - Maximum time to wait in seconds. 0 means no timeout.
  

**Raises**:

- `ValueError` - If timeout is negative
- `Exception` - If workspace fails to start or times out

<a id="daytona_sdk.workspace.Workspace.wait_for_workspace_stop"></a>

#### Workspace.wait\_for\_workspace\_stop

```python
def wait_for_workspace_stop() -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L223)

Wait for workspace to reach 'stopped' state.

**Raises**:

- `Exception` - If workspace fails to stop or times out

<a id="daytona_sdk.workspace.Workspace.set_autostop_interval"></a>

#### Workspace.set\_autostop\_interval

```python
def set_autostop_interval(interval: int) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/workspace.py#L254)

Sets the auto-stop interval for the workspace.

**Arguments**:

- `interval` - Number of minutes after which the workspace will automatically stop.
  Set to 0 to disable auto-stop.
  

**Raises**:

- `ValueError` - If interval is negative

