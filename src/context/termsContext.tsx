/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';
import { terms } from '../data';
import { type ITerm } from '../types/course';

type TermsContext = {
  allTerms: ITerm[];
  selectedTerm: number;
  handleTermChange: (term: ITerm) => void;
  setAllTerms: React.Dispatch<React.SetStateAction<ITerm[]>>;
};

type TermsProviderProps = {
  children: React.ReactNode;
};

export const TermsContext = createContext<TermsContext>({
  allTerms: [],
  selectedTerm: 0,
  handleTermChange: () => {},
  setAllTerms: () => {},
});

export function TermsProvider({ children }: TermsProviderProps) {
  const [allTerms, setAllTerms] = useState<ITerm[]>(terms);
  const [selectedTerm, setSelectedTerm] = useState<number>(0);

  const handleTermChange = (term: ITerm) => {
    setSelectedTerm(+term.id);
  };

  return (
    <TermsContext.Provider
      value={{
        allTerms,
        selectedTerm,
        handleTermChange,
        setAllTerms,
      }}
    >
      {children}
    </TermsContext.Provider>
  );
}
