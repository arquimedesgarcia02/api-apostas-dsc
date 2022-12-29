import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Aposta{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    time1: string;

    @Column()
    time2: string;

    @Column()
    placar1: number;

    @Column()
    placar2: number;

}