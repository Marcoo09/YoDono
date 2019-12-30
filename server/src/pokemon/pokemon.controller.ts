import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { PokemonService } from './pokemon.service';
import { PokemonEntity } from './pokemon.entity';
@Crud({
  model: {
    type: PokemonEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('pokemon')
export class PokemonController {
  constructor(public service: PokemonService) {}
}
