import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../Component/Header';
import FormAffair from '../Component/FormAffair';

export default function CreatAffair({navigation}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [story, setStory] = useState('');
  
    async function generateStory() {

        //Vérifier paramètre NAME DESCRITPION ET LIEU 
    const storyData = {
        nom: name,
        description: description,
        lieu: location
    };
    let storyText = "ZIZI LUISANT";

      try {
        //console.log('Envoi de la requête au serveur...');
        //const response = await axios.post('http://localhost:5000/generate', storyData);
        //console.log('Réponse reçue du serveur:', response.data);
        //const storyText = response.data.texte;

        //PEUT ETRE VERIFIER LA SORTIE DE LA REQUETE ? 
        storyText = `Sur les vastes étendues du cosmos, le voyageur contempla l'univers dans toute sa splendeur. Des galaxies tourbillonnantes, des étoiles éclatantes et des nébuleuses mystérieuses dansaient dans l'espace infini. Chaque point lumineux racontait une histoire vieille de milliards d'années, une histoire de naissance, de vie et de mort.

        Dans cette immensité, il se sentait à la fois petit et grand, une particule insignifiante au sein d'une toile cosmique complexe. Pourtant, sa conscience embrassait l'univers tout entier, se connectant à chaque atome, chaque photon, chaque pensée qui flottait dans le vide.
        
        À travers les vastes étendues de l'espace, il cherchait un sens, une signification à sa propre existence. Il se demandait s'il était seul dans l'univers, s'il existait d'autres êtres semblables à lui, contemplant les étoiles depuis des mondes lointains.
        
        Soudain, une lumière vive attira son attention. Une étoile filante traversait le ciel, laissant derrière elle une traînée lumineuse. Il ferma les yeux et fit un vœu, un vœu pour la paix, la compréhension et l'harmonie dans l'univers.
        
        Alors qu'il observait le firmament, une pensée lui vint à l'esprit : chaque être vivant, chaque planète, chaque étoile était interconnecté, faisant partie d'un tout indivisible. Dans cette conscience cosmique, il trouva la réponse à ses questions, une vérité simple et profonde : nous sommes tous liés, nous sommes tous un.
        
        Il sourit alors, sentant une vague de gratitude et d'amour envelopper son être. Dans l'immensité du cosmos, il se sentait chez lui, un membre de la grande famille de l'univers.
        
        Le temps s'écoulait lentement, comme une rivière tranquille, emportant avec lui les soucis et les peurs. Il se laissa emporter par le flot de l'existence, sachant que chaque instant était précieux, chaque moment une opportunité de croissance et d'épanouissement.
        
        Et alors qu'il continuait son voyage à travers les étoiles, il savait au fond de lui que, peu importe où la vie le mènerait, il porterait toujours avec lui la lumière de l'univers, un guide éternel dans l'obscurité de l'espace infini.`;
        
        setStory(storyText);
      } catch (error) {
        console.error('Erreur', error);
      }
      navigation.navigate('Affair' , {Text: storyText});
    }

    return (
        <View>
          <Header></Header>
          <div className='FormAffair'>
            <label>
              Name :
            </label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <label>
              Description :
            </label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} />
            <br />
            <label>
              Location :
            </label>
              <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
            <br />
            <button type="button" className='button-27' onClick={generateStory}>Generate</button>
        </div>
        </View>
      );
}

