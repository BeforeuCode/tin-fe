import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import {
  prepareRequiredFieldsValidation,
  prepareRequiredFormValidation,
} from '../../../../../_Components/Forms/form-utils';

import { FieldErrorMessage } from '../../../../../_Components/Forms/FormErrorMessage';
import styled from '@emotion/styled';

import { TinButton } from '../../../../../_Components/TinButton';
import { SelectSection } from '../../Games/_Components/SelectSection';
import { InputSection } from '../../Games/_Components/InputSection';
import { format } from 'date-fns';
import { getGames } from '../../Games/games-api';
import { getGamers } from '../../Gamers/gamers-api';

const INITIAL_VALUES: any = {
  gamer: '',
  game: '',
  sentDate: undefined,
  comment: '',
  isAccepted: '',
};
const REQUIRED_FIELDS = ['gamer', 'game', 'sentDate', 'comment', 'isAccepted'];

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
  data?: any;
  newInvite?: boolean;
}

export const InviteForm: FC<IProps> = ({
  onSubmit,
  data,
  newInvite = true,
}) => {
  const { t } = useTranslation();
  const [gamers, setGamers] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((games) => {
      setGames(
        games.map((game: any) => {
          return { value: game.gameId, label: game.title };
        })
      );
    });
    getGamers().then((gamers) => {
      setGamers(
        gamers.map((gamer: any) => {
          return { value: gamer.gamerId, label: gamer.nickname };
        })
      );
    });
  }, []);

  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    t('errors.reqField')
  );

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (form) => {
      if (requiredFormValidation(form)) {
        console.log(form);
        onSubmit({
          gamer: form.gamer,
          game: form.game,
          sentDate: format(new Date(form.sentDate), "yyyy-MM-dd'T'hh:mm"),
          comment: form.comment,
          isAccepted: form.isAccepted,
        });
      }
    },
    validate: (form) => {
      const errors = requiredFieldsValidation(form);
      if (form.comment.length >= 200) {
        errors.comment = 'Comment must be max 200 characters';
      }
      return errors;
    },
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const fillForm = (form: any) => {
    formik.setValues({
      gamer: form.gamerId,
      game: form.gameId,
      sentDate: format(new Date(form.sentDate), "yyyy-MM-dd'T'hh:mm"),
      comment: form.comment,
      isAccepted: form.isAccepted ? 'YES' : 'NO',
    });
  };

  useEffect(() => {
    if (data) {
      fillForm(data);
    }
    // eslint-disable-next-line
  }, [data]);

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <Wrapper>
        <SelectSection
          title={t('invite.gamerId')}
          placeholder={t('addGame.gamerIdPlaceholder')}
          required
          fieldName={'gamer'}
          handleChange={formik.handleChange}
          value={formik.values?.gamer}
          options={gamers}
        />
        {formik.errors.gamer && (
          <FieldErrorMessage message={`${formik.errors.gamer}`} />
        )}
        <SelectSection
          title={t('invite.gameId')}
          placeholder={t('invite.gameIdPlaceholder')}
          required
          fieldName={'game'}
          handleChange={formik.handleChange}
          value={formik.values?.game}
          options={games}
        />
        {formik.errors.game && (
          <FieldErrorMessage message={`${formik.errors.game}`} />
        )}
        <InputSection
          title={t('invite.sentDate')}
          placeholder={t('addGame.sentDatePlaceholder')}
          required
          type={'datetime-local'}
          fieldName={'sentDate'}
          handleChange={formik.handleChange}
          value={formik.values?.sentDate}
        />
        {formik.errors.sentDate && (
          <FieldErrorMessage message={`${formik.errors.sentDate}`} />
        )}
        <InputSection
          title={t('invite.comments')}
          placeholder={t('invite.commentsPlaceholder')}
          required
          fieldName={'comment'}
          handleChange={formik.handleChange}
          value={formik.values?.comment}
        />
        {formik.errors.comment && (
          <FieldErrorMessage message={`${formik.errors.comment}`} />
        )}
        <SelectSection
          title={t('invite.isAccepted')}
          placeholder={t('invite.isAcceptedPlaceholder')}
          required
          fieldName={'isAccepted'}
          handleChange={formik.handleChange}
          value={formik.values?.isAccepted}
          options={[
            {
              value: 'YES',
              label: 'Yes',
            },
            {
              value: 'NO',
              label: 'No',
            },
          ]}
        />
        {formik.errors.isAccepted && (
          <FieldErrorMessage message={`${formik.errors.isAccepted}`} />
        )}

        {newInvite ? (
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
