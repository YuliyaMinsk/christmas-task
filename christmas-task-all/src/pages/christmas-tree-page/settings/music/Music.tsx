import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appState } from '../../../../common/types';
import { selectMusic } from '../../../../redux/actions';
import christmasAudio from '../../../../assets/audio/audio.mp3'
import './Music.scss';

function Music() {

  const { settings } = useSelector((state: appState) => state);
  
  const audio = useMemo(() => new Audio(christmasAudio), []);

  if (settings.music) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }

  const isActiveButtonMusic = (settings.music) ? 'active' : '';

  const dispatch = useDispatch();

  return (
    <>      
      <button className={"button-music " + isActiveButtonMusic} onClick={() => dispatch(selectMusic())}></button>
    </>
  );
}

export default Music;