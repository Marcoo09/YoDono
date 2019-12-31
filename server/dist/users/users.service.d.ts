import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    create(user: UserEntity): Promise<UserEntity>;
}
