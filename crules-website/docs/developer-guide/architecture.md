---
version: dev
last_updated: 2023-07-13
applies_to: crules (current development version)
---

# Architecture

> 🏗️ This document describes the high-level architecture of the crules tool and how its components interact.

## Overview

The crules tool is designed with a modular architecture that separates concerns between different components. The architecture follows these key principles:

1. **Command-driven interface**: Core functionality is exposed through a hierarchical command structure
2. **Separation of concerns**: Each component has a specific responsibility
3. **Extensibility**: The system is designed to be extended with new capabilities
4. **Configuration management**: Central configuration that persists user settings

## System Architecture

```mermaid
graph TD
    User[User] --> |Uses| CLI
    CLI[Command Line Interface] --> Core
    
    subgraph CoreComponents["Core Components"]
        Core[Core System] --> Registry
        Core --> Parser
        Core --> Storage
        Registry[Project Registry] --> Storage
        Parser[Rule Parser] --> Storage
    end
    
    subgraph AgentSystem["Agent System"]
        Core --> AgentRegistry
        AgentRegistry[Agent Registry] --> AgentLoader
        AgentLoader[Agent Loader] --> Rules
    end
    
    subgraph StorageLayer["Storage Layer"]
        Storage[Storage System] --> |Reads/Writes| Rules
        Rules[Rule Files] --> |Stored in| MainLocation
        Rules --> |Synced to| ProjectLocations
    end
    
    subgraph ConfigSection["Configuration"]
        Core --> Config
        Config[Configuration] --> |Stored in| ConfigFile
    end
    
    %% Node styles
    style User fill:#f96,stroke:#f63,stroke-width:2px
    style CLI fill:#69f,stroke:#36f,stroke-width:2px
    style Core fill:#f9f,stroke:#c6c,stroke-width:2px
    style Storage fill:#9f6,stroke:#6c3,stroke-width:2px
    
    %% Subgraph styles using classDef and class
    classDef coreStyle fill:#fcf,stroke:#c9c,stroke-width:1px
    classDef agentStyle fill:#cff,stroke:#9cc,stroke-width:1px
    classDef storageStyle fill:#cfc,stroke:#9c9,stroke-width:1px
    classDef configStyle fill:#ffc,stroke:#cc9,stroke-width:1px
    
    class CoreComponents coreStyle
    class AgentSystem agentStyle
    class StorageLayer storageStyle
    class ConfigSection configStyle
```

*Figure 1: High-level architecture of the crules system*

The system is organized into several interconnected components that work together to provide the functionality of crules. 

## Key Components

### Command Line Interface (CLI)

The CLI component provides the user interface for the tool. It:
- Processes command line arguments
- Manages the command hierarchy
- Handles input/output formatting
- Provides help and documentation

The CLI is implemented using the Cobra library, which provides a structured approach to defining commands, subcommands, and flags.

<details>
  <summary>📺 View CLI Interaction Example</summary>
  <div style={{width: '600px', height: '400px', border: '2px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0', backgroundColor: '#f8f8f8', borderRadius: '5px'}}>
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '48px', marginBottom: '10px'}}>🖥️</div>
      <div style={{fontWeight: 'bold', marginBottom: '5px'}}>CLI Interaction Example</div>
      <div style={{color: '#666', fontStyle: 'italic'}}>[Animated demonstration would go here]</div>
    </div>
  </div>
</details>

### Core System

The core system implements the main functionality of the tool:

| Component | Responsibility | Key Functions |
|-----------|----------------|---------------|
| **Project Registry** | Manages project information | Register, list, and validate projects |
| **Rule Management** | Handles rule files | Parse, validate, and synchronize rules |
| **Configuration** | Manages user settings | Load, save, and validate configuration |
| **File Operations** | Handles file system interaction | Copy, compare, and synchronize files |

### Agent System

```mermaid
flowchart TD
    subgraph AgentComponents["Agent Components"]
        Registry[Agent Registry] --> Parser
        Registry --> Selector
        Registry --> Loader
        
        Parser[Agent Parser] --> |Extracts| AgentMeta
        Parser --> RuleFiles
        
        Selector[Agent Selector] --> |Uses| TerminalUI
        Selector --> |Provides| AgentChoice
        
        Loader[Agent Loader] --> |Loads| SelectedAgent
        Loader --> |Uses| AgentCache
    end
    
    RuleFiles[(Rule Files)] --> |Stored in| FileSystem
    
    Core[Core System] --> |Initializes| Registry
    User --> |Interacts with| Selector
    TerminalUI --> |Displays to| User
    AgentChoice --> |Configures| User
    SelectedAgent --> |Assists| User
    
    %% Node styles
    style User fill:#f96,stroke:#f63,stroke-width:2px
    style Core fill:#f9f,stroke:#c6c,stroke-width:2px
    style Registry,Parser,Selector,Loader fill:#c9f,stroke:#96c,stroke-width:1px
    style TerminalUI fill:#69f,stroke:#36f,stroke-width:2px
    style RuleFiles fill:#9f6,stroke:#6c3,stroke-width:2px
    style AgentMeta,AgentChoice,SelectedAgent,AgentCache fill:#ffc,stroke:#cc9,stroke-width:1px
    
    %% Subgraph styles
    classDef componentStyle fill:#ecf,stroke:#c9c,stroke-width:1px
    class AgentComponents componentStyle
```

*Figure 2: Agent System architecture*

The Agent System is a specialized component that:
- Discovers available agents from rule files
- Manages agent metadata and capabilities
- Provides selection and loading of agents
- Handles agent persistence

The Agent System has the following subcomponents:
- **Registry**: Manages the collection of available agents
- **Parser**: Extracts agent information from rule files
- **Selector**: Provides an interactive UI for agent selection
- **Loader**: Loads agent definitions for use

### Storage Layer

The storage layer manages the persistence of rules and configuration:

| Storage Location | Purpose | Content |
|------------------|---------|---------|
| **Main Rules Location** | Central repository of rules | All rule files (.mdc) |
| **Project Rules** | Project-specific rules | Local copies of rules |
| **Configuration File** | User settings | JSON configuration data |

## Data Flow

### Rule Synchronization Flow

```mermaid
graph TD
    subgraph WorkflowSection["Workflow"]
        direction TB
        Start[Start] --> CheckConfig{Config Valid?}
        CheckConfig -->|Yes| ScanMain[Scan Main Location]
        CheckConfig -->|No| ConfigError[Config Error]
        
        ScanMain --> ScanProject[Scan Project Location]
        ScanProject --> Compare[Compare Files]
        
        Compare --> NeedSync{Changes to Sync?}
        NeedSync -->|Yes| CopyFiles[Copy Files]
        NeedSync -->|No| NoAction[No Action Needed]
        
        CopyFiles --> UpdateMeta[Update Metadata]
        UpdateMeta --> Report[Generate Report]
        NoAction --> Report
        
        Report --> End[End]
    end
    
    subgraph LocationSection["Locations"]
        MainLocation[(Main Location)]
        ProjectLocation[(Project Location)]
    end
    
    ScanMain --> MainLocation
    ScanProject --> ProjectLocation
    CopyFiles --> MainLocation
    CopyFiles --> ProjectLocation
    
    %% Node styles
    style Start,End fill:#9f6,stroke:#6c3,stroke-width:2px
    style CheckConfig,NeedSync fill:#fc9,stroke:#c96,stroke-width:2px
    style ConfigError fill:#f66,stroke:#c33,stroke-width:2px
    style ScanMain,ScanProject,Compare,CopyFiles,UpdateMeta,Report,NoAction fill:#69f,stroke:#36f,stroke-width:1px
    style MainLocation,ProjectLocation fill:#fc6,stroke:#c93,stroke-width:2px
    
    %% Subgraph styles
    classDef workflowStyle fill:#eef,stroke:#cce,stroke-width:1px
    classDef locationStyle fill:#efe,stroke:#cec,stroke-width:1px
    
    class WorkflowSection workflowStyle
    class LocationSection locationStyle
```

*Figure 3: Rule synchronization flow between main location and projects*

The synchronization process follows these steps:

1. **Initialization**:
   - User invokes `crules sync` command
   - System loads configuration
   - System identifies main and project locations

2. **Comparison**:
   - System scans both locations
   - Files are compared based on existence and modification time
   - System generates a list of files to update

3. **Synchronization**:
   - Files are copied from source to destination
   - System updates file attributes as needed
   - System logs the synchronization actions

4. **Reporting**:
   - System summarizes the changes made
   - User receives confirmation of synchronization

<details>
  <summary>📺 View Synchronization Process</summary>
  <div style={{width: '600px', height: '400px', border: '2px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0', backgroundColor: '#f8f8f8', borderRadius: '5px'}}>
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '48px', marginBottom: '10px'}}>🔄</div>
      <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Synchronization Process</div>
      <div style={{color: '#666', fontStyle: 'italic'}}>[Animated demonstration would go here]</div>
    </div>
  </div>
</details>

### Agent Selection Flow

The agent selection process follows this flow:

1. **Initialization**:
   - User invokes `crules agent select` command
   - System loads agent registry
   - System identifies available agents

2. **User Interface**:
   - Terminal UI displays agent options
   - User navigates and selects an agent
   - Selection is confirmed by user

3. **Processing**:
   - Selected agent ID is saved to configuration
   - Agent definition is loaded

4. **Reporting**:
   - System confirms agent selection
   - Agent details are displayed to user

## Technical Architecture

### Packaging Structure

```
crules/
├── cmd/
│   └── main.go        # Entry point
├── internal/
│   ├── agent/         # Agent system
│   ├── core/          # Core functionality
│   ├── git/           # Git integration
│   ├── ui/            # User interface
│   ├── utils/         # Utilities
│   └── version/       # Version information
└── .goreleaser.yml    # Release configuration
```

### Dependencies

The project relies on the following key external dependencies:

| Dependency | Purpose | Usage |
|------------|---------|-------|
| **Cobra** | Command line interface | Defining and handling commands |
| **Viper** | Configuration | Managing configuration files |
| **Bubble Tea** | Terminal UI | Interactive terminal interfaces |
| **Lip Gloss** | Terminal styling | Styling terminal output |
| **Afero** | File system abstraction | File operations |

## Error Handling

The error handling strategy follows these principles:

1. **Errors are propagated up**: Lower-level components return errors to be handled at higher levels
2. **Descriptive error messages**: Errors include context to help diagnose issues
3. **Graceful degradation**: The system attempts to continue operation when possible
4. **User-friendly messaging**: Error messages are translated into user-friendly terms in the CLI

## Extension Points

The architecture includes several extension points:

| Extension Point | Purpose | How to Extend |
|-----------------|---------|---------------|
| **Commands** | Add new functionality | Create new command handlers in cmd/ |
| **Agents** | Add new agent types | Create new .mdc files in the rules directory |
| **UI Components** | Enhance user interface | Extend the UI package in internal/ui/ |
| **Storage Backends** | Support different storage options | Implement storage interfaces in internal/core/ |

## Future Directions

```mermaid
flowchart TB
    v02[v0.2 Release] --> v03[v0.3 Release] --> v10[v1.0 Release] --> future[Future Plans]
    
    v02 --- v02_1["Plugin System"] 
    v02 --- v02_2["Enhanced Agent System"] 
    v02 --- v02_3["Improved UI"]

    v03 --- v03_1["Remote Agents"] 
    v03 --- v03_2["Rule Marketplace"] 
    v03 --- v03_3["Collaboration Features"]

    v10 --- v10_1["Web Interface"] 
    v10 --- v10_2["API Server"] 
    v10 --- v10_3["Enterprise Features"]

    future --- fut_1["Cloud Integration"] 
    future --- fut_2["AI-assisted Rule Generation"] 
    future --- fut_3["IDE Integrations"]
    
    style v02 fill:#e1f5fe,stroke:#4fc3f7,stroke-width:2px,color:#0277bd,font-weight:bold
    style v03 fill:#e8f5e9,stroke:#66bb6a,stroke-width:2px,color:#2e7d32,font-weight:bold
    style v10 fill:#f3e5f5,stroke:#ab47bc,stroke-width:2px,color:#7b1fa2,font-weight:bold
    style future fill:#fff3e0,stroke:#ffa726,stroke-width:2px,color:#ef6c00,font-weight:bold
    
    style v02_1,v02_2,v02_3 fill:#e1f5fe,stroke:#4fc3f7,stroke-width:1px,color:#0277bd
    style v03_1,v03_2,v03_3 fill:#e8f5e9,stroke:#66bb6a,stroke-width:1px,color:#2e7d32
    style v10_1,v10_2,v10_3 fill:#f3e5f5,stroke:#ab47bc,stroke-width:1px,color:#7b1fa2
    style fut_1,fut_2,fut_3 fill:#fff3e0,stroke:#ffa726,stroke-width:1px,color:#ef6c00
```

*Figure 4: Future architecture roadmap*

The architecture is designed to support future enhancements:

1. **Plugin System**: Support for external plugins
2. **Remote Agents**: Support for remotely-hosted agents
3. **Collaboration Features**: Sharing and collaboration on rules
4. **Web Interface**: A browser-based interface for managing rules
5. **API Server**: REST API for programmatic access

## See Also

- [Code Structure](./code-structure.md)
- [Extending Agents](./extending-agents.md)
- [Contributing Guidelines](./contributing.md)
- [API Reference](../api-reference/core-api.md)

## Navigation

- Next: [Extending Agents](./extending-agents.md)
- Up: [Developer Guide](../README.md#developer-guide)
- Home: [Documentation Home](../README.md)
