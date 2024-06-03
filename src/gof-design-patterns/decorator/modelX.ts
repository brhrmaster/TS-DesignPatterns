import { Car } from './car';

class ModelX extends Car {
  readonly costValue = 77000;

  constructor() {
    super();
    this.description = 'Model X';
  }

  public override cost() {
    return this.costValue;
  }
}

export { ModelX };
