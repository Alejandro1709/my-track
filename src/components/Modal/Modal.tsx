import styles from './Modal.module.css';

function Modal() {
  return (
    <dialog open className={styles.Modal}>
      <article className={styles.Modal__content}>
        <h1 className={styles.Modal__content__title}>¿Estas seguro?</h1>
        <p className={styles.Modal__content__text}>
          Esta acción no se puede deshacer y se guardarán los cambios.
        </p>
        <div className={styles.Modal__content__buttons}>
          <button className={styles.Modal__content__buttons__cancel}>
            Cancelar
          </button>
          <button className={styles.Modal__content__buttons__accept}>
            Cambiar
          </button>
        </div>
      </article>
    </dialog>
  );
}

export default Modal;
