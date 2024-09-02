import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { FormatsService } from './formats.service';

@Controller('formats')
export class FormatsController {
  constructor(private formatsService: FormatsService) {}

  @Get()
  findAll() {
    return this.formatsService.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.formatsService.create(name);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.formatsService.delete(id);
  }
}
