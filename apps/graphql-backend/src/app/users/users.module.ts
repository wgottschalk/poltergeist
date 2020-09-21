import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ServiceModule } from '../services/service.module';
import { UsersResolver } from './users.resolvers';
import { UsersService } from './users.service';

@Module({
  imports: [ServiceModule, PrismaModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
