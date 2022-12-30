import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcasesn62sys01uma89mc171/master',
  documents: 'graphql/*.graphql',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
