import React, { useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function MyStory({navigation , route}) {
  const { Text } = route.params;
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const audioPlayerRef = useRef(null);
  var top = true;

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

  const pauseAudio = () => {
     if (audioPlayerRef.current) {
    const audioEl = audioPlayerRef.current.audioEl.current;
    if (audioEl.paused) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }
  };

    function goBack(){
        if (navigation.canGoBack()) {
          document.documentElement.style.setProperty('--main-color', 'linear-gradient(90deg,#fff7ad, #ffa9f9)');
          document.documentElement.style.setProperty('--font-color', '#007CC4');
          navigation.goBack();
        } else {
          console.warn("Cannot go back, already on the first screen");
        }
      }
  return (
    
    <div className="StoryPage">
      <div ref={topRef}></div>
        <img src="../assets/fleche-gauche.png" height={15} width={15} onClick={goBack}></img>
        <h1 className="title">SayMyStory</h1>
        <img src="../assets/AudioPlayer.gif" ref={audioPlayerRef} height={250} width={250} onClick={pauseAudio}></img>
        <div className='doubleFleche'>
        <img src="../assets/double-fleche.png" height={50} width={60} onClick={scrollToBottom}></img>
        </div>
        <div>
        <ReactAudioPlayer
          ref={audioPlayerRef}
          src="../assets/output_Manuel.mp3"
          autoPlay
          controls
          className="hidden"
        />
        </div>
        
        <div className="Story-Text">
            {Text}
        </div>
        <div ref={bottomRef}></div>
    </div>
  );
}