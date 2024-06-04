import { faker } from '@faker-js/faker';
import { IUserProperties } from '../../entities/user.entity';

export function UserDataBuilder(): { build: () => IUserProperties } {
  return {
    build: () => {
      return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
      };
    },
  };
}
