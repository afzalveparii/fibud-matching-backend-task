import { Controller, Get, Post, Body, Query, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';

@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  async createMatch(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.createMatch(createMatchDto);
  }

  @Get()
  async getMatches(
    @Query('specialization') specialization?: string,
    @Query('rating') rating?: number,
  ) {
    return this.matchService.getMatches(specialization, rating);
  }

  @Put(':id')
  async updateMatch(@Param('id') id: string, @Body() updateMatchDto: CreateMatchDto) {
    try {
      return await this.matchService.updateMatch(id, updateMatchDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteMatch(@Param('id') id: string) {
    try {
      return await this.matchService.deleteMatch(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
