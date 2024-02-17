import React, { useEffect, useState } from "react";
import * as Tone from "tone";

const PlayPage = () => {
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    const initializeAudio = async () => {
      await Tone.start();
      console.log("audio is ready");
      setIsAudioReady(true);
    };

    initializeAudio();
  }, []);

  const handlePlay = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div>
      <h1>Play Page</h1>
      <p>{isAudioReady ? "Audio is ready" : "Initializing audio..."}</p>
      <button onClick={handlePlay} disabled={!isAudioReady}>
        Play Note
      </button>
    </div>
  );
};

export default PlayPage;