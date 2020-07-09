import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVoteDto } from './dto/create-vote.dto';
import { Vote } from './vote.entity';

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Vote)
    private readonly votesRepository: Repository<Vote>,
  ) {}

  create(newVote: CreateVoteDto): Promise<Vote> {
    const vote = new Vote(newVote.vote);
    return this.votesRepository.save(vote);
  }

  async findAll(): Promise<Vote[]> {
    return this.votesRepository.find();
  }

  //   findOne(id: string): Promise<Vote> {
  //     return this.usersRepository.findOne(id);
  //   }

  //   async remove(id: string): Promise<void> {
  //     await this.usersRepository.delete(id);
  //   }
}
