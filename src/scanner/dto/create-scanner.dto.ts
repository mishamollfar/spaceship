import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ScannerType } from '../types/scanner-type';

export class CreateScannerDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  vendor: string;

  @IsEnum(ScannerType)
  @IsOptional()
  type: ScannerType;

  @IsString()
  @IsOptional()
  weight: number;

  @IsNumber()
  @IsOptional()
  price: number;
}
