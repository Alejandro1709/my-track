import { type ITerm } from '../../types/course';

type TermItemProps = {
  term: ITerm;
  onTermChange: (term: ITerm) => void;
};

function TermItem({ term, onTermChange }: TermItemProps) {
  return <li onClick={() => onTermChange(term)}>{term.name}</li>;
}

export default TermItem;
