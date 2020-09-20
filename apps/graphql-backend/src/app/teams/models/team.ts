import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { User } from '../../users/models/user';

@ObjectType()
export class Team {
  @Field((type) => Int) id: number;
  @Field() name: string;
  @Field() mailingGroup: string;
  // @Field((type) => [User]) members: User[];
}
