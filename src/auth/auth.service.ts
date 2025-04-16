import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // This service handles authentication-related logic.
  // It can include methods for user registration, login, and token management.
  // Each method in this service corresponds to a specific authentication task.

  signin(username: string, password: string): string {
    // This method handles user login.
    // It takes a username and password as input and returns a token or user information.

    return `User ${username} logged in successfully!`;
  }

  signup(username: string, password: string): string {
    // This method handles user registration.
    // It takes a username and password as input and returns a success message or user information.

    return `User ${username} registered successfully!`;
  }
}
