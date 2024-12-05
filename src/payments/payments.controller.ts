import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentSessionDto } from './dto/payment-session.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payments-session')
  createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  success() {
    return 'Payment successful';
  }

  @Get('cancel')
  cancel() {
    return 'Payment cancelled';
  }

  @Post('webhook')
  async stripeWebhook() {
    return '';
  }
}
