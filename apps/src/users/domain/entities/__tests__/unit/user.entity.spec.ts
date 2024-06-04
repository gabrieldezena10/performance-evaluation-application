import { faker } from '@faker-js/faker';
import { IUserProperties, UserEntity } from '../../user.entity';
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';
describe('User entity unit tests', () => {
  let userProperties: IUserProperties;
  let user: UserEntity;

  beforeEach(() => {
    jest.clearAllMocks();
    userProperties = UserDataBuilder().build();

    user = new UserEntity(userProperties);
  });
  it('Constructor method', () => {
    expect(user.properties.name).toBe(userProperties.name);
    expect(user.properties.email).toBe(userProperties.email);
    expect(user.properties.password).toBe(userProperties.password);
    expect(user.properties.createdAt).toBeInstanceOf(Date);
  });

  it('Get name method', () => {
    expect(user.name).toBe(userProperties.name);
    expect(typeof user.name).toBe('string');
  });

  it('Get email method', () => {
    expect(user.email).toBe(userProperties.email);
    expect(typeof user.email).toBe('string');
  });

  it('Get password method', () => {
    expect(user.password).toBe(userProperties.password);
    expect(typeof user.password).toBe('string');
  });

  it('Get createdAt method', () => {
    expect(user.createdAt).toBe(userProperties.createdAt);
    expect(user.createdAt).toBeInstanceOf(Date);
  });
});
