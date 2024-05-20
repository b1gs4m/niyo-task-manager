import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  public description?: string;

  @IsString()
  @IsNotEmpty()
  public status: string;
}
