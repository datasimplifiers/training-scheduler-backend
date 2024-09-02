import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Training } from './trainings.entity';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { User } from '../users/users.entity';
import { Format } from '../formats/formats.entity';
import { Category } from '../categories/categories.entity';
import { Topic } from '../topics/topics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Training, User, Format, Category, Topic])],
  providers: [TrainingsService],
  controllers: [TrainingsController],
})
export class TrainingsModule {}
