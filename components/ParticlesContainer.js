import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) =>{
    await loadFull(engine);
  },[]);
  const particlesInit = useCallback(async () => {},[]);
  <div>Particles Container</div>;
};

export default ParticlesContainer;
