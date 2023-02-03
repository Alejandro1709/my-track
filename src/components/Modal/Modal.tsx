import useModal from '../../hooks/useModal';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
};

function Modal({ isOpen }: ModalProps) {
  const { handleModalChange } = useModal();

  function handleCancel() {
    console.log('Cancel');
    handleModalChange();
  }

  function handleAccept() {
    console.log('Accept');
  }

  return (
    <dialog open={isOpen} className={styles.Modal}>
      <article className={styles.Modal__content}>
        <h1 className={styles.Modal__content__title}>¿Estas seguro?</h1>
        <p className={styles.Modal__content__text}>
          Esta acción no se puede deshacer y se guardarán los cambios.
        </p>
        <div className={styles.Modal__content__buttons}>
          <button
            className={styles.Modal__content__buttons__cancel}
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            className={styles.Modal__content__buttons__accept}
            onClick={handleAccept}
          >
            Cambiar
          </button>
        </div>
      </article>
    </dialog>
  );
}

export default Modal;
