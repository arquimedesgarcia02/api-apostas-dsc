import { Entity, EntityRepository, Repository } from "typeorm";
import { Aposta } from "./apostas.entity";
import { CreateApostaDTO } from "./dtos/create-aposta.dto";

@EntityRepository(Aposta)
export class ApostasRepository extends Repository<Aposta>{
    
    getAllApostas(){
        return this.createQueryBuilder('aposta').getMany();
    }
    
    getApostaId(id){
        return this.findOne(id);
    }

    createAposta(createApostaDTO: CreateApostaDTO){
        const {time1, time2, placar1, placar2} = createApostaDTO;

        let aposta = this.create({
            time1,
            time2,
            placar1, 
            placar2,

        })
        return this.save(aposta);

    }

    deleteAposta(id){
        //poderia lançar uma excessão pra quando fosse deletada uma aposta que não mais existe...
        return this.delete(id);
    }
}