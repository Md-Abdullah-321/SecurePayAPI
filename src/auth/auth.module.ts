import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
// This module is responsible for authentication-related functionality.
// It imports necessary modules, controllers, and providers related to authentication.
// It can include user registration, login, JWT token generation, and validation.
