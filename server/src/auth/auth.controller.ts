import {Controller, Post, Body, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {UserEntity} from 'src/users/user.entity';
import {AuthGuard} from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userCredentials: any) {
    return this.authService.login(userCredentials);
  }

  @Post('register')
  @UseGuards(AuthGuard('jwt'))
  async register(@Body() user: UserEntity): Promise<any> {
    return this.authService.register(user);
  }
}
