import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-experimental/llama-stack-specification-experimental-apis",
    },
    {
      type: "category",
      label: "Benchmarks",
      link: {
        type: "doc",
        id: "api-experimental/benchmarks",
      },
      items: [
        {
          type: "doc",
          id: "api-experimental/list-benchmarks-v-1-alpha-eval-benchmarks-get",
          label: "List all benchmarks.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/get-benchmark-v-1-alpha-eval-benchmarks-benchmark-id-get",
          label: "Get a benchmark by its ID.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "DatasetIO",
      link: {
        type: "doc",
        id: "api-experimental/dataset-io",
      },
      items: [
        {
          type: "doc",
          id: "api-experimental/append-rows-v-1-beta-datasetio-append-rows-dataset-id-post",
          label: "Append rows to a dataset.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-experimental/iterrows-v-1-beta-datasetio-iterrows-dataset-id-get",
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
        id: "api-experimental/datasets",
      },
      items: [
        {
          type: "doc",
          id: "api-experimental/list-datasets-v-1-beta-datasets-get",
          label: "List all datasets.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/get-dataset-v-1-beta-datasets-dataset-id-get",
          label: "Get a dataset by its ID.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Evaluations",
      link: {
        type: "doc",
        id: "api-experimental/eval",
      },
      items: [
        {
          type: "doc",
          id: "api-experimental/evaluate-rows-v-1-alpha-eval-benchmarks-benchmark-id-evaluations-post",
          label: "Evaluate Rows",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-experimental/run-eval-v-1-alpha-eval-benchmarks-benchmark-id-jobs-post",
          label: "Run Eval",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-experimental/job-status-v-1-alpha-eval-benchmarks-benchmark-id-jobs-job-id-get",
          label: "Job Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/job-cancel-v-1-alpha-eval-benchmarks-benchmark-id-jobs-job-id-delete",
          label: "Job Cancel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-experimental/job-result-v-1-alpha-eval-benchmarks-benchmark-id-jobs-job-id-result-get",
          label: "Job Result",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Inference",
      link: {
        type: "doc",
        id: "api-experimental/inference",
      },
      items: [
        {
          type: "doc",
          id: "api-experimental/rerank-v-1-alpha-inference-rerank-post",
          label: "Rerank documents based on relevance to a query.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Admin",
      items: [
        {
          type: "doc",
          id: "api-experimental/list-providers-v-1-alpha-admin-providers-get",
          label: "List all available providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/inspect-provider-v-1-alpha-admin-providers-provider-id-get",
          label: "Get provider details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/list-routes-v-1-alpha-admin-inspect-routes-get",
          label: "List all available API routes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/health-v-1-alpha-admin-health-get",
          label: "Get service health status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/version-v-1-alpha-admin-version-get",
          label: "Get service version",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "File Processors",
      items: [
        {
          type: "doc",
          id: "api-experimental/process-file-v-1-alpha-file-processors-process-post",
          label: "Process a file into chunks ready for vector database storage.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Connectors",
      items: [
        {
          type: "doc",
          id: "api-experimental/list-connectors-v-1-beta-connectors-get",
          label: "List all connectors.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/get-connector-tool-v-1-beta-connectors-connector-id-tools-tool-name-get",
          label: "Get a tool by name from a connector.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/list-connector-tools-v-1-beta-connectors-connector-id-tools-get",
          label: "List tools from a connector.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-experimental/get-connector-v-1-beta-connectors-connector-id-get",
          label: "Get a connector by its ID.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
