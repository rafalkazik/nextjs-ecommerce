import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcasesn62sys01uma89mc171/master',
  documents: 'graphql/*.graphql',
  generates: {
    'generated/graphql.tsx': {
      // preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
