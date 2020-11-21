import { Injectable, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Injectable()
export class <%= classify(name) %>Facade {
  private readonly logger = new Logger(<%= classify(name) %>Facade.name);

  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}
}
