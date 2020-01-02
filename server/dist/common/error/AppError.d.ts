import { AppErrorTypeEnum } from './AppErrorTypeEnum';
export declare class AppError extends Error {
    errorCode: AppErrorTypeEnum;
    httpStatus: number;
    errorMessage: string;
    userMessage: string;
    constructor(errorCode: AppErrorTypeEnum);
    private getError;
}
