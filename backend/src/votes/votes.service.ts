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

  create(CreateVoteDto: CreateVoteDto): Promise<Vote> {
    const vote = new Vote();
    vote.vote = CreateVoteDto.vote;

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
