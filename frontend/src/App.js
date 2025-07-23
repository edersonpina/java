import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  MainMenu, 
  CharacterCreation, 
  GameWorld, 
  Inventory, 
  Skills, 
  Journal,
  Settings 
} from './components';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-stone-800 to-amber-900">
      <MainMenu />
    </div>
  );
};

const NewGame = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-stone-800 to-amber-900">
      <CharacterCreation />
    </div>
  );
};

const Game = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-stone-800 to-green-900">
      <GameWorld />
    </div>
  );
};

const InventoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-stone-800 to-amber-900">
      <Inventory />
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-stone-800 to-purple-900">
      <Skills />
    </div>
  );
};

const JournalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-stone-800 to-blue-900">
      <Journal />
    </div>
  );
};

function App() {
  return (
    <div className="App font-medieval">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-game" element={<NewGame />} />
          <Route path="/game" element={<Game />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;