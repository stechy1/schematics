import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { <%= classify(name) %>DomainModule } from '<%= dasherize(prefix) %>/<%= dasherize(name) %>/domain';

import { <%= classify(name) %>Service } from './service/<%= dasherize(name) %>.service';
import { QueryHandlers } from './query';
import { CommandHandlers } from './command';
import { EventHandlers } from './event';
import { Sagas } from './saga';

@Module({
  imports: [
    CqrsModule,
    <%= classify(name) %>DomainModule
  ],
  providers: [
    <%= classify(name) %>Service,
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
    ...Sagas
  ],
})
export class <%= classify(name) %>ApplicationModule {}
