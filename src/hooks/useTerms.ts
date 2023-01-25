import { useContext } from 'react';
import { TermsContext } from '../context/termsContext';
import { ITerm } from '../types/course';

type TermsContext = {
  allTerms: ITerm[];
  selectedTerm: number;
  handleTermChange: (term: ITerm) => void;
  setAllTerms: React.Dispatch<React.SetStateAction<ITerm[]>>;
};

export default function useTerms() {
  return useContext(TermsContext) as TermsContext;
}
