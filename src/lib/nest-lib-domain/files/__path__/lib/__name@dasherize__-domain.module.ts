import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ENTITIES } from './model/entity';
import { REPOSITORIES } from './repository';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature(ENTITIES)],
  providers: [...REPOSITORIES],
  exports: [...REPOSITORIES],
})
export class <%= classify(name) %>DomainModule {}
