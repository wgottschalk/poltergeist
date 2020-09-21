import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ServiceModule } from './services/service.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ServiceModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/graphql-backend/src/graphql.ts'),
      },
    }),
  ],
})
export class AppModule {}
