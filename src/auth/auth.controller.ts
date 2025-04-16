import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // This controller handles authentication-related routes.
  // It can include endpoints for user registration, login, and token management.
  // Each method in this controller corresponds to a specific route.

  constructor(private readonly authService: AuthService) {
    // Constructor can be used to inject services related to authentication.
  }

  @Post('login')
  signin() {
    return this.authService.signin('username', 'password');
    // This method handles user login.
    // It takes a username and password as input and returns success or unsuccess based on credentials.
  }

  @Post('register')
  singup() {
    return this.authService.signup('username', 'password');
    // This method handles user registration.
    // It takes a username and password as input and returns a success message or user information.
  }
}
