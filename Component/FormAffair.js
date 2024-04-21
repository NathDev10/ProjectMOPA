import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../Component/Header';
import '../Style.css';

export default function FormAffair() {
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

      try {
        //console.log('Envoi de la requête au serveur...');
        //const response = await axios.post('http://localhost:5000/generate', storyData);
        //console.log('Réponse reçue du serveur:', response.data);
        //const storyText = response.data.texte;

        //PEUT ETRE VERIFIER LA SORTIE DE LA REQUETE ? 
        const storyText = "ZIZI LUISANT";
        setStory(storyText);
      } catch (error) {
        console.error('Erreur', error);
      }
      navigation.navigate('Affair' , {storyText: storyText})
    }
  

    return (
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

          {story && (
            <div>
              <h2>Your Story:</h2>
              <p>{story}</p>
            </div>
          )}
        </div>
      );
}

