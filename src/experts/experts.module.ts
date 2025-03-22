import { Module } from '@nestjs/common';
import { ExpertsService } from './experts.service';
import { ExpertsController } from './experts.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ExpertsController],
  providers: [ExpertsService, PrismaService],
})
export class ExpertsModule {}
