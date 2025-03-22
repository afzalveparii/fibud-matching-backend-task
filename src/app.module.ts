/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MatchModule } from './match/match.module';
import { PrismaService } from './prisma/prisma.service';
import { ExpertsModule } from './experts/experts.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads environment variables from .env file
    MatchModule, ExpertsModule, // Importing the Match module
    
  ],
  providers: [PrismaService],
})
export class AppModule {}
