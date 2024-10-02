import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '../../user.validator';

let sut: UserValidator;
describe('[unit] User Validator tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create();
  });
  describe('Name field', () => {
    it('should validate with errors', () => {
      let isValid = sut.validate({
        name: null,
        password: '123456',
        email: 'email@example.com',
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder().build(),
        name: '',
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual(['name should not be empty']);

      isValid = sut.validate({
        ...UserDataBuilder().build(),
        name: 12345 as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder().build(),
        name: 'a'.repeat(256),
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ]);
    });

    it('should validate with success', () => {
      const userData = UserDataBuilder().build();
      const isValid = sut.validate(userData);

      expect(isValid).toBeTruthy();
      expect(sut.validatedData).toEqual(new UserRules(userData));
    });
  });

  describe('Email field', () => {
    it('should validate with errors', () => {
      const isValid = sut.validate({
        name: 'Name',
        password: '123456',
        email: null,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be a string',
        'email must be an email',
      ]);
    });
  });

  describe('Password field', () => {
    it('should validate with errors', () => {
      const isValid = sut.validate({
        name: 'Name',
        password: null,
        email: 'email.com',
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);
    });
  });
});
