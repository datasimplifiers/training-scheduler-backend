import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  create(name: string): Promise<Category> {
    const category = this.categoriesRepository.create({ name });
    return this.categoriesRepository.save(category);
  }

  delete(id: number): Promise<void> {
    return this.categoriesRepository.delete(id).then(() => undefined);
  }
}
