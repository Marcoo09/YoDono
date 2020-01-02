import { ExecutionContext, CanActivate } from '@nestjs/common';
export declare class AuthenticatedGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<true | {
        status: number;
        message: string;
    }>;
}
