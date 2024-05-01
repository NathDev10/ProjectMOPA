import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '../Style.css';

export default function ModeSelector() {
  // État local pour suivre quel bouton est sélectionné
  const [selectedButton, setSelectedButton] = useState('Soft');

  // Fonction pour gérer le clic sur un bouton
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className='ModeSelector'>
      <button
        className={selectedButton === 'Soft' ? 'selectedButton' : 'noselectedButton'}
        onClick={() => handleButtonClick('Soft')}
      >
        Soft
      </button>
      <button
        className={selectedButton === 'Normal' ? 'selectedButton' : 'noselectedButton'}
        onClick={() => handleButtonClick('Normal')}
      >
        Normal
      </button>
      <button
        className={selectedButton === 'Sauvage' ? 'selectedButton' : 'noselectedButton'}
        onClick={() => handleButtonClick('Sauvage')}
      >
        Sauvage
      </button>
      <button
        className={selectedButton === 'Extreme' ? 'selectedButton' : 'noselectedButton'}
        onClick={() => handleButtonClick('Extreme')}
      >
        Extreme
      </button>
    </div>
  );
}
