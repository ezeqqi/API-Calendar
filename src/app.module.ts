import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configFile from './config-file';
import { EventsModule } from './events/events.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configFile],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongo'),
        loggerlevel: 'debug',
      }),
      inject: [ConfigService]
    }),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
