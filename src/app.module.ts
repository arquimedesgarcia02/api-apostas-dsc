import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApostasModule } from './apostas/apostas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres", 
      password: "zico1981",
      database: "api-aposta",
      autoLoadEntities: true,
      synchronize: true,
      
    }),
    ApostasModule, 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
