import { Car } from './car';

class ModelS extends Car {
  readonly costValue = 73000;

  constructor() {
    super();
    this.description = 'Model S';
  }

  public override cost(): number {
    return this.costValue;
  }
}

export { ModelS };
