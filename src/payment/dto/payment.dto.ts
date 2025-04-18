import { IsNumber, IsPositive, IsString } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  currency: string;
}
