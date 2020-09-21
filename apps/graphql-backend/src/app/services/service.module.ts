import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ServiceResolver } from './service.resolver';
import { ServiceService } from './service.service';

@Module({
  imports: [PrismaModule],
  providers: [ServiceResolver, ServiceService],
  exports: [ServiceService],
})
export class ServiceModule {}
