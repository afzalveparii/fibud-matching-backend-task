import { IsString, IsUUID, IsBoolean, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateExpertDto {

  @IsString()
  name: string;

  @IsString()
  specialization: string;

  @IsOptional()
  @IsBoolean()
  availability?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  rating?: number;
}
