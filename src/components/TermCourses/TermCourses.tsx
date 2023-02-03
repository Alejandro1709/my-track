import useTerms from '../../hooks/useTerms';
import Courses from '../Courses';

function TermCourses() {
  const { allTerms, selectedTerm } = useTerms();

  return <Courses allTerms={allTerms} selectedTerm={selectedTerm} />;
}

export default TermCourses;
