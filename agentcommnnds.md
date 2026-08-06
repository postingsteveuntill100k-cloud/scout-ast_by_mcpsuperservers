# Agent Assignments

The following mapping defines which specialized agent is responsible for which file/engine within the Scout Core repository.

## The Leadership & Architecture Layer
- **Chief Architect Agent**: Owns architectural guidelines, `README.md`, and this assignment list.
- **Integration & API Agent**: Coordinates boundaries and API contracts between engines.

## The Pipeline Implementation Layer (The Specialists)
- **Parser & AST Agent**:
  - `Tree-sitter Parser`
  - `AST Graph Engine`
- **Graph & Indexing Agent**:
  - `Dependency Graph`
  - `Symbol Index`
- **Memory Engine Agent**:
  - `Memory Engine`
- **Retrieval Engine Agent**:
  - `Retrieval Engine`
- **Context Engine Agent**:
  - `Context Engine`
- **Focus Engine Agent**:
  - `Focus Engine`
- **Compression Engine Agent**:
  - `Compression Engine`
- **Prompt Builder Agent**:
  - `Prompt Builder`

## Additional Pipeline Engines & Handlers (Aligned to best fit)
- **Session Engine Agent** (Sub-domain of Context/Memory/Architecture):
  - `Session Engine`
- **Decision Engine Agent** (Sub-domain of Integration/Architecture):
  - `Decision Engine`

## The Cross-Cutting Quality Layer
*(These agents operate across all files above)*
- **Test Automation Architect (SDET Agent)**: Owns unit and integration tests.
- **Performance & Optimization Agent**: Owns `Benchmark Engine` and overall speed optimization.
- **Security & Data Privacy Agent**: Ensures secrets are not leaked in parsing/memory.
- **Documentation & Knowledge Agent**: Maintains domain knowledge and internal wiki.
- **CI/CD & Developer Experience Agent**: Owns the build pipeline and repository health.
