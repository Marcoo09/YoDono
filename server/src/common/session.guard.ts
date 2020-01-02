import {CanActivate, ExecutionContext} from '@nestjs/common';
import {AppErrorTypeEnum} from './error/AppErrorTypeEnum';
import {AppError} from './error/AppError';

export class SessionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    try {
      if (request.session.passport.user) {
        return true;
      }
    } catch (e) {
      throw new AppError(AppErrorTypeEnum.NOT_IN_SESSION);
    }
  }
}
