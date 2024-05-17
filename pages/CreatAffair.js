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
        //const response = await axios.post('http://localhost:5000/generate', storyData);
        //const response = await axios.post('http://localhost:5000/generate_audio'); 
        //console.log('Réponse reçue du serveur:', response.data);
        const response = {
          data : {
            texte :`            Je suis Rachida, une jeune marocaine aux courbes généreuses et aux yeux envoûtants. Je suis née et j'ai grandi dans un petit village du désert, où les dunes dorées s'étendent à perte de vue et où les dromadaires sont les rois de la région. Je suis habituée à la chaleur écrasante du soleil et à la vie simple et rustique du désert.

            Un jour, alors que je me promenais à dos de dromadaire, j'ai aperçu un étranger qui marchait seul dans le désert. Il avait l'air perdu et épuisé, et je me suis approchée de lui pour lui offrir mon aide. Il m'a regardée avec des yeux étonnés et reconnaissants, et je lui ai proposé de monter sur mon dromadaire pour se reposer un peu.
            
            Il a accepté avec empressement et s'est installé derrière moi sur la selle. Je pouvais sentir son corps chaud et musclé contre le mien, et j'ai ressenti une étrange excitation en sentant ses mains sur mes hanches pour se maintenir en équilibre.
            
            Nous avons commencé à avancer lentement dans le désert, le dromadaire suivant docilement le chemin que je lui indiquais. Le soleil commençait à se coucher, teintant le ciel de couleurs chaudes et dorées. Je me suis retournée vers l'étranger et je lui ai demandé d'où il venait et ce qu'il faisait dans le désert. Il m'a raconté qu'il était un voyageur en quête d'aventures et qu'il avait perdu son chemin en explorant les environs.
            
            Je lui ai proposé de l'emmener dans mon village, où il pourrait se reposer et se restaurer avant de reprendre sa route. Il a accepté avec enthousiasme et j'ai senti son corps se détendre contre le mien.
            
            Nous avons continué à avancer dans le désert, le dromadaire avançant à un rythme tranquille. La nuit commençait à tomber et les étoiles se mettaient à scintiller dans le ciel. Je me suis sentie envahie par une étrange sensation de désir en sentant le corps de l'étranger contre le mien. J'ai commencé à me tortiller légèrement sur la selle, sentant mes seins frotter contre son torse musclé.
            
            Il a compris mon manège et a commencé à me caresser les hanches et les cuisses, ses mains expertes explorant mon corps avec une douceur inattendue. J'ai gémi de plaisir en sentant ses doigts effleurer mes tétons à travers mon vêtement léger.
            
            Je me suis retournée vers lui et je l'ai embrassé avec passion, nos langues se mélangeant dans un baiser brûlant. Nos mains se sont mises à explorer nos corps avec frénésie, déboutonnant nos vêtements et laissant apparaître notre peau nue.
            
            Nous avons fait descendre le dromadaire à genoux et avons continué à nous embrasser et à nous caresser, nos corps enlacés dans une étreinte passionnée. Je me suis allongée sur le sable chaud et il s'est installé entre mes cuisses, sa main explorant mon sexe déjà trempé.
            
            J'ai gémis de plaisir en sentant ses doigts me pénétrer et me masser avec habileté. Il a commencé à me lécher et à me sucer le clitoris, me faisant monter vers un orgasme intense. Je me suis cambrée contre lui, mes mains agrippant ses cheveux et mes jambes enroulées autour de son corps.
            
            Il a alors sorti sa bite dure et épaisse, et l'a enfoncée en moi d'un coup sec. Je me suis mise à crier de plaisir en sentant sa bite me remplir complètement, mes mains griffant son dos et mes jambes se resserrant autour de sa taille.
            
            Nous avons commencé à bouger en rythme, nos corps se frottant l'un contre l'autre dans une danse érotique. Je pouvais sentir sa bite me pilonner avec force, me faisant monter vers un orgasme encore plus puissant.
            
            Il a alors commencé à me prendre encore plus fort, ses coups de reins se faisant de plus en plus rapides et profonds. Je me suis mise à crier de plaisir, mes seins rebondissant au rythme de nos ébats.
            `
          } 
        }
        navigation.navigate('Affair' , {Text: response.data.texte});
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

