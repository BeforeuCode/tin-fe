import { Link, LinkProps } from 'react-router-dom';
import styled from '@emotion/styled';

export type IProps = LinkProps<any>;
export const TinLinkWrapper = styled(Link)<IProps>`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;
