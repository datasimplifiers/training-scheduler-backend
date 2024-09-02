import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Training } from './trainings.entity';

@Injectable()
export class TrainingsService {
  constructor(
    @InjectRepository(Training)
    private trainingsRepository: Repository<Training>,
  ) {}

  findAll(): Promise<Training[]> {
    return this.trainingsRepository.find({ relations: ['trainer', 'format', 'category', 'topic'] });
  }

  async create(trainingData: any): Promise<Training> {
    const training = this.trainingsRepository.create(trainingData);
    return await this.trainingsRepository.save(training as any); // Use 'as any' to avoid array inference
  }

  delete(id: number): Promise<void> {
    return this.trainingsRepository.delete(id).then(() => undefined);
  }

  checkOverlap(trainerId: number, startTime: Date, endTime: Date): Promise<boolean> {
    return this.trainingsRepository
      .createQueryBuilder('training')
      .where('training.trainerId = :trainerId', { trainerId })
      .andWhere(
        '(training.startTime < :endTime AND training.endTime > :startTime)',
        { startTime, endTime },
      )
      .getCount()
      .then((count) => count > 0);
  }
}
