import React from 'react'
import { useHandlePageAccess } from '../hooks/useHandlePageAccess'
import {updateUserValue} from '../hooks/useUserStorage'

const Game = (props) => {
  useHandlePageAccess(props.history);

  return (
    <>COUCOU</>
  )
}

export default Game
