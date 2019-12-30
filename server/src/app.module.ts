import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
