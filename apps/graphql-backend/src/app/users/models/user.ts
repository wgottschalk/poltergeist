import { Field, ObjectType } from '@nestjs/graphql';
import { Team } from '../../teams/models/team';

@ObjectType()
export class User {
  @Field() id: string;
  @Field() name: string;
  @Field() githubName: string;
  @Field() email: string;
  @Field((type) => [Team]) teams: Team[];
}
