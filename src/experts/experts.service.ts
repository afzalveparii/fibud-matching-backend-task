import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExpertDto } from './dto/create-expert.dto';

@Injectable()
export class ExpertsService {
  constructor(private readonly prisma: PrismaService) {}

  async createExpert(dto: CreateExpertDto) {
    return this.prisma.expert.create({
      data: {
        name: dto.name,
        specialization: dto.specialization,
        availability: dto.availability ?? true,
        rating: dto.rating ?? 0.0,
      },
    });
  }

  async getAllExperts() {
    return this.prisma.expert.findMany({
      include: { clients: true },
    });
  }

  async getExpertById(id: string) {
    const expert = await this.prisma.expert.findUnique({
      where: { id },
      include: { clients: true },
    });
    if (!expert) {
      throw new NotFoundException(`Expert with ID ${id} not found`);
    }
    return expert;
  }

  async updateExpert(id: string, dto: Partial<CreateExpertDto>) {
    return this.prisma.expert.update({
      where: { id },
      data: dto,
    });
  }

  async deleteExpert(id: string) {
    return this.prisma.expert.delete({
      where: { id },
    });
  }
}
