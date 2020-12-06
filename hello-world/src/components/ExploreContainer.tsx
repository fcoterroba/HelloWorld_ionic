import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>HOLA MUNDO 👋🏻 SOY FCOTERROBA</strong>
      <p>Visita mi web! <a target="_blank" rel="noopener noreferrer" href="https://www.fcoterroba.com">www.fcoterroba.com</a></p>    </div>
  );
};

export default ExploreContainer;
