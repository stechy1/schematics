import { Injectable, Logger } from '@nestjs/common';

import { StimLibDomaFacade } from '../service/<%= dasherize(name) %>.facade';

@Injectable()
export class <%= classify(name) %>Controller {
  private readonly logger = new Logger(<%= classify(name) %>Controller.name);

  constructor(private readonly facade: <%= classify(name) %>Facade) {}
}
