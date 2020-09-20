import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

console.log(`
TEST: ${process.cwd()}

`);
const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['apps/graphql-backend/src/**/*.graphql'],
  path: join(process.cwd(), 'apps/graphql-backend/src/graphql.ts'),
  outputAs: 'interface',
});
