import { IsNumber, Min } from 'class-validator';

export class CreateDto {
  @IsNumber()
  @Min(1)
  num: number;
}
