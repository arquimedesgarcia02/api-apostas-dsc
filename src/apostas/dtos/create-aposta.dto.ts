import { IsInt, IsNotEmpty, Min,  } from "class-validator";

export class CreateApostaDTO {
    @IsNotEmpty()
    time1: string;

    @IsNotEmpty()
    time2: string;

    @IsNotEmpty()
    @Min(0)
    @IsInt()
    placar1: number;

    @Min(0)
    @IsNotEmpty()
    @IsInt()
    placar2: number;
}