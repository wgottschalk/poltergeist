import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  Int,
  Mutation,
} from '@nestjs/graphql';
import { Team } from '../teams/models/team';
// import { TeamsService } from '../teams/teams.service';
import { User, UserInput } from './models/user';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService // private teamsService: TeamsService
  ) {}

  @Query((returns) => User, { name: 'user', nullable: true })
  async user(
    @Args('id', { type: () => Int }) id: number
  ): Promise<User | undefined> {
    return await this.usersService.get({ id });
  }

  @ResolveField('teams', (returns) => [Team])
  async teams(@Parent() user: User): Promise<Team[]> {
    console.log({ user: JSON.stringify(user) });
    return [];
    // const teams = await this.teamsService.list({ userId: user.id });
    // return teams;
  }

  @Mutation((returns) => User)
  async createUser(
    @Args({ name: 'userInput', type: () => UserInput }) userInput: User
  ): Promise<User> {
    return await this.usersService.create(userInput);
  }
}
