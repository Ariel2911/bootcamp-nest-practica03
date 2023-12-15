import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/types/User';

@Injectable()
export class AuthService {
  testUser: User;
  constructor(private jwtService: JwtService) {
    this.testUser = {
      id: 1,
      name: 'ariel',
      password: 'test',
    };
  }

  validateUser(username: string, password: string): any {
    if (
      this.testUser.name === username &&
      this.testUser.password === password
    ) {
      return { userId: this.testUser.id, username: this.testUser.name };
    }
    return null;
  }

  login(user: User) {
    const payload = {
      username: user.name,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
