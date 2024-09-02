import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './topics.entity';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { Category } from '../categories/categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Topic, Category])],
  providers: [TopicsService],
  controllers: [TopicsController],
})
export class TopicsModule {}
