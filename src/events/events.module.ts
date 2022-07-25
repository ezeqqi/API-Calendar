import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventSchema, Event } from './adapters/mongo/event-mongo-model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema}])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
