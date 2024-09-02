import { Controller, Get, Post, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { TrainingsService } from './trainings.service';

@Controller('trainings')
export class TrainingsController {
  constructor(private trainingsService: TrainingsService) {}

  @Get()
  findAll() {
    return this.trainingsService.findAll();
  }

  @Post()
  async create(@Body() trainingData: any) {
    const overlap = await this.trainingsService.checkOverlap(
      trainingData.trainer.id,
      trainingData.startTime,
      trainingData.endTime,
    );
    if (overlap) {
      throw new BadRequestException('Training time overlaps with another session for this trainer');
    }
    return this.trainingsService.create(trainingData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.trainingsService.delete(id);
  }
}
