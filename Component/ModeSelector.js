import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '../Style.css';

export default function ModeSelector() {
  // État local pour suivre quel bouton est sélectionné
  const [selectedButton, setSelectedButton] = useState('Soft');

  // Fonction pour gérer le clic sur un bouton
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    if(buttonName == "Sauvage"){
      //document.documentElement.style.setProperty('--main-color', 'black');
    }else{
      //document.documentElement.style.setProperty('--main-color', 'white');
    }
  };

  return (
    <div className='ModeSelector'>
      <button
        className={selectedButton === 'Romantique' ? 'selectedButton' : 'noselectedButton'}
        onClick={() => handleButtonClick('Romantique')}
      >
        Romantique
      </button>
      <button
        className={selectedButton === 'Sauvage' ? 'selectedButton' : 'noselectedButton'}
        onClick={() => handleButtonClick('Sauvage')}
      >
        Sauvage
      </button>
    </div>
  );
}
