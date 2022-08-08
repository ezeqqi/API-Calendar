import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
    @Prop({required: true})
    date: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    isHoliday: boolean;

}

export const EventSchema = SchemaFactory.createForClass(Event);

export const EventMongoProvider = MongooseModule.forFeature([
    {
        name: 'EventsMongo',
        collection: 'Events',
        schema: EventSchema,
    }
])