import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { <%= classify(name) %>ApplicationModule } from '<%= dasherize(prefix) %>/<%= dasherize(name) %>/application';

import { <%= classify(name) %>Facade } from './service/<%= dasherize(name) %>.facade';
import { <%= classify(name) %>Controller } from './controller/<%= dasherize(name) %>.controller';

@Module({
  controllers: [<%= classify(name) %>Controller],
  imports: [CqrsModule, <%= classify(name) %>ApplicationModule],
  providers: [<%= classify(name) %>Facade],
  exports: [<%= classify(name) %>Facade],
})
export class <%= classify(name) %>InfrastructureModule {}
