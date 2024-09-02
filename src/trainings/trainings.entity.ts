import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';
import { Format } from '../formats/formats.entity';
import { Category } from '../categories/categories.entity';
import { Topic } from '../topics/topics.entity';

@Entity()
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.id)
  trainer: User;

  @ManyToOne(() => Format, (format) => format.id)
  format: Format;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @ManyToOne(() => Topic, (topic) => topic.id)
  topic: Topic;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  timeZone: string;
}
