import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDTO } from './dtos/credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    
    @Post('/signup')
    async signUp(@Body() credentialsDTO: CredentialsDTO){
        return this.authService.signUP(credentialsDTO);
    }

    @Post('/signin')
    async signIn(@Body() credentialsDTO: CredentialsDTO){
        return this.authService.signIN(credentialsDTO);
    }
}
