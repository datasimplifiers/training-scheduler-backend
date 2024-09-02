import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  findById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(userData: Partial<User>): Promise<User> {
    // Ensure userData is not an array
    if (Array.isArray(userData)) {
      throw new Error('Expected a single user object, but received an array');
    }

    // Create a new user instance
    const user = this.usersRepository.create(userData);

    // Save and return the single user entity, not an array
    const savedUser = await this.usersRepository.save(user);
    
    if (Array.isArray(savedUser)) {
      throw new Error('Expected a single user entity, but received an array');
    }

    return savedUser;
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
