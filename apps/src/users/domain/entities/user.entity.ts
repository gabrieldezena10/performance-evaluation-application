export type IUserProperties = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly properties: IUserProperties) {
    this.properties.createdAt = this.properties.createdAt ?? new Date();
  }
  get name(): string {
    return this.properties.name;
  }

  get email(): string {
    return this.properties.email;
  }

  get password(): string {
    return this.properties.password;
  }

  get createdAt(): Date {
    return this.properties.createdAt;
  }
}
