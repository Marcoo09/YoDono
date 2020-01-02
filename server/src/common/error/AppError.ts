import {AppErrorTypeEnum} from './AppErrorTypeEnum';
import {HttpStatus} from '@nestjs/common';
import {IErrorMessage} from './IErrorMessage';

export class AppError extends Error {
  public errorCode: AppErrorTypeEnum;
  public httpStatus: number;
  public errorMessage: string;
  public userMessage: string;
  constructor(errorCode: AppErrorTypeEnum) {
    super();
    const errorMessageConfig: IErrorMessage = this.getError(errorCode);
    if (!errorMessageConfig) {
      throw new Error('Unable to find message code error.');
    }
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.httpStatus = errorMessageConfig.httpStatus;
    this.errorCode = errorCode;
    this.errorMessage = errorMessageConfig.errorMessage;
    this.userMessage = errorMessageConfig.userMessage;
  }
  private getError(errorCode: AppErrorTypeEnum): IErrorMessage {
    let res: IErrorMessage;
    switch (errorCode) {
      case AppErrorTypeEnum.NOT_IN_SESSION:
        res = {
          type: AppErrorTypeEnum.NOT_IN_SESSION,
          httpStatus: HttpStatus.UNAUTHORIZED,
          errorMessage: 'No Session',
          userMessage: 'Session Expired',
        };
        break;
    }
    return res;
  }
}
