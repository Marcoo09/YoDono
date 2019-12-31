import { AuthService } from './auth/auth.service';
import { UserEntity } from './users/user.entity';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userCredentials: any): Promise<import("@nestjs/common").UnauthorizedException | {
        access_token: string;
        status: number;
    }>;
    register(user: UserEntity): Promise<any>;
    index(): Promise<UserEntity[]>;
    getProfile(req: any): any;
}
