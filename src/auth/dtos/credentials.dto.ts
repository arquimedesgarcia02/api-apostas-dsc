import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CredentialsDTO {
    @IsString()
    @MinLength(3)
    @MaxLength(25)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(100)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {message: "Sua senha precisa ter pelo menos 8 caracteres, uma letra e um número!"})
    password: string;
}