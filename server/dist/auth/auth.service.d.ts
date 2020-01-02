import { UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users//user.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(userData: UserEntity): Promise<any>;
    login(user: UserEntity): Promise<UnauthorizedException | {
        token_type: string;
        expires_in: string;
        access_token: string;
        scope: string;
        status: number;
    }>;
    register(user: UserEntity): Promise<any>;
    getAllUsers(): Promise<any>;
}
