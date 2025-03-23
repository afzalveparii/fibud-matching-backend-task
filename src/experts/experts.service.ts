import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExpertDto } from './dto/create-expert.dto';

@Injectable()
export class ExpertsService {
  constructor(private readonly prisma: PrismaService) {}

  async createExpert(dto: CreateExpertDto) {
    try {
      if (!dto.name || !dto.specialization) {
        throw new BadRequestException("Expert name and specialization are required.");
      }

      const existingExpert = await this.prisma.expert.findFirst({
        where: { name: dto.name },
      });

      if (existingExpert) {
        throw new ConflictException(
          `An expert with the name "${dto.name}" already exists in the system.`
        );
      }

      return await this.prisma.expert.create({
        data: {
          name: dto.name,
          specialization: dto.specialization,
          availability: dto.availability ?? true,
          rating: dto.rating ?? 0.0,
        },
      });
    } catch (error) {
      console.error("❌ Create Expert Error:", error.message);
      throw error;
    }
  }

  async getAllExperts() {
    try {
      return await this.prisma.expert.findMany({
        include: { clients: true },
      });
    } catch (error) {
      console.error("❌ Get All Experts Error:", error.message);
      throw error;
    }
  }

  async getExpertById(id: string) {
    try {
      const expert = await this.prisma.expert.findUnique({
        where: { id },
        include: { clients: true },
      });
      if (!expert) {
        throw new NotFoundException(`Expert with ID ${id} not found.`);
      }
      return expert;
    } catch (error) {
      console.error("❌ Get Expert By ID Error:", error.message);
      throw error;
    }
  }

  async updateExpert(id: string, dto: Partial<CreateExpertDto>) {
    try {
      const expert = await this.prisma.expert.findUnique({ where: { id } });
      if (!expert) {
        throw new NotFoundException(`Expert with ID ${id} not found.`);
      }

      return await this.prisma.expert.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      console.error("❌ Update Expert Error:", error.message);
      throw error;
    }
  }

  async deleteExpert(id: string) {
    try {
      const expert = await this.prisma.expert.findUnique({ where: { id } });
      if (!expert) {
        throw new NotFoundException(`Expert with ID ${id} not found.`);
      }

      return await this.prisma.expert.delete({
        where: { id },
      });
    } catch (error) {
      console.error("❌ Delete Expert Error:", error.message);
      throw error;
    }
  }
}

