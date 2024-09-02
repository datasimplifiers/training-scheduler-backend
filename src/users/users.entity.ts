import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Format } from '../formats/formats.entity';
import { Category } from '../categories/categories.entity';
import { Topic } from '../topics/topics.entity';
import { Role } from '../auth/roles.enum';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })  // Ensure username is unique
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column('simple-array')
  roles: Role[];

  @ManyToMany(() => Format)
  @JoinTable()
  formats: Format[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => Topic)
  @JoinTable()
  topics: Topic[];
}
