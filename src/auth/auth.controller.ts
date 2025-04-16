import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  // This controller handles authentication-related routes.
  // It can include endpoints for user registration, login, and token management.
  // Each method in this controller corresponds to a specific route.

  constructor(private readonly authService: AuthService) {
    // Constructor can be used to inject services related to authentication.
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signin(
    @Body() dto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = await this.authService.signin(dto);

    res.cookie('access_token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return {
      success: true,
      message: 'Login successful',
    };
  }

  @Post('register')
  singup(@Body() dto: SignUpDto) {
    return this.authService.signup(dto);
  }
}
