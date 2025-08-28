'use client';

import { createContext, type ReactNode, type JSX } from 'react';

interface IGitContent {
  link: string;
}

interface GitProviderProps {
  link: string;
  children: ReactNode;
}

export const GitContext = createContext<IGitContent>({ link: '' });

export const GitContextProvider = ({ link, children }: GitProviderProps): JSX.Element => {
  return <GitContext.Provider value={{ link }}>{children}</GitContext.Provider>;
};
