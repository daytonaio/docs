---
title: Daytona
description: Daytona
---

<a id="daytona_sdk.daytona"></a>

## daytona\_sdk.daytona

This module provides the main entry point for interacting with Daytona Server API.

<a id="daytona_sdk.daytona.DaytonaConfig"></a>

### DaytonaConfig

```python
@dataclass
class DaytonaConfig()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L31)

Configuration options for initializing the Daytona client.

**Arguments**:

- `api_key` - API key for authentication with Daytona server
- `server_url` - URL of the Daytona server
- `target` - Target environment for workspaces

<a id="daytona_sdk.daytona.WorkspaceResources"></a>

### WorkspaceResources

```python
@dataclass
class WorkspaceResources()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L44)

Resources configuration for workspace

<a id="daytona_sdk.daytona.WorkspaceResources.memory"></a>

##### memory: `Optional[int]`

```python
memory = None
```

in MB

<a id="daytona_sdk.daytona.WorkspaceResources.disk"></a>

##### disk: `Optional[int]`

```python
disk = None
```

in GB

<a id="daytona_sdk.daytona.CreateWorkspaceParams"></a>

### CreateWorkspaceParams

```python
@dataclass
class CreateWorkspaceParams()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L52)

Parameters for creating a new workspace.

<a id="daytona_sdk.daytona.Daytona"></a>

### Daytona

```python
class Daytona()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L68)

<a id="daytona_sdk.daytona.Daytona.__init__"></a>

#### Daytona.\_\_init\_\_

```python
def __init__(config: Optional[DaytonaConfig] = None)
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L69)

Initialize Daytona instance with optional configuration.
If no config is provided, reads from environment variables using environs.

**Arguments**:

- `config` - Optional DaytonaConfig object containing api_key, server_url, and target
  

**Raises**:

- `ValueError` - If API key or Server URL is not provided either through config or environment variables

<a id="daytona_sdk.daytona.Daytona.create"></a>

#### Daytona.create

```python
def create(params: Optional[CreateWorkspaceParams] = None) -> Workspace
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L110)

Creates a new workspace and waits for it to start.

**Arguments**:

- `params` - Optional parameters for workspace creation. If not provided,
  defaults to Python language.
  

**Returns**:

  The created workspace instance

<a id="daytona_sdk.daytona.Daytona.remove"></a>

#### Daytona.remove

```python
def remove(workspace: Workspace) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L198)

Removes a workspace.

**Arguments**:

- `workspace` - The workspace to remove

<a id="daytona_sdk.daytona.Daytona.get_current_workspace"></a>

#### Daytona.get\_current\_workspace

```python
def get_current_workspace(workspace_id: str) -> Workspace
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L206)

Get a workspace by its ID.

**Arguments**:

- `workspace_id` - The ID of the workspace to retrieve
  

**Returns**:

- `Workspace` - The workspace instance
  

**Raises**:

- `ValueError` - If workspace_id is not provided

<a id="daytona_sdk.daytona.Daytona.list"></a>

#### Daytona.list

```python
def list() -> List[Workspace]
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L235)

List all workspaces.

<a id="daytona_sdk.daytona.Daytona.start"></a>

#### Daytona.start

```python
def start(workspace: Workspace, timeout: Optional[float] = None) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L282)

Starts a workspace and waits for it to be ready.

**Arguments**:

- `workspace` - The workspace to start

<a id="daytona_sdk.daytona.Daytona.stop"></a>

#### Daytona.stop

```python
def stop(workspace: Workspace) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/daytona.py#L291)

Stops a workspace and waits for it to be stopped.

**Arguments**:

- `workspace` - The workspace to stop

