import styled from '@emotion/styled';
import { FormMassage } from '../../../../_Components/Forms/FormMessage';
import { FC, useState } from 'react';
import {
  prepareRequiredFieldsValidation,
  prepareRequiredFormValidation,
} from '../../../../_Components/Forms/form-utils';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Form, Formik } from 'formik';
import { FieldErrorMessage } from '../../../../_Components/Forms/FormErrorMessage';
import { registerUser } from '../../../../_Api/auth';
import { TinInput } from '../../../../_Components/TinInput';
import { TinButton } from '../../../../_Components/TinButton';

const StyledFormErrorMessage = styled(FormMassage)`
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  .tin-input {
    margin-top: 0.5rem;
  }
`;

const Buttons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .tin-button {
    width: 10rem;
  }
`;

const INITIAL_VALUES = {
  email: '',
  password: '',
  name: '',
  nickName: '',
  age: '',
};

const REQUIRED_FIELDS = ['email', 'password', 'name', 'nickName', 'age'];
const requiredFormValidation = prepareRequiredFormValidation(REQUIRED_FIELDS);

export const RegisterForm: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [error, setError] = useState('');
  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    t('errors.reqField')
  );
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(form) => {
        if (requiredFormValidation(form)) {
          registerUser(form).then(
            () => {
              history.push('/auth/register-confirmed');
            },
            (error) => {
              console.log(error);
              history.push('/auth/register-confirmed');
            }
          );
        } else {
          setError(t('errors.reqFields'));
        }
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(form) => {
        const errors = requiredFieldsValidation(form);
        if (form.password && form.password.length < 8) {
          errors.password = t('auth.register.errors.passwordTooShort');
        }
        return errors;
      }}
    >
      {({ handleChange, errors, submitForm }) => (
        <Form>
          {error && <StyledFormErrorMessage message={error} />}
          <InputContainer>
            <TinInput
              name="email"
              label={t('auth.register.email')}
              placeholder={t('auth.register.emailPlaceholder')}
              onChange={handleChange}
              className="plx-input"
            />
            {errors.email && <FieldErrorMessage message={errors.email} />}

            <TinInput
              name="password"
              type="password"
              label={t('auth.register.password')}
              placeholder={t('auth.register.passwordPlaceholder')}
              onChange={handleChange}
              className="plx-input"
            />
            {errors.password && <FieldErrorMessage message={errors.password} />}

            <TinInput
              name="name"
              label={t('auth.register.name')}
              placeholder={t('auth.register.namePlaceholder')}
              onChange={handleChange}
              className="plx-input"
            />
            {errors.name && <FieldErrorMessage message={errors.name} />}

            <TinInput
              name="nickName"
              label={t('auth.register.nickName')}
              placeholder={t('auth.register.nickNamePlaceholder')}
              onChange={handleChange}
              className="plx-input"
            />
            {errors.nickName && <FieldErrorMessage message={errors.nickName} />}

            <TinInput
              name="age"
              label={t('auth.register.age')}
              placeholder={t('auth.register.agePlaceholder')}
              onChange={handleChange}
              className="plx-input"
            />
            {errors.age && <FieldErrorMessage message={errors.age} />}

            <TinButton
              label={t('auth.register.singUp')}
              onClick={submitForm}
              variant="white"
            />
          </InputContainer>
        </Form>
      )}
    </Formik>
  );
};
