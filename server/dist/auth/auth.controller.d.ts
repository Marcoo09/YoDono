import { AuthService } from './auth.service';
import { UserEntity } from 'src/users/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userCredentials: any): Promise<import("@nestjs/common").UnauthorizedException | {
        token_type: string;
        expires_in: string;
        access_token: string;
        scope: string;
        status: number;
    }>;
    register(user: UserEntity): Promise<any>;
}
