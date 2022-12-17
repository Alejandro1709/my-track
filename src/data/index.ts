import type ICourse from '../types/course';

export const courses: ICourse[] = [
  {
    id: 1,
    name: 'Comprensión y Producción de Lenguaje I',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 2,
    name: 'Matemática Básica',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 3,
    name: 'Introducción a los Algoritmos',
    type: 'Ciencias de la Computación',
    color: { hex: '#C1C5C7', name: 'darkGray' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 4,
    name: 'Ética y Ciudadanía',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 5,
    name: 'Creatividad y Liderazgo (Ing)',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 6,
    name: 'Comprensión y Producción de Lenguaje II',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 2,
    status: 'completed',
  },
  {
    id: 7,
    name: 'Cálculo I',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 6,
    semester: 2,
    status: 'completed',
  },
  {
    id: 8,
    name: 'Seminario de Investigación Académica I',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 2,
    status: 'completed',
  },
  {
    id: 9,
    name: 'Algoritmos',
    type: 'Ciencias de la Computación',
    color: { hex: '#C1C5C7', name: 'darkGray' },
    credits: 4,
    semester: 2,
    status: 'not-started',
  },
  {
    id: 10,
    name: 'Organización y Dirección de Empresas',
    type: 'Administración',
    color: { hex: '#FDC68A', name: 'lightOrange' },
    credits: 4,
    semester: 2,
    status: 'completed',
  },
  {
    id: 11,
    name: 'Algoritmos y Estructura de Datos',
    type: 'Ciencias de la Computación',
    color: { hex: '#C1C5C7', name: 'darkGray' },
    credits: 4,
    semester: 3,
    status: 'not-started',
  },
  {
    id: 12,
    name: 'Especificación y Análisis de Requerimientos',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 3,
    status: 'completed',
  },
  {
    id: 13,
    name: 'Física I',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 6,
    semester: 3,
    status: 'completed',
  },
  {
    id: 14,
    name: 'Matemática Discreta',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 6,
    semester: 3,
    status: 'completed',
  },
  {
    id: 15,
    name: 'Diseño y Patrones de Software',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 3,
    status: 'not-started',
  },
  {
    id: 16,
    name: 'Arquitectura de Computadoras',
    type: 'Tecnologías de Información',
    color: { hex: '#FFF799', name: 'yellow' },
    credits: 4,
    semester: 4,
    status: 'not-started',
  },
  {
    id: 17,
    name: 'IHC y Tecnologías Móviles',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 4,
    status: 'not-started',
  },
  {
    id: 18,
    name: 'Física II',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 6,
    semester: 4,
    status: 'not-started',
  },
  {
    id: 19,
    name: 'Diseño de Base de Datos',
    type: 'Ciencias de la Computación',
    color: { hex: '#C1C5C7', name: 'darkGray' },
    credits: 4,
    semester: 4,
    status: 'not-started',
  },
  {
    id: 20,
    name: 'Matemática Computacional',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 6,
    semester: 4,
    status: 'not-started',
  },
  {
    id: 21,
    name: 'Desarrollo de Aplicaciones Open Source',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 5,
    status: 'not-started',
  },
  {
    id: 22,
    name: 'Aplicaciones Web',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 5,
    status: 'not-started',
  },
  {
    id: 23,
    name: 'Cálculo II',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 6,
    semester: 5,
    status: 'not-started',
  },
  {
    id: 24,
    name: 'Sistemas Operativos',
    type: 'Tecnologías de Información',
    color: { hex: '#FFF799', name: 'yellow' },
    credits: 4,
    semester: 5,
    status: 'not-started',
  },
  {
    id: 25,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 5,
    status: 'not-started',
  },
  {
    id: 26,
    name: 'Complejidad Algorítmica',
    type: 'Ciencias de la Computación',
    color: { hex: '#C1C5C7', name: 'darkGray' },
    credits: 4,
    semester: 6,
    status: 'not-started',
  },
  {
    id: 27,
    name: 'Estadística Aplicada I',
    type: 'Otro',
    color: { hex: '#7ACCC8', name: 'cyan' },
    credits: 4,
    semester: 6,
    status: 'not-started',
  },
  {
    id: 28,
    name: 'Aplicaciones para Dispositivos Móviles',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 6,
    status: 'not-started',
  },
  {
    id: 29,
    name: 'Redes y Comunicaciones de Datos',
    type: 'Tecnologías de Información',
    color: { hex: '#FFF799', name: 'yellow' },
    credits: 4,
    semester: 6,
    status: 'not-started',
  },
  {
    id: 30,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 6,
    status: 'not-started',
  },
  {
    id: 31,
    name: 'Diseño de Experimentos de Ingeniería de Software',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 7,
    status: 'not-started',
  },
  {
    id: 32,
    name: 'Fundamentos de Arquitectura de Software',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 7,
    status: 'not-started',
  },
  {
    id: 33,
    name: 'Desarrollo de Soluciones IoT',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 7,
    status: 'not-started',
  },
  {
    id: 34,
    name: 'Finanzas e Ingeniería Económica',
    type: 'Administración',
    color: { hex: '#FDC68A', name: 'lightOrange' },
    credits: 4,
    semester: 7,
    status: 'not-started',
  },
  {
    id: 35,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 7,
    status: 'not-started',
  },
  {
    id: 36,
    name: 'Taller de Desempeño Profesional',
    type: 'Práctica de la Profesión',
    color: { hex: '#F49AC1', name: 'pink' },
    credits: 4,
    semester: 8,
    status: 'not-started',
  },
  {
    id: 37,
    name: 'Seminario de Investigación Académica II (Ing)',
    type: 'Práctica de la Profesión',
    color: { hex: '#F49AC1', name: 'pink' },
    credits: 4,
    semester: 8,
    status: 'not-started',
  },
  {
    id: 38,
    name: 'Gerencia de Proyectos en Computación',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 8,
    status: 'not-started',
  },
  {
    id: 39,
    name: 'Arquitecturas de Software Emergentes',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 8,
    status: 'not-started',
  },
  {
    id: 40,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 8,
    status: 'not-started',
  },
  {
    id: 41,
    name: 'Taller de Proyecto I',
    type: 'Práctica de la Profesión',
    color: { hex: '#F49AC1', name: 'pink' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 42,
    name: 'Calidad y Mejora de Procesos Software',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 43,
    name: 'Desarrollo Agile de Productos de Software',
    type: 'Ingeniería de Software',
    color: { hex: '#7095C2', name: 'blue' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 44,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 45,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 46,
    name: 'Taller de Proyecto II',
    type: 'Práctica de la Profesión',
    color: { hex: '#F49AC1', name: 'pink' },
    credits: 4,
    semester: 10,
    status: 'not-started',
  },
  {
    id: 47,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 48,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 49,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
  {
    id: 50,
    name: 'Electivo',
    type: 'Electivo',
    color: { hex: '#EBEDEF', name: 'lightGray' },
    credits: 4,
    semester: 9,
    status: 'not-started',
  },
];
