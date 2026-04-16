import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/llama-stack-specification",
    },
    {
      type: "category",
      label: "Agents API for creating and interacting with agentic systems.",
      link: {
        type: "doc",
        id: "api/agents",
      },
      items: [
        {
          type: "doc",
          id: "api/list-all-agents",
          label: "List all agents.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-an-agent-with-the-given-configuration",
          label: "Create an agent with the given configuration.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-a-new-session-for-an-agent",
          label: "Create a new session for an agent.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-a-new-turn-for-an-agent",
          label: "Create a new turn for an agent.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-all-open-ai-responses",
          label: "List all OpenAI responses.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-open-ai-response",
          label: "Create a new OpenAI response.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/describe-an-agent-by-its-id",
          label: "Describe an agent by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-an-agent-by-its-id-and-its-associated-sessions-and-turns",
          label: "Delete an agent by its ID and its associated sessions and turns.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/retrieve-an-agent-session-by-its-id",
          label: "Retrieve an agent session by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-an-agent-session-by-its-id-and-its-associated-turns",
          label: "Delete an agent session by its ID and its associated turns.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/retrieve-an-open-ai-response-by-its-id",
          label: "Retrieve an OpenAI response by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-an-open-ai-response-by-its-id",
          label: "Delete an OpenAI response by its ID.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/retrieve-an-agent-step-by-its-id",
          label: "Retrieve an agent step by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-an-agent-turn-by-its-id",
          label: "Retrieve an agent turn by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-all-session-s-of-a-given-agent",
          label: "List all session(s) of a given agent.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-input-items-for-a-given-open-ai-response",
          label: "List input items for a given OpenAI response.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/resume-an-agent-turn-with-executed-tool-call-responses",
          label: "Resume an agent turn with executed tool call responses.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Batch inference API for generating completions and chat completions.",
      link: {
        type: "doc",
        id: "api/batch-inference-coming-soon",
      },
      items: [
        {
          type: "doc",
          id: "api/generate-a-chat-completion-for-the-given-messages-using-the-specified-model",
          label: "Generate a chat completion for the given messages using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/generate-a-completion-for-the-given-content-using-the-specified-model",
          label: "Generate a completion for the given content using the specified model.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Benchmarks",
      link: {
        type: "doc",
        id: "api/benchmarks",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-benchmark-by-its-id",
          label: "Get a benchmark by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-benchmark",
          label: "Unregister a benchmark.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-a-benchmark-by-its-id",
          label: "Get a benchmark by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-benchmark",
          label: "Unregister a benchmark.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-all-benchmarks",
          label: "List all benchmarks.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-benchmark",
          label: "Register a benchmark.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-all-benchmarks",
          label: "List all benchmarks.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-benchmark",
          label: "Register a benchmark.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "DatasetIO",
      link: {
        type: "doc",
        id: "api/dataset-io",
      },
      items: [
        {
          type: "doc",
          id: "api/append-rows-to-a-dataset",
          label: "Append rows to a dataset.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-a-paginated-list-of-rows-from-a-dataset",
          label: "Get a paginated list of rows from a dataset.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Datasets",
      link: {
        type: "doc",
        id: "api/datasets",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-dataset-by-its-id",
          label: "Get a dataset by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-dataset-by-its-id",
          label: "Unregister a dataset by its ID.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-all-datasets",
          label: "List all datasets.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-new-dataset",
          label: "Register a new dataset.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ogx Evaluation API for running evaluations on model and agent candidates.",
      link: {
        type: "doc",
        id: "api/eval",
      },
      items: [
        {
          type: "doc",
          id: "api/evaluate-a-list-of-rows-on-a-benchmark",
          label: "Evaluate a list of rows on a benchmark.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/evaluate-a-list-of-rows-on-a-benchmark",
          label: "Evaluate a list of rows on a benchmark.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-the-status-of-a-job",
          label: "Get the status of a job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cancel-a-job",
          label: "Cancel a job.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-the-status-of-a-job",
          label: "Get the status of a job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cancel-a-job",
          label: "Cancel a job.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-the-result-of-a-job",
          label: "Get the result of a job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-the-result-of-a-job",
          label: "Get the result of a job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/run-an-evaluation-on-a-benchmark",
          label: "Run an evaluation on a benchmark.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-an-evaluation-on-a-benchmark",
          label: "Run an evaluation on a benchmark.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Files",
      link: {
        type: "doc",
        id: "api/files",
      },
      items: [
        {
          type: "doc",
          id: "api/returns-information-about-a-specific-file",
          label: "Returns information about a specific file.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-a-file",
          label: "Delete a file.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/returns-a-list-of-files-that-belong-to-the-users-organization",
          label: "Returns a list of files that belong to the user's organization.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upload-a-file-that-can-be-used-across-various-endpoints",
          label: "Upload a file that can be used across various endpoints.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/returns-the-contents-of-the-specified-file",
          label: "Returns the contents of the specified file.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ogx Inference API for generating completions, chat completions, and embeddings.",
      link: {
        type: "doc",
        id: "api/inference",
      },
      items: [
        {
          type: "doc",
          id: "api/generate-chat-completions-for-a-batch-of-messages-using-the-specified-model",
          label: "Generate chat completions for a batch of messages using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/generate-completions-for-a-batch-of-content-using-the-specified-model",
          label: "Generate completions for a batch of content using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/generate-embeddings-for-content-pieces-using-the-specified-model",
          label: "Generate embeddings for content pieces using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/describe-a-chat-completion-by-its-id",
          label: "Describe a chat completion by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-all-chat-completions",
          label: "List all chat completions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/generate-an-open-ai-compatible-chat-completion-for-the-given-messages-using-the-specified-model",
          label: "Generate an OpenAI-compatible chat completion for the given messages using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/generate-an-open-ai-compatible-completion-for-the-given-prompt-using-the-specified-model",
          label: "Generate an OpenAI-compatible completion for the given prompt using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/generate-open-ai-compatible-embeddings-for-the-given-input-using-the-specified-model",
          label: "Generate OpenAI-compatible embeddings for the given input using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rerank-a-list-of-documents-based-on-their-relevance-to-a-query",
          label: "Rerank a list of documents based on their relevance to a query.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Inspect",
      link: {
        type: "doc",
        id: "api/inspect",
      },
      items: [
        {
          type: "doc",
          id: "api/get-the-current-health-status-of-the-service",
          label: "Get the current health status of the service.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-all-available-api-routes-with-their-methods-and-implementing-providers",
          label: "List all available API routes with their methods and implementing providers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-the-version-of-the-service",
          label: "Get the version of the service.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Models",
      link: {
        type: "doc",
        id: "api/models",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-model-by-its-identifier",
          label: "Get a model by its identifier.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-model",
          label: "Unregister a model.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-all-models",
          label: "List all models.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-model",
          label: "Register a model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-models-using-the-open-ai-api",
          label: "List models using the OpenAI API.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "PostTraining (Coming Soon)",
      link: {
        type: "doc",
        id: "api/post-training-coming-soon",
      },
      items: [
        {
          type: "doc",
          id: "api/cancel-a-training-job",
          label: "Cancel a training job.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cancel-a-training-job",
          label: "Cancel a training job.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-the-artifacts-of-a-training-job",
          label: "Get the artifacts of a training job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-the-artifacts-of-a-training-job",
          label: "Get the artifacts of a training job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-the-status-of-a-training-job",
          label: "Get the status of a training job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-the-status-of-a-training-job",
          label: "Get the status of a training job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-training-jobs",
          label: "Get all training jobs.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-training-jobs",
          label: "Get all training jobs.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/run-preference-optimization-of-a-model",
          label: "Run preference optimization of a model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-preference-optimization-of-a-model",
          label: "Run preference optimization of a model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-supervised-fine-tuning-of-a-model",
          label: "Run supervised fine-tuning of a model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-supervised-fine-tuning-of-a-model",
          label: "Run supervised fine-tuning of a model.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Protocol for prompt management operations.",
      link: {
        type: "doc",
        id: "api/prompts",
      },
      items: [
        {
          type: "doc",
          id: "api/list-all-prompts",
          label: "List all prompts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-prompt",
          label: "Create a new prompt.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-a-prompt-by-its-identifier-and-optional-version",
          label: "Get a prompt by its identifier and optional version.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-an-existing-prompt-increments-version",
          label: "Update an existing prompt (increments version).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-a-prompt",
          label: "Delete a prompt.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-all-versions-of-a-specific-prompt",
          label: "List all versions of a specific prompt.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/set-which-version-of-a-prompt-should-be-the-default-in-get-prompt-latest",
          label: "Set which version of a prompt should be the default in get_prompt (latest).",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Providers API for inspecting, listing, and modifying providers and their configurations.",
      link: {
        type: "doc",
        id: "api/providers",
      },
      items: [
        {
          type: "doc",
          id: "api/get-detailed-information-about-a-specific-provider",
          label: "Get detailed information about a specific provider.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-all-available-providers",
          label: "List all available providers.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Safety",
      link: {
        type: "doc",
        id: "api/safety",
      },
      items: [
        {
          type: "doc",
          id: "api/classifies-if-text-and-or-image-inputs-are-potentially-harmful",
          label: "Classifies if text and/or image inputs are potentially harmful.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-a-shield",
          label: "Run a shield.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Scoring",
      link: {
        type: "doc",
        id: "api/scoring",
      },
      items: [
        {
          type: "doc",
          id: "api/score-a-list-of-rows",
          label: "Score a list of rows.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/score-a-batch-of-rows",
          label: "Score a batch of rows.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ScoringFunctions",
      link: {
        type: "doc",
        id: "api/scoring-functions",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-scoring-function-by-its-id",
          label: "Get a scoring function by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-scoring-function",
          label: "Unregister a scoring function.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-all-scoring-functions",
          label: "List all scoring functions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-scoring-function",
          label: "Register a scoring function.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Shields",
      link: {
        type: "doc",
        id: "api/shields",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-shield-by-its-identifier",
          label: "Get a shield by its identifier.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-shield",
          label: "Unregister a shield.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-all-shields",
          label: "List all shields.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-shield",
          label: "Register a shield.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SyntheticDataGeneration (Coming Soon)",
      link: {
        type: "doc",
        id: "api/synthetic-data-generation-coming-soon",
      },
      items: [
        {
          type: "doc",
          id: "api/generate-synthetic-data-based-on-input-dialogs-and-apply-filtering",
          label: "Generate synthetic data based on input dialogs and apply filtering.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Telemetry",
      link: {
        type: "doc",
        id: "api/telemetry",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-span-by-its-id",
          label: "Get a span by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-a-span-tree-by-its-id",
          label: "Get a span tree by its ID.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-a-trace-by-its-id",
          label: "Get a trace by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/log-an-event",
          label: "Log an event.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-metrics",
          label: "Query metrics.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-spans",
          label: "Query spans.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-traces",
          label: "Query traces.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/save-spans-to-a-dataset",
          label: "Save spans to a dataset.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ToolGroups",
      link: {
        type: "doc",
        id: "api/tool-groups",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-tool-by-its-name",
          label: "Get a tool by its name.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-a-tool-group-by-its-id",
          label: "Get a tool group by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-tool-group",
          label: "Unregister a tool group.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-tool-groups-with-optional-provider",
          label: "List tool groups with optional provider.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-tool-group",
          label: "Register a tool group.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-tools-with-optional-tool-group",
          label: "List tools with optional tool group.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ToolRuntime",
      link: {
        type: "doc",
        id: "api/tool-runtime",
      },
      items: [
        {
          type: "doc",
          id: "api/index-documents-so-they-can-be-used-by-the-rag-system",
          label: "Index documents so they can be used by the RAG system.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-a-tool-with-the-given-arguments",
          label: "Run a tool with the given arguments.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-all-tools-in-the-runtime",
          label: "List all tools in the runtime.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/query-the-rag-system-for-context-typically-invoked-by-the-agent",
          label: "Query the RAG system for context; typically invoked by the agent.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "VectorDBs",
      link: {
        type: "doc",
        id: "api/vector-d-bs",
      },
      items: [
        {
          type: "doc",
          id: "api/get-a-vector-database-by-its-identifier",
          label: "Get a vector database by its identifier.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-a-vector-database",
          label: "Unregister a vector database.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-all-vector-databases",
          label: "List all vector databases.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-a-vector-database",
          label: "Register a vector database.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "VectorIO",
      link: {
        type: "doc",
        id: "api/vector-io",
      },
      items: [
        {
          type: "doc",
          id: "api/insert-chunks-into-a-vector-database",
          label: "Insert chunks into a vector database.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-files-in-a-vector-store",
          label: "List files in a vector store.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/attach-a-file-to-a-vector-store",
          label: "Attach a file to a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/returns-a-list-of-vector-stores",
          label: "Returns a list of vector stores.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/creates-a-vector-store",
          label: "Creates a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/retrieves-a-vector-store",
          label: "Retrieves a vector store.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/updates-a-vector-store",
          label: "Updates a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-a-vector-store",
          label: "Delete a vector store.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/retrieves-a-vector-store-file",
          label: "Retrieves a vector store file.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/updates-a-vector-store-file",
          label: "Updates a vector store file.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-a-vector-store-file",
          label: "Delete a vector store file.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/retrieves-the-contents-of-a-vector-store-file",
          label: "Retrieves the contents of a vector store file.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/search-for-chunks-in-a-vector-store",
          label: "Search for chunks in a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-chunks-from-a-vector-database",
          label: "Query chunks from a vector database.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
