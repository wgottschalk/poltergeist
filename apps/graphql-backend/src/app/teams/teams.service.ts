import { Injectable } from '@nestjs/common';
import { Team } from './models/team';

@Injectable()
export class TeamsService {
  private readonly teams: Team[] = [
    {
      name: 'A-Team',
      mailingGroup: 'a-team@snapchat.com',
      members: [
        {
          id: '1',
          name: 'Will',
          githubName: 'wgottschalk',
          email: 'wgottshcalk@snapchat.com',
          teams: [],
        },
      ],
    },

    {
      name: 'Slytherin',
      mailingGroup: 'slytherin@snapchat.com',
      members: [
        {
          id: '5',
          name: 'Draco',
          githubName: 'dmalfloy',
          email: 'dmalfloy@snapchat.com',
          teams: [],
        },
      ],
    },

    {
      name: 'Gryffindor',
      mailingGroup: 'gryffindor@snapchat.com',
      members: [
        {
          id: '2',
          name: 'Harry',
          githubName: 'hpotter',
          email: 'hpotter@snapchat.com',
          teams: [],
        },
        {
          id: '3',
          name: 'Ron',
          githubName: 'rweasley',
          email: 'rweasley@snapchat.com',
          teams: [],
        },
        {
          id: '4',
          name: 'Hermoine',
          githubName: 'hgmagic',
          email: 'hgranger@snapchat.com',
          teams: [],
        },
      ],
    },
  ];

  async list(inputs: { userId?: string } = {}): Promise<Team[]> {
    if (!inputs.userId) return this.teams;

    return this.teams.filter((team) => {
      return team.members.find((member) => member.id == inputs.userId);
    });
  }
}
