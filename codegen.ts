import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://spacex-production.up.railway.app/',
  documents: ['src/graphql/**/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/lib/gql/': {
      preset: 'client',
      plugins: []
    },
  },
};
 
export default config