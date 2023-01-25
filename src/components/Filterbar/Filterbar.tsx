import { useState, useContext } from 'react';
import { CoursesContext } from '../../context/coursesContext';
import type ICourse from '../../types/course';
import styles from './Filterbar.module.css';

type FilterBarProps = {
  onFilterApply: () => void;
};

type Filters = {
  typeFilter: string;
  statusFilter: string;
  semesterFilter: number;
};

function handleFilterCourses(courses: ICourse[], filters: Filters) {
  const { typeFilter, statusFilter, semesterFilter } = filters;
  return courses.filter(
    (course) =>
      course.type === typeFilter ||
      course.status === statusFilter ||
      course.semester === semesterFilter
  );
}

function FilterBar({ onFilterApply }: FilterBarProps) {
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [semesterFilter, setSemesterFilter] = useState(0);

  const { courses, setFilteredCourses } = useContext(CoursesContext);

  function handleApplyClick() {
    const filters = {
      typeFilter,
      statusFilter,
      semesterFilter,
    };

    const filteredCourses = handleFilterCourses(courses, filters);
    console.log('Filtered courses', filteredCourses);

    setFilteredCourses(filteredCourses);

    onFilterApply();
  }

  return (
    <div className={styles.FilterBar}>
      <select
        className={styles.Select}
        name='typefilter'
        id='typefilter'
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option defaultValue='true'>Tipo de curso</option>
        <option value='Ciencias Básicas'>Ciencias Básicas</option>
        <option value='Humanidades'>Humanidades</option>
        <option value='Ciencias de la Computación'>
          Ciencias de la Computación
        </option>
        <option value='Administración'>Administración</option>
        <option value='Ingeniería de Software'>Ingeniería de Software</option>
        <option value='Tecnologías de Información'>
          Tecnologías de Información
        </option>
        <option value='Práctica de la Profesión'>
          Práctica de la Profesión
        </option>
        <option value='Electivo'>Electivo</option>
        <option value='Otro'>Otro</option>
      </select>
      <select
        className={styles.Select}
        name='statusFilter'
        id='statusFilter'
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option defaultValue='true'>Estado</option>
        <option value='completed'>Completed</option>
        <option value='in-progress'>In Progress</option>
        <option value='failed'>Failed</option>
        <option value='not-started'>Not Started</option>
      </select>
      <select
        className={styles.Select}
        name='semesterfilter'
        id='semesterfilter'
        onChange={(e) => setSemesterFilter(Number(e.target.value))}
      >
        <option defaultValue='true'>Semestre</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='4'>5</option>
        <option value='4'>6</option>
        <option value='4'>7</option>
        <option value='4'>8</option>
        <option value='4'>9</option>
        <option value='4'>10</option>
      </select>
      <button className={styles.Apply} onClick={handleApplyClick}>
        Apply
      </button>
    </div>
  );
}

export default FilterBar;
