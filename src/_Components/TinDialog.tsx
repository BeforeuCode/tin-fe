import React, { FC, useMemo } from 'react';
import styled from '@emotion/styled';
import { createStyles, Dialog, makeStyles } from '@material-ui/core';

import { Close } from '@material-ui/icons';
import { TinButton } from './TinButton';
import { ICommonProps } from '../_Types/props';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #17172e;
  background-color: #17172e;
  height: 6.5rem;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 0;
  margin: 0 3rem;
  align-items: center;
  height: 8.5rem;
`;

const ChildrenWrapper = styled.div<{ areButtons: boolean }>`
  display: flex;
  height: ${({ areButtons }) => (areButtons ? '54rem' : '100%')};
  overflow: auto;
`;

const CloseIcon = styled(Close)`
  margin: 2.5rem;
  cursor: pointer;
  fill: white !important;
`;

const Title = styled.div`
  font-size: 1.8rem;
  color: white;
  margin: auto 3rem;
`;

const CloseButton = styled(TinButton)`
  && {
    width: 10rem;
    margin-right: 1rem;
  }
`;
const SaveButton = styled(TinButton)`
  && {
    width: 10rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const RedButton = styled(TinButton)`
  && {
    margin-right: auto;
  }
`;

export const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: '80rem',
      height: '70rem',
      maxWidth: '100rem',
      backgroundColor: '#252547',
    },
  })
);
export interface IDialogProps extends ICommonProps {
  title: string;
  open: boolean;
  onSaveDisabled?: boolean;
  onClose: () => void;
  onSave?: () => void;
  onRedAction?: () => void;
  onExtraOption?: () => void;
  closeButton?: boolean;
  isProcessing?: boolean;
  closeButtonLabel?: string;
  saveButtonLabel?: string;
  extraOptionLabel?: string;
  onRedActionDisabled?: boolean;
  redActionLabel?: string;
}

export const TinDialog: FC<IDialogProps> = ({
  title,
  open,
  onClose,
  onSave,
  onSaveDisabled = false,
  closeButton,
  children,
  closeButtonLabel = 'Close',
  saveButtonLabel = 'Save',
  onExtraOption,
  extraOptionLabel,
  onRedAction,
  onRedActionDisabled,
  redActionLabel,
}) => {
  const classes = useStyles();
  const isAnyActionButton = useMemo(() => onSave || closeButton, [
    onSave,
    closeButton,
  ]);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.paper }}
      aria-labelledby="simple-dialog-title"
    >
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <CloseIcon onClick={onClose} />
        </Header>
        <ChildrenWrapper areButtons={!!onSave}>{children}</ChildrenWrapper>
        {isAnyActionButton && (
          <ButtonSection>
            {onRedAction && (
              <RedButton
                color={'secondary'}
                variant={'white'}
                onClick={onRedAction}
              >
                {redActionLabel}
              </RedButton>
            )}
            {onExtraOption && (
              <CloseButton
                variant="flat"
                onClick={onExtraOption}
                label={extraOptionLabel}
              />
            )}
            {closeButton && (
              <CloseButton
                onClick={onClose}
                label={closeButtonLabel}
                variant="flat"
              />
            )}
            {onSave && (
              <SaveButton
                variant={'white'}
                isDisabled={onSaveDisabled}
                onClick={onSave}
                label={saveButtonLabel}
              />
            )}
          </ButtonSection>
        )}
      </Wrapper>
    </Dialog>
  );
};
