import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

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
  providers: [UsersService],
})
export class AppModule {}
