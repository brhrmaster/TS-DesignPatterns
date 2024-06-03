import { Car } from './car';

abstract class CarOptions {
  decoratedCar: Car;

  public abstract getDescription(): string;

  public abstract cost(): number;
}

export { CarOptions };
