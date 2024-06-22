import { ClassValidatorFields } from '../../class-validator-fields';
import * as libClassValidator from 'class-validator';

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string;
}> {}

describe('ClassValidatorFields', () => {
  it('Should initialize errors and validatedData variables with null', () => {
    const classValidatorInstance = new StubClassValidatorFields();

    expect(classValidatorInstance.errors).toBeNull();
    expect(classValidatorInstance.validatedData).toBeNull();
  });

  it('Should validate with errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([
      {
        property: 'field',
        constraints: { isRequired: 'test error null validation' },
      },
    ]);
    const classValidatorInstance = new StubClassValidatorFields();

    expect(classValidatorInstance.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(classValidatorInstance.validatedData).toBeNull();
    expect(classValidatorInstance.errors).toStrictEqual({
      field: ['test error null validation'],
    });
  });

  it('Should validate with NO errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([]);
    const classValidatorInstance = new StubClassValidatorFields();

    expect(classValidatorInstance.validate({ data: 'null' })).toBeTruthy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(classValidatorInstance.validatedData).toStrictEqual({
      data: 'null',
    });
    expect(classValidatorInstance.errors).toBeNull();
  });
});
