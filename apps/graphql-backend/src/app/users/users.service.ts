import { Injectable } from '@nestjs/common';
import { UserCreateInput, UserWhereUniqueInput } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './models/user';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async get(uniqueInputs: UserWhereUniqueInput): Promise<User | undefined> {
    return await this.prisma.user.findOne({ where: uniqueInputs });
  }

  async create(user: UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data: user });
  }
}
