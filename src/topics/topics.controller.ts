import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {
  constructor(private topicsService: TopicsService) {}

  @Get()
  findAll() {
    return this.topicsService.findAll();
  }

  @Post()
  create(@Body('name') name: string, @Body('categoryId') categoryId: number) {
    return this.topicsService.create(name, categoryId);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.topicsService.delete(id);
  }
}
