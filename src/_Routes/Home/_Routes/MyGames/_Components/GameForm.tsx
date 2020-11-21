import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { IGame, IGameForm } from '../../../types';
import {
  prepareRequiredFieldsValidation,
  prepareRequiredFormValidation,
} from '../../../../../_Components/Forms/form-utils';
import { InputSection } from './InputSection';
import { FieldErrorMessage } from '../../../../../_Components/Forms/FormErrorMessage';
import styled from '@emotion/styled';
import { SelectSection } from './SelectSection';
import { TinButton } from '../../../../../_Components/TinButton';

const INITIAL_VALUES: IGameForm = {
  contact: '',
  date: undefined,
  description: '',
  game: '',
  maxPlayers: undefined,
  title: '',
};
const REQUIRED_FIELDS = [
  'contact',
  'date',
  'description',
  'game',
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

interface IProps {
  onSubmit: (form: any) => void;
  id?: string;
}

export const GameForm: FC<IProps> = ({ onSubmit, id }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState<IGame>();

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

  return (
    <>
      <Wrapper>
        <InputSection
          title={t('addGame.title')}
          placeholder={t('addGame.titlePlaceholder')}
          required
          fieldName={'title'}
          handleChange={formik.handleChange}
          value={game?.title}
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
          value={game?.date}
        />
        {formik.errors.date && (
          <FieldErrorMessage message={formik.errors.date} />
        )}
        <SelectSection
          title={t('addGame.game')}
          placeholder={t('addGame.gamePlaceholder')}
          required
          fieldName={'game'}
          handleChange={formik.handleChange}
          value={game?.game}
          options={[
            {
              value: 'LOL',
              label: 'League of Legends',
            },
            {
              value: 'CSGO',
              label: 'CS:GO',
            },
          ]}
        />
        {formik.errors.game && (
          <FieldErrorMessage message={formik.errors.game} />
        )}
        <InputSection
          title={t('addGame.maxPlayers')}
          placeholder={t('addGame.maxPlayersPlaceholder')}
          required
          type={'number'}
          fieldName={'maxPlayers'}
          handleChange={formik.handleChange}
          value={game?.players.maxPlayers}
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
          value={game?.description}
        />
        {formik.errors.description && (
          <FieldErrorMessage message={formik.errors.description} />
        )}
        <StyledButton onClick={handleSubmit} label={t('addGame.submit')} />
      </Wrapper>
    </>
  );
};
