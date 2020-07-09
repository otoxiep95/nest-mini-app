import { IsDefined, MaxLength } from 'class-validator';

export class CreateVoteDto {
  @IsDefined()
  @MaxLength(100)
  vote: string;
}
