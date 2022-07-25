import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventDocument, Event } from './adapters/mongo/event-mongo-model';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';


@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

  create(createEventDto: CreateEventDto) {
    const event = new this.eventModel(createEventDto)
    return event.save();
  }

  findAll() {
    return this.eventModel.find()
  }

  findOne(id: string) {
    return this.eventModel.findById(id)
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventModel.findByIdAndUpdate(
      {
      _id: id
      },
      {
        $set: updateEventDto,
      },
      {
        new: true,
      }
    )
  }

  remove(id: string) {
    return this.eventModel.deleteOne({
      _id: id,
    }).exec()
  }
}
