import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { UserEntity } from '../users//user.entity';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(userData: UserEntity): Promise<any>;
}
export {};
