---
title: Process
description: Process
---

<a id="daytona_sdk.process"></a>

## daytona\_sdk.process

Process and code execution within a Daytona workspace.

This module provides functionality for executing commands and running code
in the workspace environment.

<a id="daytona_sdk.process.Process"></a>

### Process

```python
class Process()
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L23)

Handles process and code execution within a workspace.

**Arguments**:

- `code_toolbox` - Language-specific code execution toolbox
- `toolbox_api` - API client for workspace operations
- `instance` - The workspace instance

<a id="daytona_sdk.process.Process.exec"></a>

#### Process.exec

```python
def exec(command: str,
         cwd: Optional[str] = None,
         timeout: Optional[int] = None) -> ExecuteResponse
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L42)

Executes a shell command in the workspace.

**Arguments**:

- `command` - Command to execute
- `cwd` - Working directory for command execution (optional)
- `timeout` - Optional timeout in seconds
  

**Returns**:

  Command execution results

<a id="daytona_sdk.process.Process.code_run"></a>

#### Process.code\_run

```python
def code_run(code: str) -> ExecuteResponse
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L64)

Executes code in the workspace using the appropriate language runtime.

**Arguments**:

- `code` - Code to execute
  

**Returns**:

  Code execution results

<a id="daytona_sdk.process.Process.create_session"></a>

#### Process.create\_session

```python
def create_session(session_id: str) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L76)

Creates a new exec session in the workspace.

**Arguments**:

- `session_id` - Unique identifier for the session

<a id="daytona_sdk.process.Process.get_session"></a>

#### Process.get\_session

```python
def get_session(session_id: str) -> Session
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L88)

Gets a session in the workspace.

**Arguments**:

- `session_id` - Unique identifier for the session
  

**Returns**:

  Session

<a id="daytona_sdk.process.Process.get_session_command"></a>

#### Process.get\_session\_command

```python
def get_session_command(session_id: str, command_id: str) -> Command
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L102)

Gets a command in the session.

**Arguments**:

- `session_id` - Unique identifier for the session
- `command_id` - Unique identifier for the command
  

**Returns**:

  Command

<a id="daytona_sdk.process.Process.execute_session_command"></a>

#### Process.execute\_session\_command

```python
def execute_session_command(
        session_id: str, req: SessionExecuteRequest) -> SessionExecuteResponse
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L118)

Executes a command in the session.

**Arguments**:

- `session_id` - Unique identifier for the session
- `req` - Command to execute and async flag
  

**Returns**:

  Command execution results

<a id="daytona_sdk.process.Process.get_session_command_logs"></a>

#### Process.get\_session\_command\_logs

```python
def get_session_command_logs(session_id: str, command_id: str) -> str
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L134)

Gets the logs for a command in the session.

**Arguments**:

- `session_id` - Unique identifier for the session
- `command_id` - Unique identifier for the command
  

**Returns**:

  Command logs

<a id="daytona_sdk.process.Process.list_sessions"></a>

#### Process.list\_sessions

```python
def list_sessions() -> List[Session]
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L150)

Lists all sessions in the workspace.

**Returns**:

  List of sessions

<a id="daytona_sdk.process.Process.delete_session"></a>

#### Process.delete\_session

```python
def delete_session(session_id: str) -> None
```

[[view_source]](https://github.com/daytonaio/sdk/blob/978fab9bfe9d661d8e554dbccb350747c2bb4782/packages/python/src/daytona_sdk/process.py#L160)

Deletes a session in the workspace.

**Arguments**:

- `session_id` - Unique identifier for the session

