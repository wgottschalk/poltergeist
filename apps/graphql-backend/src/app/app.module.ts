import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(
        process.cwd(),
        'apps/graphql-backend/src/schema.graphql'
      ),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
