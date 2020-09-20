import { Injectable } from '@nestjs/common';
import { Team } from '../../graphql';

@Injectable()
export class TeamsService {
  async list(inputs: { userId?: number } = {}): Promise<Team[]> {
    return [];
  }
}
