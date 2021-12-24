import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../../../../redux/actions-catalog';
import './Modal.scss';

function Modal() {

  const dispatch = useDispatch();

  return (
    <div className="overlay" onClick={() => dispatch(closeModal())}>
      <div className="modal">
          <p className="modal-description">Вы уже выбрали максимум игрушек для украшения елки.</p>
          <button className="button-modal" >Закрыть окно</button>
      </div>
    </div>
  );
}

export default Modal;