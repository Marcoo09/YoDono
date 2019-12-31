import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PokemonEntity } from './pokemon.entity';
export declare class PokemonService extends TypeOrmCrudService<PokemonEntity> {
    constructor(repo: any);
}
