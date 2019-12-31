import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users//user.entity';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userData: UserEntity): Promise<any> {
    const user = await this.usersService.findByEmail(userData.email);
    if (user && user.password === userData.password) {
      return user;
    }
    return null;
  }

  async login(user: UserEntity) {
    return this.validateUser(user).then(userData => {
      if (!userData) {
        return new UnauthorizedException();
      }
      const payload = { username: user.email, sub: user.id };
      const accessToken = this.jwtService.sign(payload);

      return {
        access_token: accessToken,
        status: 200,
      };
    });
  }

  public async register(user: UserEntity): Promise<any> {
    return this.usersService.create(user);
  }

  public async getAllUsers(): Promise<any> {
    return this.usersService.findAll();
  }
}
