import React, { useState,  useRef } from 'react';
import axios from 'axios';
import PasswordPopup from './PasswordPopUp';

export default function NewHome({navigation}){
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  var top = true;

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const correctPassword = 'zizi'; // Remplacez par le mot de passe correct

  const handleButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSubmitPassword = (password) => {
    if (password === correctPassword) {
      // Appelez votre fonction ici
      setIsPopupVisible(false);
      enterRomantic();
    } else {
      alert('Incorrect password.');
    }
  };

  async function  enterRomantic () {
        document.documentElement.style.setProperty('--main-color', 'linear-gradient(90deg,#fff7ad, #ffa9f9)');
        document.documentElement.style.setProperty('--font-color', '#007CC4');
        
      setLoading(true)
      
      //Vérifier paramètre NAME DESCRITPION ET LIEU 
      const storyData = {
          nom: name,
          description: description,
          lieu: location
      };

      try {
        console.log('Envoi de la requête au serveur...');
        //const response = await axios.post('http://localhost:5000/generate', storyData);
        //await axios.post('http://localhost:5000/generate_audio', {texte: response.data.texte}); 
        //navigation.navigate('MyStory' , {Text: response.data.texte});
        navigation.navigate('MyStory' , {Text: "insérer texte ici"});
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
      };
     const enterHot = () => {
    //     document.documentElement.style.setProperty('--main-color', 'linear-gradient(90deg,#ff3131, #ff914d)');
    //     document.documentElement.style.setProperty('--font-color', '#9f0000');
    //     TODO
    };

    const scrollToBottom = () => {
      if(top){
        top = false;
        if (bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        top = true;
        if (topRef.current) {
          topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    function goBack(){
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          console.warn("Cannot go back, already on the first screen");
        }
      }

      if(loading){
        return(
          <div className="FrontPage">
            <h1 className="title">SayMyStory</h1>
            <p className="subtitle">Nous te préparons la meilleure histoire de ta vie... </p>
            <br></br>
            <p className="subtitle">Tu ferais mieux de mettre tes écouteurs</p>
            <img src="../assets/LoadingTroll.gif" height={100} width={100}></img>
          </div>
        )
      }
      
    
      return (
        <div className="story-container">
          <div className="form-container">
          <div ref={topRef}></div>
            <img src="../assets/fleche-gauche.png" height={15} width={15} onClick={goBack}></img>
              <h1 className="story-title">SayMyStory</h1>
              <p className="story-subtitle">Crée l'histoire de tes rêves :</p>
              <form className="story-form">
                <label className="story-label">
                  Quel est ton partenaire ? Fais parler tes envies
                  <input className="story-input" type="text" placeholder="Ex : Jackson Wang, Charles Leclerc, InoxTag" onChange={e => setName(e.target.value)} />
                </label>
                <label className="story-label">
                  Si ton partenaire n'est pas quelqu'un de connu, décris le nous physiquement !
                  <input className="story-input" type="text" placeholder="Ex : Grand, yeux bleus, blond"  onChange={e => setDescription(e.target.value)}/>
                </label>
                <label className="story-label">
                  On fait ça où ? Tout est possible, n'hésite pas
                  <input className="story-input" type="text" placeholder="Ex : une salle de classe, le Four Seasons de Miami, un hammam" onChange={e => setLocation(e.target.value)}/>
                </label>
                <div className="story-button-group">
                  <button type="button" onClick={handleButtonClick} className="story-romantic-button">
                  <img src="../assets/heartemoji.png" height={35} width={35}></img>
                    Je veux une histoire romantique
                  </button>
                  {isPopupVisible && (
                    <PasswordPopup
                      onClose={handleClosePopup}
                      onSubmit={handleSubmitPassword}
                    />
                  )}
                  <button type="button" onClick={enterHot}  className="story-hot-button">
                  <img src="../assets/FireEmoji.png" height={35} width={35}></img>
                    Je veux une histoire torride
                  </button>
                </div>
              </form>
              <div className='doubleFleche'>
              <img src="../assets/double-fleche.png" height={50} width={60} onClick={scrollToBottom}></img>
              </div>
              <div className="exampleStory">
                  <div>
                    Histoire de Alex
                    <div className='AlexStory'>

                    </div>
                  </div>
                  <div>
                    Histoire de Charles
                    <div className='AlexStory'>

                    </div>
                  </div>
              </div>
              <div ref={bottomRef}></div>
            </div>
        </div>
      );
}