import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/types/User';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'PALABRASECRETA',
    });
  }

  validate(payload: User) {
    const user = { userId: payload.id, username: payload.name };
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
