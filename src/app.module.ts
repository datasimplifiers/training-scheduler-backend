import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TrainingsModule } from './trainings/trainings.module';
import { FormatsModule } from './formats/formats.module';
import { CategoriesModule } from './categories/categories.module';
import { TopicsModule } from './topics/topics.module';
import { AuthModule } from './auth/auth.module';

const isMongoDb = process.env.DB_TYPE === 'mongodb';

@Module({
  imports: [
    isMongoDb
      ? MongooseModule.forRoot(process.env.MONGO_URI)
      : TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'database.sqlite',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        }),
    UsersModule,
    TrainingsModule,
    FormatsModule,
    CategoriesModule,
    TopicsModule,
    AuthModule,
  ],
})
export class AppModule {}
