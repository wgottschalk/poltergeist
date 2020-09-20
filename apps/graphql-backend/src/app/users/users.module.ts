import { Module } from '@nestjs/common';
import { TeamsService } from '../teams/teams.service';
import { UsersResolver } from './users.resolvers';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UsersResolver, TeamsService],
})
export class UsersModule {}
