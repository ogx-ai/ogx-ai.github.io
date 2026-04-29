import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/llama-stack-specification",
    },
    {
      type: "category",
      label: "Batches",
      link: {
        type: "doc",
        id: "api/batches",
      },
      items: [
        {
          type: "doc",
          id: "api/list-batches-v-1-batches-get",
          label: "List all batches for the current user.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-batch-v-1-batches-post",
          label: "Create a new batch for processing multiple API requests.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/retrieve-batch-v-1-batches-batch-id-get",
          label: "Retrieve information about a specific batch.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cancel-batch-v-1-batches-batch-id-cancel-post",
          label: "Cancel a batch that is in progress.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Conversations",
      link: {
        type: "doc",
        id: "api/conversations",
      },
      items: [
        {
          type: "doc",
          id: "api/create-conversation-v-1-conversations-post",
          label: "Create a conversation.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-conversation-v-1-conversations-conversation-id-get",
          label: "Retrieve a conversation.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-conversation-v-1-conversations-conversation-id-post",
          label: "Update a conversation.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-conversation-v-1-conversations-conversation-id-delete",
          label: "Delete a conversation.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-items-v-1-conversations-conversation-id-items-get",
          label: "List items.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-items-v-1-conversations-conversation-id-items-post",
          label: "Create items.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/retrieve-item-v-1-conversations-conversation-id-items-item-id-get",
          label: "Retrieve an item.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-item-v-1-conversations-conversation-id-items-item-id-delete",
          label: "Delete an item.",
          className: "api-method delete",
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
          id: "api/list-files-v-1-files-get",
          label: "List files",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upload-file-v-1-files-post",
          label: "Upload file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-file-v-1-files-file-id-get",
          label: "Get file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-file-v-1-files-file-id-delete",
          label: "Delete file",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/retrieve-file-content-v-1-files-file-id-content-get",
          label: "Retrieve file content",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Inference",
      link: {
        type: "doc",
        id: "api/inference",
      },
      items: [
        {
          type: "doc",
          id: "api/list-chat-completions-v-1-chat-completions-get",
          label: "List chat completions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-chat-completion-v-1-chat-completions-post",
          label: "Create chat completions.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-chat-completion-v-1-chat-completions-completion-id-get",
          label: "Get chat completion.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-completion-v-1-completions-post",
          label: "Create completion.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-embeddings-v-1-embeddings-post",
          label: "Create embeddings.",
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
          id: "api/health-v-1-health-get",
          label: "Get health status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-routes-v-1-inspect-routes-get",
          label: "List routes.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/version-v-1-version-get",
          label: "Get version.",
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
          id: "api/openai-list-models-v-1-models-get",
          label: "List models using the OpenAI API.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-model-v-1-models-model-id-get",
          label: "Get a model by its identifier.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Prompts",
      link: {
        type: "doc",
        id: "api/prompts",
      },
      items: [
        {
          type: "doc",
          id: "api/list-prompts-v-1-prompts-get",
          label: "List all prompts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-prompt-v-1-prompts-post",
          label: "Create a prompt.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-prompt-v-1-prompts-prompt-id-get",
          label: "Get a prompt.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-prompt-v-1-prompts-prompt-id-put",
          label: "Update a prompt.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-prompt-v-1-prompts-prompt-id-delete",
          label: "Delete a prompt.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/set-default-version-v-1-prompts-prompt-id-set-default-version-put",
          label: "Set prompt version.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/list-prompt-versions-v-1-prompts-prompt-id-versions-get",
          label: "List prompt versions.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Providers",
      link: {
        type: "doc",
        id: "api/providers",
      },
      items: [
        {
          type: "doc",
          id: "api/list-providers-v-1-providers-get",
          label: "List providers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inspect-provider-v-1-providers-provider-id-get",
          label: "Get provider.",
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
          id: "api/run-moderation-v-1-moderations-post",
          label: "Create Moderation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-shield-v-1-safety-run-shield-post",
          label: "Run Shield",
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
          id: "api/score-v-1-scoring-score-post",
          label: "Score a list of rows.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/score-batch-v-1-scoring-score-batch-post",
          label: "Score a batch of rows.",
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
          id: "api/list-shields-v-1-shields-get",
          label: "List all shields.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-shield-v-1-shields-identifier-get",
          label: "Get a shield by its identifier.",
          className: "api-method get",
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
          id: "api/insert-chunks-v-1-vector-io-insert-post",
          label: "Insert embedded chunks into a vector database.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-chunks-v-1-vector-io-query-post",
          label: "Query chunks from a vector database.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-list-vector-stores-v-1-vector-stores-get",
          label: "List vector stores (OpenAI-compatible).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-create-vector-store-v-1-vector-stores-post",
          label: "Create a vector store (OpenAI-compatible).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-vector-store-v-1-vector-stores-vector-store-id-get",
          label: "Retrieve a vector store (OpenAI-compatible).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-update-vector-store-v-1-vector-stores-vector-store-id-post",
          label: "Update a vector store (OpenAI-compatible).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-delete-vector-store-v-1-vector-stores-vector-store-id-delete",
          label: "Delete a vector store (OpenAI-compatible).",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openai-create-vector-store-file-batch-v-1-vector-stores-vector-store-id-file-batches-post",
          label: "Create a vector store file batch (OpenAI-compatible).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-vector-store-file-batch-v-1-vector-stores-vector-store-id-file-batches-batch-id-get",
          label: "Retrieve a vector store file batch (OpenAI-compatible).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-cancel-vector-store-file-batch-v-1-vector-stores-vector-store-id-file-batches-batch-id-cancel-post",
          label: "Cancel a vector store file batch (OpenAI-compatible).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-list-files-in-vector-store-file-batch-v-1-vector-stores-vector-store-id-file-batches-batch-id-files-get",
          label: "List files in a vector store file batch (OpenAI-compatible).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-list-files-in-vector-store-v-1-vector-stores-vector-store-id-files-get",
          label: "List files in a vector store (OpenAI-compatible).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-attach-file-to-vector-store-v-1-vector-stores-vector-store-id-files-post",
          label: "Attach a file to a vector store (OpenAI-compatible).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-vector-store-file-v-1-vector-stores-vector-store-id-files-file-id-get",
          label: "Retrieve a vector store file (OpenAI-compatible).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-update-vector-store-file-v-1-vector-stores-vector-store-id-files-file-id-post",
          label: "Update a vector store file (OpenAI-compatible).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-delete-vector-store-file-v-1-vector-stores-vector-store-id-files-file-id-delete",
          label: "Delete a vector store file (OpenAI-compatible).",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-vector-store-file-contents-v-1-vector-stores-vector-store-id-files-file-id-content-get",
          label: "Retrieve vector store file contents (OpenAI-compatible).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-search-vector-store-v-1-vector-stores-vector-store-id-search-post",
          label: "Search a vector store (OpenAI-compatible).",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Responses",
      items: [
        {
          type: "doc",
          id: "api/list-openai-responses-v-1-responses-get",
          label: "List all responses.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-openai-response-v-1-responses-post",
          label: "Create a model response.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-openai-response-v-1-responses-response-id-get",
          label: "Get a model response.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-openai-response-v-1-responses-response-id-delete",
          label: "Delete a response.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-openai-response-input-items-v-1-responses-response-id-input-items-get",
          label: "List input items.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cancel-openai-response-v-1-responses-response-id-cancel-post",
          label: "Cancel a background response that is in progress.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Scoring Functions",
      items: [
        {
          type: "doc",
          id: "api/list-scoring-functions-v-1-scoring-functions-get",
          label: "List all scoring functions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-scoring-function-v-1-scoring-functions-scoring-fn-id-get",
          label: "Get a scoring function by its ID.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        {
          type: "doc",
          id: "api/list-tools-v-1-tools-get",
          label: "List tools with optional tool group filter.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
