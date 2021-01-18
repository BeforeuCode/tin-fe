import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { IGameForm } from '../../../types';
import {
  prepareRequiredFieldsValidation,
  prepareRequiredFormValidation,
} from '../../../../../_Components/Forms/form-utils';
import { InputSection } from './InputSection';
import { FieldErrorMessage } from '../../../../../_Components/Forms/FormErrorMessage';
import styled from '@emotion/styled';
import { TinButton } from '../../../../../_Components/TinButton';
import { format } from 'date-fns';

const INITIAL_VALUES: IGameForm = {
  contact: '',
  date: undefined,
  description: '',
  gameName: '',
  maxPlayers: undefined,
  title: '',
};

const REQUIRED_FIELDS = [
  'contact',
  'date',
  'description',
  'gameName',
  'maxPlayers',
  'title',
];

const requiredFormValidation = prepareRequiredFormValidation(REQUIRED_FIELDS);

const Wrapper = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #07071f;
`;

const StyledButton = styled(TinButton)`
  margin-top: 2rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface IProps {
  onSubmit: (form: any) => void;
  game?: any;
  newGame?: boolean;
}

export const GameForm: FC<IProps> = ({ onSubmit, game, newGame }) => {
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
      title: form.title,
      gameName: form.gameName,
      description: form.description,
      date: format(new Date(form.date), "yyyy-MM-dd'T'hh:mm"),
      contact: form.contact,
      maxPlayers: form.maxPlayers,
    });
  };

  useEffect(() => {
    if (game) {
      fillForm(game);
    }
  }, [game]);

  return (
    <>
      <Wrapper>
        <InputSection
          title={t('addGame.title')}
          placeholder={t('addGame.titlePlaceholder')}
          required
          fieldName={'title'}
          handleChange={formik.handleChange}
          value={formik.values?.title}
        />
        {formik.errors.title && (
          <FieldErrorMessage message={formik.errors.title} />
        )}
        <InputSection
          title={t('addGame.date')}
          placeholder={t('addGame.datePlaceholder')}
          required
          type={'datetime-local'}
          fieldName={'date'}
          handleChange={formik.handleChange}
          value={formik.values?.date}
        />
        {formik.errors.date && (
          <FieldErrorMessage message={formik.errors.date} />
        )}

        <InputSection
          title={t('addGame.gameName')}
          placeholder={t('addGame.gameNamePlaceholder')}
          required
          fieldName={'gameName'}
          handleChange={formik.handleChange}
          value={formik.values?.gameName}
        />
        {formik.errors.gameName && (
          <FieldErrorMessage message={formik.errors.gameName} />
        )}
        <InputSection
          title={t('addGame.maxPlayers')}
          placeholder={t('addGame.maxPlayersPlaceholder')}
          required
          type={'number'}
          fieldName={'maxPlayers'}
          handleChange={formik.handleChange}
          value={formik.values?.maxPlayers}
        />
        {formik.errors.maxPlayers && (
          <FieldErrorMessage message={formik.errors.maxPlayers} />
        )}
        <InputSection
          title={t('addGame.contact')}
          placeholder={t('addGame.contactPlaceholder')}
          required
          fieldName={'contact'}
          handleChange={formik.handleChange}
          value={game?.contact}
        />
        {formik.errors.contact && (
          <FieldErrorMessage message={formik.errors.contact} />
        )}
        <InputSection
          title={t('addGame.description')}
          placeholder={t('addGame.descriptionPlaceholder')}
          required
          fieldName={'description'}
          handleChange={formik.handleChange}
          value={formik.values?.description}
        />
        {formik.errors.description && (
          <FieldErrorMessage message={formik.errors.description} />
        )}
        {newGame ? (
          <StyledButton onClick={handleSubmit} label={t('addGame.submit')} />
        ) : (
          <ButtonsWrapper>
            <TinButton
              onClick={handleSubmit}
              label={t('profile.save')}
              variant={'white'}
            />
          </ButtonsWrapper>
        )}
      </Wrapper>
    </>
  );
};
