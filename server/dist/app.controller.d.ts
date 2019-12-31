import { AuthService } from './auth/auth.service';
import { UserEntity } from './users/user.entity';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    index(): Promise<UserEntity[]>;
    getProfile(req: any): any;
}
