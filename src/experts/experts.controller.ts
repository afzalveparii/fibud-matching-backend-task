import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ExpertsService } from './experts.service';
import { CreateExpertDto } from './dto/create-expert.dto';

@Controller('experts')
export class ExpertsController {
  constructor(private readonly expertsService: ExpertsService) {}

  @Post()
  async createExpert(@Body() dto: CreateExpertDto) {
    return this.expertsService.createExpert(dto);
  }

  @Get()
  async getAllExperts() {
    return this.expertsService.getAllExperts();
  }

  @Get(':id')
  async getExpertById(@Param('id') id: string) {
    return this.expertsService.getExpertById(id);
  }

  @Put(':id')
  async updateExpert(@Param('id') id: string, @Body() dto: Partial<CreateExpertDto>) {
    return this.expertsService.updateExpert(id, dto);
  }

  @Delete(':id')
  async deleteExpert(@Param('id') id: string) {
    return this.expertsService.deleteExpert(id);
  }
}
