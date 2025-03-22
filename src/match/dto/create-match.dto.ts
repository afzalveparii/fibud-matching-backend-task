import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsNotEmpty()
  @IsString()
  clientName: string;

  @IsNotEmpty()
  @IsUUID()
  expertId: string;
}
