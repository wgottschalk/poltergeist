import { Injectable } from '@nestjs/common';
import { Team } from '../../graphql';

@Injectable()
export class TeamsService {
  async list(): Promise<Team[]> {
    return [];
  }
}
