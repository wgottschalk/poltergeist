import { Injectable } from '@nestjs/common';
import { Team } from './models/team';

@Injectable()
export class TeamsService {
  async list(inputs: { userId?: number } = {}): Promise<Team[]> {
    return [];
  }
}
