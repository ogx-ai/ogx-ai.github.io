import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-deprecated/llama-stack-specification-deprecated-apis",
    },
    {
      type: "category",
      label: "Benchmarks",
      link: {
        type: "doc",
        id: "api-deprecated/benchmarks",
      },
      items: [
        {
          type: "doc",
          id: "api-deprecated/register-benchmark-v-1-alpha-eval-benchmarks-post",
          label: "Register a benchmark.",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "api-deprecated/unregister-benchmark-v-1-alpha-eval-benchmarks-benchmark-id-delete",
          label: "Unregister a benchmark.",
          className: "menu__list-item--deprecated api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Datasets",
      link: {
        type: "doc",
        id: "api-deprecated/datasets",
      },
      items: [
        {
          type: "doc",
          id: "api-deprecated/register-dataset-v-1-beta-datasets-post",
          label: "Register a new dataset.",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "api-deprecated/unregister-dataset-v-1-beta-datasets-dataset-id-delete",
          label: "Unregister a dataset by its ID.",
          className: "menu__list-item--deprecated api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Shields",
      link: {
        type: "doc",
        id: "api-deprecated/shields",
      },
      items: [
        {
          type: "doc",
          id: "api-deprecated/register-shield-v-1-shields-post",
          label: "Register a shield.",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "api-deprecated/unregister-shield-v-1-shields-identifier-delete",
          label: "Unregister a shield.",
          className: "menu__list-item--deprecated api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Scoring Functions",
      items: [
        {
          type: "doc",
          id: "api-deprecated/register-scoring-function-v-1-scoring-functions-post",
          label: "Register a scoring function.",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "api-deprecated/unregister-scoring-function-v-1-scoring-functions-scoring-fn-id-delete",
          label: "Unregister a scoring function.",
          className: "menu__list-item--deprecated api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
