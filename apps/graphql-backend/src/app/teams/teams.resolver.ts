import { Resolver } from '@nestjs/graphql';
import { Team } from './models/team';

@Resolver((of) => Team)
export class TeamsResolver {}
