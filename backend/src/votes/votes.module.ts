import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './vote.entity';
import { VotesController } from './votes.controller';
import { VotesService } from './votes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vote])],
  providers: [VotesService],
  controllers: [VotesController],
})
export class VotesModule {}
