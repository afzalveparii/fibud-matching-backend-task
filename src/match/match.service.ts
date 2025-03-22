import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMatchDto } from "./dto/create-match.dto";

@Injectable()
export class MatchService {
  constructor(private readonly prisma: PrismaService) {}

  async createMatch(dto: CreateMatchDto) {
    try {
      if (!dto.clientName || !dto.expertId) {
        throw new BadRequestException("Client name and expertId are required.");
      }
      const expert = await this.prisma.expert.findUnique({
        where: { id: dto.expertId },
      });

      if (!expert) {
        throw new NotFoundException(`Expert with ID ${dto.expertId} not found.`);
      }

      return await this.prisma.client.create({
        data: {
          name: dto.clientName,
          expert: { connect: { id: dto.expertId } },
        },
      });
    } catch (error) {
      console.error("❌ Create Match Error:", error.message);
      throw error;
    }
  }

  async getMatches(specialization?: string, rating?: number) {
    try {

      if (rating && (isNaN(rating) || rating < 0 || rating > 5)) {
        throw new BadRequestException("Rating must be a number between 0 and 5.");
      }

      return await this.prisma.expert.findMany({
        where: {
          specialization: specialization || undefined,
          rating: rating ? { gte: rating } : undefined,
        },
        include: { clients: true },
      });
    } catch (error) {
      console.error("❌ Get Matches Error:", error.message);
      throw error;
    }
  }

  async updateMatch(id: string, dto: CreateMatchDto) {
    try {
      if (!dto.clientName || !dto.expertId) {
        throw new BadRequestException("Client name and expertId are required.");
      }

      const match = await this.prisma.client.findUnique({ where: { id } });
      if (!match) {
        throw new NotFoundException(`Match with ID ${id} not found.`);
      }

      const expert = await this.prisma.expert.findUnique({
        where: { id: dto.expertId },
      });
      if (!expert) {
        throw new NotFoundException(`Expert with ID ${dto.expertId} not found.`);
      }

      return await this.prisma.client.update({
        where: { id },
        data: {
          name: dto.clientName,
          expert: { connect: { id: dto.expertId } },
        },
      });
    } catch (error) {
      console.error("❌ Update Match Error:", error.message);
      throw error;
    }
  }

  async deleteMatch(id: string) {
    try {
      const match = await this.prisma.client.findUnique({ where: { id } });
      if (!match) {
        throw new NotFoundException(`Match with ID ${id} not found.`);
      }

      return await this.prisma.client.delete({ where: { id } });
    } catch (error) {
      console.error("❌ Delete Match Error:", error.message);
      throw error;
    }
  }
}
