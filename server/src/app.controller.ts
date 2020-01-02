import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth/auth.service';
import {UserEntity} from './users/user.entity';
import {SessionGuard} from './common/session.guard';

@Controller()
// @UseGuards(SessionGuard)
export class AppController {
  constructor(private readonly authService: AuthService) {}

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
