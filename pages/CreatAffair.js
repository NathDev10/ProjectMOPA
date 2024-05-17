import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../Component/Header';
import FormAffair from '../Component/FormAffair';
import ModeSelector from '../Component/ModeSelector';
import axios from 'axios';

export default function CreatAffair({navigation}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [story, setStory] = useState('');
    const [loading, setLoading] = useState(false);
  
    async function generateStory() {

      setLoading(true)
      

      //Vérifier paramètre NAME DESCRITPION ET LIEU 
      const storyData = {
          nom: name,
          description: description,
          lieu: location
      };
      let storyText;

      try {
        console.log('Envoi de la requête au serveur...');
        const response = await axios.post('http://localhost:5000/generate', storyData);
         await axios.post('http://localhost:5000/generate_audio', {texte: response.data.texte}); 
        navigation.navigate('Affair' , {Text: response.data.texte});
        //console.log('Réponse reçue du serveur:', response.data);
        //const story
        //console.log(response.data.texte);
        //console.log(storyText);
        //PEUT ETRE VERIFIER LA SORTIE DE LA REQUETE ? 
        //setStory(storyText);
      } catch (error) {
        console.error('Erreur', error);
      }
      
      setLoading(false)
      
    }

    if (loading){
      return (
        <View>
          <Header></Header>
          <div className='FormAffair'>
            <label>Nous preparons votre escapade érotique... Tu vas être toute vide...</label>
            <br/>
          <img src="../assets/loading.svg" height={150} width={150}></img>
          </div>
        </View>
      )
    }

    return (
        <View>
          <Header></Header>
          <div className='FormAffair'>
            <input type="input" className="form__field" placeholder="Nom" name="name" id='name' required value={name}  maxLength={25} onChange={e => setName(e.target.value)}/>
            <textarea value={description} className="form__field" placeholder="Description" maxLength={200} onChange={e => setDescription(e.target.value)} />
            <input type="text" className="form__field" value={location} placeholder="Lieux" maxLength={25} onChange={e => setLocation(e.target.value)} />
            <ModeSelector></ModeSelector>
            <button type="button" className='button-27' onClick={generateStory}>Generate</button>
        </div>
        </View>
      );
}

