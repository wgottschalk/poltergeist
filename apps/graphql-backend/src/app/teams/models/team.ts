import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/user';

@ObjectType()
export class Team {
  @Field() name: string;
  @Field() mailingGroup: string;
  @Field((type) => [User]) members: User[];
}
