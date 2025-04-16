import { Body, Controller, Post } from '@nestjs/common';
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
  signin(@Body() dto: SignInDto) {
    return this.authService.signin(dto);
  }

  @Post('register')
  singup(@Body() dto: SignUpDto) {
    return this.authService.signup(dto);
  }
}
