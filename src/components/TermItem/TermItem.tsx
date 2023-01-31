import useTerms from '../../hooks/useTerms';
import { type ITerm } from '../../types/course';

type TermItemProps = {
  term: ITerm;
};

function TermItem({ term }: TermItemProps) {
  const { handleTermChange } = useTerms();

  const allCompleted = term.courses.every(
    (course) => course.status === 'completed'
  );

  return (
    <li
      style={{ backgroundColor: allCompleted ? 'green' : '' }}
      onClick={() => handleTermChange(term)}
    >
      {term.name}
    </li>
  );
}

export default TermItem;
