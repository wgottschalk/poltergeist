import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Team } from '../../teams/models/team';

class BaseUser {
  @Field() name: string;
  @Field() githubName: string;
  @Field() email: string;
}

@ObjectType()
export class User extends BaseUser {
  @Field((type) => Int) id: number;
  @Field((type) => [Team], { nullable: true }) teams?: Team[];
}

@InputType()
export class UserInput extends BaseUser {
  @Field() test: string;
}
