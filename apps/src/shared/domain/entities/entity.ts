import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T = any> {
  public readonly _id: string;
  public readonly props: T;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id || uuidv4();
  }

  get id(): string {
    return this._id;
  }

  toJSON(): Required<T & { id: string }> {
    return {
      id: this._id,
      ...this.props,
    } as Required<T & { id: string }>;
  }
}
