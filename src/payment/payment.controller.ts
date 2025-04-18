import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentDto } from './dto';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(
    private paymentService: PaymentService,
    private prisma: PrismaService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('checkout')
  async checkout(@Request() req, @Body() dto: PaymentDto) {
    const userEmail = req.user.email;

    const user = await this.prisma.user.findUnique({
      where: { email: userEmail },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return this.paymentService.checkout(user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('history')
  async getTransactionHistory(@Request() req) {
    const userEmail = req.user.email;

    const user = await this.prisma.user.findUnique({
      where: { email: userEmail },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return this.paymentService.getTransactionHistory(user.id);
  }
}
