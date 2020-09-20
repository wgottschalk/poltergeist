import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Team } from '../teams/models/team';
import { TeamsService } from '../teams/teams.service';
import { User } from './models/user';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private teamsService: TeamsService
  ) {}

  @Query((returns) => User, { name: 'user', nullable: true })
  async user(@Args('id') id: string): Promise<User | undefined> {
    return this.usersService.get(id);
  }

  @ResolveField('teams', (returns) => [Team])
  async teams(@Parent() user: User): Promise<Team[]> {
    console.log({ user: JSON.stringify(user) });
    const teams = await this.teamsService.list({ userId: user.id });
    return teams;
  }
}
