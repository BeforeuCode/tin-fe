import { createContext } from 'react';

export interface INavigationContext {
  navBarExpanded: boolean;
  onExpandClick: () => void;
}

export const defaultContext: INavigationContext = {
  navBarExpanded: true,
  onExpandClick: () => {
    console.log('NIY');
  },
};

export const NavigationContext = createContext<INavigationContext>(
  defaultContext
);
