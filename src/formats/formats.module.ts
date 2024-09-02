import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Format } from './formats.entity';
import { FormatsService } from './formats.service';
import { FormatsController } from './formats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Format])],
  providers: [FormatsService],
  controllers: [FormatsController],
})
export class FormatsModule {}
