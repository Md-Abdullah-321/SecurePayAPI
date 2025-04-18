import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentDto } from './dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async checkout(userId: string, dto: PaymentDto) {
    const simulatedPaymentId = Math.floor(Math.random() * 1000000).toString();

    const transaction = await this.prisma.transaction.create({
      data: {
        userId,
        amount: dto.amount,
        currency: dto.currency,
        paymentId: simulatedPaymentId,
        status: 'succeeded',
      },
    });

    return {
      message: 'Simulated payment successful',
      transaction,
    };
  }

  async getTransactionHistory(userId: string) {
    const transactions = await this.prisma.transaction.findMany({
      where: { userId },
    });

    return transactions;
  }
}
