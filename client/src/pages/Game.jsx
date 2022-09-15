import React from 'react'
import { Canvas } from '../components';

const Game = () => {
  return (
    <Canvas 
      suptitle="Étape 2 sur 3"
      title="Le jeux"
      text="Vite! Cliquez sur tous les ronds sinon vous perderez votre place..."
      titleFailed="Trop null... Vous avez échoué, vous réessayer?"
      buttonFailed="Réessayer"
    />
  )
}

export default Game
