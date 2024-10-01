import { Entity } from '@/shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type IUserProperties = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity extends Entity<IUserProperties> {
  constructor(
    public readonly properties: IUserProperties,
    id?: string,
  ) {
    UserEntity.validate(properties);
    super(properties, id);
    this.properties.createdAt = this.properties.createdAt ?? new Date();
  }

  updateName(value: string): void {
    UserEntity.validate({ ...this.properties, name: value });
    this.name = value;
  }

  updatePassword(value: string): void {
    UserEntity.validate({ ...this.properties, password: value });
    this.password = value;
  }

  get name(): string {
    return this.properties.name;
  }

  private set name(value: string) {
    this.properties.name = value;
  }

  get email(): string {
    return this.properties.email;
  }

  get password(): string {
    return this.properties.password;
  }

  private set password(value: string) {
    this.properties.password = value;
  }

  get createdAt(): Date {
    return this.properties.createdAt;
  }

  static validate(props: IUserProperties) {
    const validator = UserValidatorFactory.create();
    validator.validate(props);
  }
}
