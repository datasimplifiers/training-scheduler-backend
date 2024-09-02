import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Format } from './formats.entity';

@Injectable()
export class FormatsService {
  constructor(
    @InjectRepository(Format)
    private formatsRepository: Repository<Format>,
  ) {}

  findAll(): Promise<Format[]> {
    return this.formatsRepository.find();
  }

  create(name: string): Promise<Format> {
    const format = this.formatsRepository.create({ name });
    return this.formatsRepository.save(format);
  }

  delete(id: number): Promise<void> {
    return this.formatsRepository.delete(id).then(() => undefined);
  }
}
