import { Injectable } from '@nestjs/common';
import { Service, ServiceWhereUniqueInput } from '@prisma/client';
import { ServiceInput } from '../../graphql';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async get(where: ServiceWhereUniqueInput): Promise<Service[]> {
    return await this.prisma.service.findMany({ where });
  }

  async create(userId: string, serviceInput: ServiceInput): Promise<Service> {
    return await this.prisma.service.create({
      data: {
        ...serviceInput,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
