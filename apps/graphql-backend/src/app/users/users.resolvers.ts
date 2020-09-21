import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { Service, User, UserInput } from '../../graphql';
import { ServiceService } from '../services/service.service';
// import { TeamsService } from '../teams/teams.service';
import { UsersService } from './users.service';

type PlainUser = Omit<User, 'services'>;

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private serviceService: ServiceService
  ) {}

  @Query()
  async user(@Args('id') id: string): Promise<PlainUser | undefined> {
    return await this.usersService.get({ id });
  }

  @Query()
  async users(): Promise<PlainUser[]> {
    return await this.usersService.list();
  }

  @Mutation()
  async createUser(
    @Args('userInput') userInput: UserInput
  ): Promise<PlainUser> {
    return await this.usersService.create(userInput);
  }

  @ResolveField()
  async services(@Parent() user: User): Promise<Service[]> {
    return this.serviceService.get({ userId: user.id });
  }
}
