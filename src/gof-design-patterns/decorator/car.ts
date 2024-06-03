abstract class Car {
  protected description!: string;

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

export { Car };
