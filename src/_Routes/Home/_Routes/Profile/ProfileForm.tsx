import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import {
  prepareRequiredFieldsValidation,
  prepareRequiredFormValidation,
} from '../../../../_Components/Forms/form-utils';
import { useFormik } from 'formik';
import { TinInput } from '../../../../_Components/TinInput';
import { FieldErrorMessage } from '../../../../_Components/Forms/FormErrorMessage';
import styled from '@emotion/styled';
import { TinButton } from '../../../../_Components/TinButton';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 5rem;
`;

const INITIAL_VALUES = {
  email: 'joe.doe@gmail.com',
  password: '',
  name: 'Joe Doe',
  nickName: 'DoeDoe11',
  age: '21',
};

const REQUIRED_FIELDS = ['email', 'password', 'name', 'nickName', 'age'];

const requiredFormValidation = prepareRequiredFormValidation(REQUIRED_FIELDS);

interface IProps {
  onSubmit: (form: any) => void;
  id?: string;
}

export const ProfileForm: FC<IProps> = ({ onSubmit, id }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    if (id) {
      console.log(`fetch data ${id}`);
    }
    // eslint-disable-next-line
  }, [id]);

  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    t('errors.reqField')
  );

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (form) => {
      console.log(formik.values);
      if (requiredFormValidation(form)) {
        onSubmit(form);
      }
    },
    validate: (form) => {
      const errors = requiredFieldsValidation(form);
      if (form.password && form.password.length < 8) {
        errors.password = t('auth.register.errors.passwordTooShort');
      }
      return errors;
    },
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const handleRemove = () => {
    console.log('remove');
  };

  return (
    <Wrapper>
      <TinInput
        name="email"
        label={t('auth.register.email')}
        placeholder={t('auth.register.emailPlaceholder')}
        onChange={formik.handleChange}
        className="plx-input"
        defaultValue={INITIAL_VALUES.email}
      />
      {formik.errors.email && (
        <FieldErrorMessage message={formik.errors.email} />
      )}

      <TinInput
        name="password"
        type="password"
        label={t('auth.register.password')}
        placeholder={t('auth.register.passwordPlaceholder')}
        onChange={formik.handleChange}
        className="plx-input"
        defaultValue={INITIAL_VALUES.password}
      />
      {formik.errors.password && (
        <FieldErrorMessage message={formik.errors.password} />
      )}

      <TinInput
        name="name"
        label={t('auth.register.name')}
        placeholder={t('auth.register.namePlaceholder')}
        onChange={formik.handleChange}
        className="plx-input"
        defaultValue={INITIAL_VALUES.name}
      />
      {formik.errors.name && <FieldErrorMessage message={formik.errors.name} />}

      <TinInput
        name="nickName"
        label={t('auth.register.nickName')}
        placeholder={t('auth.register.nickNamePlaceholder')}
        onChange={formik.handleChange}
        className="plx-input"
        defaultValue={INITIAL_VALUES.nickName}
      />
      {formik.errors.nickName && (
        <FieldErrorMessage message={formik.errors.nickName} />
      )}

      <TinInput
        name="age"
        label={t('auth.register.age')}
        placeholder={t('auth.register.agePlaceholder')}
        onChange={formik.handleChange}
        className="plx-input"
        defaultValue={INITIAL_VALUES.age}
      />
      {formik.errors.age && <FieldErrorMessage message={formik.errors.age} />}
      <ButtonsWrapper>
        <TinButton
          onClick={handleRemove}
          label={t('profile.remove')}
          variant={'flat'}
        />
        <TinButton
          onClick={handleSubmit}
          label={t('profile.save')}
          variant={'white'}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};