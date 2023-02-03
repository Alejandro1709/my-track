import { useContext } from 'react';
import { ModalContext } from '../context/modalContext';

export default function useModal() {
  return useContext(ModalContext);
}
