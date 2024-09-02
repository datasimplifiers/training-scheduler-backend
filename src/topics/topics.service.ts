import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from './topics.entity';
import { Category } from '../categories/categories.entity';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic)
    private topicsRepository: Repository<Topic>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Topic[]> {
    return this.topicsRepository.find({ relations: ['category'] });
  }

  create(name: string, categoryId: number): Promise<Topic> {
    return this.categoriesRepository.findOneBy({ id: categoryId }).then((category) => {
      const topic = this.topicsRepository.create({ name, category });
      return this.topicsRepository.save(topic);
    });
  }

  delete(id: number): Promise<void> {
    return this.topicsRepository.delete(id).then(() => undefined);
  }
}
