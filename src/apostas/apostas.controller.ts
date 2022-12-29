import { Body, Controller, Delete, Get, Param, Post, UseGuards,} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApostasService } from './apostas.service';
import { CreateApostaDTO } from './dtos/create-aposta.dto';

@Controller('apostas')
@UseGuards(AuthGuard('jwt'))
export class ApostasController {
    
    constructor(private apostasService: ApostasService){}

    @Get()
    getAllApostas(){
       return this.apostasService.getAllApostas()
    }

    @Get("/:id")
    getApostaId(@Param('id') id){
        return this.apostasService.getApostaId(id);
    }
    
    @Post()
    createAposta(@Body() createApostaDTO: CreateApostaDTO){
        return this.apostasService.createAposta(createApostaDTO);
    }

    @Delete('/:id')
    deleteAposta(@Param('id') id){
        return this.apostasService.deleteAposta(id)
    }

}
