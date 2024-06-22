export type FieldErrors = {
  [field: string]: string[];
};

export interface IValidatorFields<PropsValidated> {
  errors: FieldErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
