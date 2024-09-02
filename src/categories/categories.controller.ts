import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.categoriesService.create(name);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
