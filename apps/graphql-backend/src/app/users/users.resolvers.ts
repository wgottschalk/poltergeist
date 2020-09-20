import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Team, User } from '../../graphql';
// import { TeamsService } from '../teams/teams.service';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersService: UsersService // private teamsService: TeamsService
  ) {}

  @Query()
  async user(@Args('id') id: number): Promise<User | undefined> {
    console.log({ id, test: typeof id });
    return await this.usersService.get({ id });
  }

  @ResolveField()
  async teams(@Parent() user: User): Promise<Team[]> {
    console.log({ user: JSON.stringify(user) });
    return [];
    // const teams = await this.teamsService.list({ userId: user.id });
    // return teams;
  }

  // @Mutation()
  // async createUser(
  //   @Args() userInput: User
  // ): Promise<User> {
  //   return await this.usersService.create(userInput);
  // }
}
