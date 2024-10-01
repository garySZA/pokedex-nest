import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration, JoiValidationSchema } from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [EnvConfiguration],
            validationSchema: JoiValidationSchema,
        }),

        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),

        MongooseModule.forRoot(process.env.MONGO_URI, {
            dbName: process.env.DATABASE_NAME,
        }),

        PokemonModule,

        CommonModule,

        SeedModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
