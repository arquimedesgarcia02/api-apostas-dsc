import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ApostasController } from './apostas.controller';
import { ApostasRepository } from './apostas.repository';
import { ApostasService } from './apostas.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ApostasRepository]),
    AuthModule
    
  ],
  controllers: [ApostasController],
  providers: [ApostasService]
})
export class ApostasModule {}
