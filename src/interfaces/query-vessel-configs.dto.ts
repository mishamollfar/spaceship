import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class QueryVesselConfigsDto {
  @IsNumber()
  @Type(() => Number)
  max_price: number;

  @IsNumber()
  @Type(() => Number)
  journey_distance: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  weight?: number;
}
