import { faker } from '@faker-js/faker';
import { IUserProperties, UserEntity } from '../../user.entity';
describe('User entity unit tests', () => {
  let userProperties: IUserProperties;
  let user: UserEntity;

  beforeEach(() => {
    jest.clearAllMocks();
    userProperties = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    user = new UserEntity(userProperties);
  });
  it('Constructor method', () => {
    expect(user.properties.name).toBe(userProperties.name);
    expect(user.properties.email).toBe(userProperties.email);
    expect(user.properties.password).toBe(userProperties.password);
    expect(user.properties.createdAt).toBeInstanceOf(Date);
  });
});
