import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CredentialsDTO } from './dtos/credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UsersRepository) private usersRepository: UsersRepository,
        private jwtService: JwtService,
    ){}

    async signUP(credentialsDTO: CredentialsDTO){
        return this.usersRepository.createUser(credentialsDTO);
    }

    async signIN(credentialsDTO: CredentialsDTO){
        const {username, password} = credentialsDTO;
        const user = await this.usersRepository.findOne({username});

        const payload = {username}
        const accessToken: string = this.jwtService.sign(payload) 
        if (user && (await bcrypt.compare(password, user.password))) {
            return {accessToken};
        }else{
            throw new UnauthorizedException("LogIn não autorizado!");

        }

    }

}
