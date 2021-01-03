import { Injectable, Logger } from '@nestjs/common';

import { <%= classify(name) %>Facade } from '../service/<%= dasherize(name) %>.facade';

@Controller()
export class <%= classify(name) %>Controller {
  private readonly logger = new Logger(<%= classify(name) %>Controller.name);

  constructor(private readonly facade: <%= classify(name) %>Facade) {}
}
