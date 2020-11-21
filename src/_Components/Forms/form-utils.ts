interface IFormErrors {
  [fieldName: string]: string;
}

export const prepareRequiredFieldsValidation = (
  requiredProps: string[],
  message: string
) => (form: any) => {
  return requiredProps.reduce((errors, prop) => {
    // NOTE: we treat undefined as not touch
    if (!form[prop]) {
      errors[prop] = message;
    }
    return errors;
  }, {} as IFormErrors);
};

export const prepareRequiredFormValidation = (requiredProps: string[]) => (
  form: any
) => {
  return !requiredProps.some((prop) => !form[prop]);
};
