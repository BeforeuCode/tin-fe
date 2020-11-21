import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { prepareRequiredFieldsValidation } from '../../../../_Components/Forms/form-utils';
import { FormMassage } from '../../../../_Components/Forms/FormMessage';
import styled from '@emotion/styled';
import { TinInput } from '../../../../_Components/TinInput';
import { FieldErrorMessage } from '../../../../_Components/Forms/FormErrorMessage';
import { TinButton } from '../../../../_Components/TinButton';
import { login } from '../../../../_State/thunks';

const StyledFormErrorMessage = styled(FormMassage)`
  margin: 0.5rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  .tin-input:nth-of-type(2) {
    margin-top: 2rem;
  }
`;

const StyledButton = styled(TinButton)``;

const StyledInput = styled(TinInput)``;

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const REQUIRED_FIELDS = ['email', 'password'];

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState('');
  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    t('errors.reqField')
  );

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={({ password, email }) => {
        dispatch(
          login(
            {
              password,
              email,
            },
            () => {
              const { state }: any = location;
              if (state && state.from && state.from.pathname !== '/') {
                history.replace(state.from);
              } else {
                history.push('/home/games');
              }
            },
            () => setError(t('auth.login.errors.wrongCredentials'))
          )
        );
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(form) => {
        return requiredFieldsValidation(form);
      }}
    >
      {({ handleChange, errors, submitForm }) => (
        <Form>
          {error && <StyledFormErrorMessage message={error} />}
          <InputContainer>
            <StyledInput
              name="email"
              label={t('auth.login.email')}
              placeholder={t('auth.login.emailPlaceholder')}
              className="tin-input"
              onChange={handleChange}
            />
            {errors.email && <FieldErrorMessage message={errors.email} />}
            <StyledInput
              name="password"
              type="password"
              label={t('auth.login.password')}
              placeholder={t('auth.login.passwordPlaceholder')}
              className="tin-input"
              onChange={handleChange}
            />
            {errors.password && <FieldErrorMessage message={errors.password} />}
            <StyledButton
              label={t('auth.login.button')}
              inputType="submit"
              variant={'white'}
              onClick={submitForm}
            />
          </InputContainer>
        </Form>
      )}
    </Formik>
  );
};
