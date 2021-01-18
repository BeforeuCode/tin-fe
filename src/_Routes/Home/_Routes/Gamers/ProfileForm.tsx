import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  prepareRequiredFieldsValidation,
  prepareRequiredFormValidation,
} from '../../../../_Components/Forms/form-utils';
import { useFormik } from 'formik';
import { FieldErrorMessage } from '../../../../_Components/Forms/FormErrorMessage';
import styled from '@emotion/styled';
import { TinButton } from '../../../../_Components/TinButton';
import { ICommonProps } from '../../../../_Types/props';
import { InputSection } from '../Games/_Components/InputSection';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  width: 100%;
`;

const INITIAL_VALUES = {
  email: '',
  name: '',
  nickname: '',
  age: '',
};

const REQUIRED_FIELDS = ['email', 'name', 'nickname', 'age'];

const requiredFormValidation = prepareRequiredFormValidation(REQUIRED_FIELDS);

interface IProps extends ICommonProps {
  onSubmit: (form: any) => void;
  gamerData?: any;
  id?: string;
}

export const ProfileForm: FC<IProps> = ({ onSubmit, className, gamerData }) => {
  const { t } = useTranslation();

  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    t('errors.reqField')
  );

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (form) => {
      if (requiredFormValidation(form)) {
        onSubmit(form);
      }
    },
    validate: (form) => {
      const errors = requiredFieldsValidation(form);
      return errors;
    },
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const fillForm = (form: any) => {
    formik.setValues({
      age: form.age,
      nickname: form.nickname,
      email: form.email,
      name: form.name,
    });
  };

  useEffect(() => {
    if (gamerData) {
      fillForm(gamerData);
    }
  }, [gamerData]);

  return (
    <Wrapper className={className}>
      <InputSection
        fieldName="email"
        title={t('auth.register.email')}
        required
        placeholder={t('auth.register.emailPlaceholder')}
        handleChange={formik.handleChange}
        className="plx-input"
        value={formik.values.email}
      />
      {formik.errors.email && (
        <FieldErrorMessage message={formik.errors.email} />
      )}
      <InputSection
        fieldName="name"
        title={t('auth.register.name')}
        required
        placeholder={t('auth.register.namePlaceholder')}
        handleChange={formik.handleChange}
        className="plx-input"
        value={formik.values.name}
      />
      {formik.errors.name && <FieldErrorMessage message={formik.errors.name} />}
      <InputSection
        fieldName="nickname"
        title={t('auth.register.nickName')}
        required
        placeholder={t('auth.register.nickNamePlaceholder')}
        handleChange={formik.handleChange}
        className="plx-input"
        value={formik.values.nickname}
      />
      {formik.errors.nickname && (
        <FieldErrorMessage message={formik.errors.nickname} />
      )}
      <InputSection
        fieldName="age"
        title={t('auth.register.age')}
        required
        placeholder={t('auth.register.agePlaceholder')}
        handleChange={formik.handleChange}
        className="plx-input"
        value={formik.values.age}
      />
      {formik.errors.age && <FieldErrorMessage message={formik.errors.age} />}
      <ButtonsWrapper>
        <TinButton
          onClick={handleSubmit}
          label={t('profile.save')}
          variant={'white'}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};
