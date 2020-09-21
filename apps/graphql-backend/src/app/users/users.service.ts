import { Injectable } from '@nestjs/common';
import { User, UserCreateInput, UserWhereUniqueInput } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async get(uniqueInputs: UserWhereUniqueInput): Promise<User | undefined> {
    return await this.prisma.user.findOne({ where: uniqueInputs });
  }

  async create(userInput: UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data: userInput });
  }

  async list(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
