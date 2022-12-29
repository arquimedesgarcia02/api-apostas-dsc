import { Injectable } from '@nestjs/common';
import { ApostasRepository } from './apostas.repository';
import { CreateApostaDTO } from './dtos/create-aposta.dto';

@Injectable()
export class ApostasService {
    constructor(private apostasRepository: ApostasRepository) {}
    
    getAllApostas(){
        return this.apostasRepository.getAllApostas();
    }
    
    getApostaId(id){
        return this.apostasRepository.getApostaId(id);
    }

    createAposta(createApostaDTO: CreateApostaDTO){
        return this.apostasRepository.createAposta(createApostaDTO);
    }

    deleteAposta(id){
        return this.apostasRepository.deleteAposta(id);
    }

}
