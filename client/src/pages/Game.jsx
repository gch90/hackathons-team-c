import React from 'react';
import { useHandlePageAccess } from '../hooks/useHandlePageAccess';

const Game = (props) => {
  useHandlePageAccess(props.history);

  return (
    <>COUCOU</>
  )
}

export default Game;
