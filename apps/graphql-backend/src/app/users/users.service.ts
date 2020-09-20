import { Injectable } from '@nestjs/common';
import { User } from './models/user';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'William',
      githubName: 'wgottschalk',
      email: 'wgottschalk@snapchat.com',
      teams: [],
    },
  ];

  get(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
