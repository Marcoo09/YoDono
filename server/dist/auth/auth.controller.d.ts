import { AuthService } from './auth.service';
import { UserEntity } from 'src/users/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userCredentials: any): Promise<import("@nestjs/common").UnauthorizedException | {
        access_token: string;
        status: number;
    }>;
    register(user: UserEntity): Promise<any>;
}
