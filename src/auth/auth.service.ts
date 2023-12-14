import { Injectable } from '@nestjs/common';
import { User } from 'src/types/User';

@Injectable()
export class AuthServices {
  testUser: User;
  constructor() {
    this.testUser = {
      id: 1,
      name: 'ariel',
      password: 'test',
    };
  }

  validateUser(username: string, password: string): any {
    if (
      this.testUser?.name === username &&
      this.testUser?.password === password
    ) {
      return { userId: this.testUser.id, username: this.testUser.name };
    }

    return null;
  }
}
