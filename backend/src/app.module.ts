import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_miniapp',
      autoLoadEntities: true,
      synchronize: true,
    }),
    VotesModule,
  ],
})
export class AppModule {}
