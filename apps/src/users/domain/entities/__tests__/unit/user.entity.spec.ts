import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { IUserProperties, UserEntity } from '../../user.entity';

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

  it('Setter of name field', () => {
    user['name'] = 'other name';
    expect(user.properties.name).toEqual('other name');
    expect(typeof user.properties.name).toBe('string');
  });

  it('Get email method', () => {
    expect(user.email).toBe(userProperties.email);
    expect(typeof user.email).toBe('string');
  });

  it('Get password method', () => {
    expect(user.password).toBe(userProperties.password);
    expect(typeof user.password).toBe('string');
  });

  it('Setter of password field', () => {
    user['password'] = 'new password';
    expect(user.properties.password).toEqual('new password');
    expect(typeof user.properties.password).toBe('string');
  });

  it('Get createdAt method', () => {
    expect(user.createdAt).toBe(userProperties.createdAt);
    expect(user.createdAt).toBeInstanceOf(Date);
  });

  it('Should update a user', () => {
    user.updateName('other name');
    expect(user.properties.name).toEqual('other name');
  });

  it('Should update the password field', () => {
    user.updatePassword('other password');
    expect(user.properties.password).toEqual('other password');
  });
});
