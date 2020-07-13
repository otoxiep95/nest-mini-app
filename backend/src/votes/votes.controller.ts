import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { Vote } from './vote.entity';
import { VotesService } from './votes.service';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  create(@Body() newVote: CreateVoteDto): Promise<Vote> {
    return this.votesService.create(newVote);
  }

  @Get()
  findAll(): Promise<Vote[]> {
    return this.votesService.findAll();
  }

  @Delete()
  remove(@Body() id: number): Promise<void> {
    return this.votesService.remove(id);
  }
}
