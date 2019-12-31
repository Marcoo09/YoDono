import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UserEntity } from './users/user.entity';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() userCredentials: any) {
    return this.authService.login(userCredentials);
  }

  @Post('auth/register')
  async register(@Body() user: UserEntity): Promise<any> {
    return this.authService.register(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('users')
  index(): Promise<UserEntity[]> {
    return this.authService.getAllUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
