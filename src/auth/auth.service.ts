import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  // This service handles authentication-related logic.
  // It can include methods for user registration, login, and token management.
  // Each method in this service corresponds to a specific authentication task.

  constructor(private prisma: PrismaService) {}

  signin(body: { email: string; password: string }): string {
    return `User logged in successfully!`;
  }

  signup(body: { name: string; email: string; password: string }): string {
    return `User registered successfully!`;
  }
}
