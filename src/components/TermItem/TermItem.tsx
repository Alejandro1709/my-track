import useTerms from '../../hooks/useTerms';
import { type ITerm } from '../../types/course';

type TermItemProps = {
  term: ITerm;
};

function TermItem({ term }: TermItemProps) {
  const { handleTermChange } = useTerms();

  return <li onClick={() => handleTermChange(term)}>{term.name}</li>;
}

export default TermItem;
