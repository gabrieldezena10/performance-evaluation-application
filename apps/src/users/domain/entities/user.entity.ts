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
}
