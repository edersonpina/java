import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Main Menu Component
export const MainMenu = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1735720518793-804614ff5c48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwUlBHfGVufDB8fHx8MTc1MzI5NTExN3ww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1749794425043-f83668a6e6d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwUlBHfGVufDB8fHx8MTc1MzI5NTExN3ww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1668261834846-eb10673033bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHdhcnJpb3J8ZW58MHx8fHwxNzUzMjk1MTI0fDA&ixlib=rb-4.1.0&q=85"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImages[currentBgIndex]}
          alt="Fantasy Background"
          className="w-full h-full object-cover transition-opacity duration-2000"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Menu Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Game Title */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-amber-200 mb-4 drop-shadow-2xl tracking-wider">
            EXILED
          </h1>
          <h2 className="text-4xl font-bold text-amber-300 mb-2 drop-shadow-xl">
            KINGDOMS
          </h2>
          <p className="text-amber-100 text-lg italic drop-shadow-lg">
            A Classic Fantasy RPG Adventure
          </p>
        </div>

        {/* Menu Options */}
        <div className="space-y-4">
          <Link 
            to="/new-game"
            className="block w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-400 shadow-xl"
          >
            NEW GAME
          </Link>
          
          <Link 
            to="/game"
            className="block w-full bg-gradient-to-r from-stone-600 to-stone-800 hover:from-stone-500 hover:to-stone-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 border-stone-400 shadow-xl"
          >
            CONTINUE
          </Link>
          
          <button className="block w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 border-red-400 shadow-xl">
            LOAD GAME
          </button>
          
          <button className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-400 shadow-xl">
            SETTINGS
          </button>
          
          <button className="block w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-400 shadow-xl">
            EXIT
          </button>
        </div>

        {/* Version Info */}
        <div className="mt-8 text-amber-200 text-sm opacity-75">
          Version 1.0 - Fantasy RPG Clone
        </div>
      </div>
    </div>
  );
};

// Character Creation Component
export const CharacterCreation = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('warrior');
  const [characterName, setCharacterName] = useState('');
  const [attributes, setAttributes] = useState({
    strength: 10,
    agility: 10,
    intellect: 10,
    endurance: 10
  });
  const [availablePoints, setAvailablePoints] = useState(20);

  const classes = {
    warrior: {
      name: 'Warrior',
      description: 'Masters of combat with high strength and endurance. Excels in melee weapons and heavy armor.',
      image: "https://images.unsplash.com/photo-1668261834846-eb10673033bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHdhcnJpb3J8ZW58MHx8fHwxNzUzMjk1MTI0fDA&ixlib=rb-4.1.0&q=85",
      bonuses: { strength: 5, endurance: 3 }
    },
    rogue: {
      name: 'Rogue',
      description: 'Swift and stealthy fighters who rely on agility and cunning. Masters of ranged combat and thievery.',
      image: "https://images.unsplash.com/photo-1571652542118-5cc33c994b7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxmYW50YXN5JTIwUlBHfGVufDB8fHx8MTc1MzI5NTExN3ww&ixlib=rb-4.1.0&q=85",
      bonuses: { agility: 5, intellect: 2 }
    },
    cleric: {
      name: 'Cleric',
      description: 'Holy warriors blessed with divine magic. Can heal allies and smite undead enemies.',
      image: "https://images.unsplash.com/photo-1749794425043-f83668a6e6d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwUlBHfGVufDB8fHx8MTc1MzI5NTExN3ww&ixlib=rb-4.1.0&q=85",
      bonuses: { intellect: 4, endurance: 3 }
    },
    mage: {
      name: 'Mage',
      description: 'Masters of arcane magic with devastating spells. Weak in physical combat but powerful from range.',
      image: "https://images.unsplash.com/photo-1735720518793-804614ff5c48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwUlBHfGVufDB8fHx8MTc1MzI5NTExN3ww&ixlib=rb-4.1.0&q=85",
      bonuses: { intellect: 6, agility: 2 }
    }
  };

  const adjustAttribute = (attr, change) => {
    const newValue = attributes[attr] + change;
    if (newValue >= 5 && newValue <= 20) {
      if (change > 0 && availablePoints > 0) {
        setAttributes(prev => ({ ...prev, [attr]: newValue }));
        setAvailablePoints(prev => prev - 1);
      } else if (change < 0 && attributes[attr] > 5) {
        setAttributes(prev => ({ ...prev, [attr]: newValue }));
        setAvailablePoints(prev => prev + 1);
      }
    }
  };

  const startGame = () => {
    if (characterName.trim()) {
      // Save character data to localStorage or context
      localStorage.setItem('character', JSON.stringify({
        name: characterName,
        class: selectedClass,
        attributes,
        level: 1,
        experience: 0,
        health: 100,
        mana: 50
      }));
      navigate('/game');
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-200 mb-2">Create Your Hero</h1>
          <p className="text-amber-100">Choose your path in the Exiled Kingdoms</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Character Preview */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 p-6">
            <h2 className="text-2xl font-bold text-amber-200 mb-4">Character Preview</h2>
            
            <div className="relative mb-6">
              <img 
                src={classes[selectedClass].image}
                alt={classes[selectedClass].name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white">{classes[selectedClass].name}</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-amber-200 font-bold mb-2">Character Name:</label>
                <input 
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  className="w-full bg-stone-800 border-2 border-amber-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-400"
                  placeholder="Enter your hero's name"
                />
              </div>

              <div>
                <h4 className="text-xl font-bold text-amber-200 mb-2">Final Attributes</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(attributes).map(([attr, value]) => (
                    <div key={attr} className="bg-stone-700 rounded-lg p-3">
                      <div className="text-amber-100 capitalize font-semibold">{attr}</div>
                      <div className="text-2xl font-bold text-white">
                        {value + (classes[selectedClass].bonuses[attr] || 0)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Character Creation Options */}
          <div className="space-y-6">
            {/* Class Selection */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 p-6">
              <h2 className="text-2xl font-bold text-amber-200 mb-4">Choose Your Class</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(classes).map(([key, classData]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedClass(key)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedClass === key 
                        ? 'border-amber-400 bg-amber-600/20' 
                        : 'border-stone-600 bg-stone-800/50 hover:border-amber-600'
                    }`}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{classData.name}</h3>
                    <p className="text-sm text-amber-100">{classData.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Attribute Allocation */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 p-6">
              <h2 className="text-2xl font-bold text-amber-200 mb-4">
                Allocate Attributes 
                <span className="text-lg text-amber-100 ml-2">({availablePoints} points remaining)</span>
              </h2>
              
              <div className="space-y-4">
                {Object.entries(attributes).map(([attr, value]) => (
                  <div key={attr} className="flex items-center justify-between">
                    <span className="text-amber-100 capitalize font-semibold w-24">{attr}:</span>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => adjustAttribute(attr, -1)}
                        className="w-8 h-8 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold"
                        disabled={value <= 5}
                      >
                        -
                      </button>
                      <span className="text-2xl font-bold text-white w-12 text-center">{value}</span>
                      <button
                        onClick={() => adjustAttribute(attr, 1)}
                        className="w-8 h-8 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold"
                        disabled={availablePoints <= 0 || value >= 20}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Link 
                to="/"
                className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-3 px-6 rounded-lg font-bold text-center transition-colors"
              >
                Back
              </Link>
              <button
                onClick={startGame}
                disabled={!characterName.trim()}
                className="flex-1 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white py-3 px-6 rounded-lg font-bold transition-colors"
              >
                Start Adventure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Game World Component
export const GameWorld = () => {
  const [character, setCharacter] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('town');
  const [showInventory, setShowInventory] = useState(false);
  const [showJournal, setShowJournal] = useState(false);

  useEffect(() => {
    const savedCharacter = localStorage.getItem('character');
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    }
  }, []);

  const locations = {
    town: {
      name: 'Elara Town',
      description: 'A peaceful trading town surrounded by farmlands and forests.',
      image: "https://images.unsplash.com/photo-1749794425043-f83668a6e6d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwUlBHfGVufDB8fHx8MTc1MzI5NTExN3ww&ixlib=rb-4.1.0&q=85",
      actions: ['Visit Tavern', 'Enter Shop', 'Go to Forest', 'Rest at Inn']
    },
    forest: {
      name: 'Darkwood Forest',
      description: 'A mysterious forest filled with ancient trees and dangerous creatures.',
      image: "https://images.unsplash.com/photo-1668261200406-7f7d12cca0fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtZWRpZXZhbCUyMHdhcnJpb3J8ZW58MHx8fHwxNzUzMjk1MTI0fDA&ixlib=rb-4.1.0&q=85",
      actions: ['Hunt Wolves', 'Search for Herbs', 'Explore Deeper', 'Return to Town']
    },
    dungeon: {
      name: 'Ancient Ruins',
      description: 'Crumbling stone corridors filled with traps and treasures.',
      image: "https://images.unsplash.com/photo-1509718966846-7fb920af0ae3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxtZWRpZXZhbCUyMHdhcnJpb3J8ZW58MHx8fHwxNzUzMjk1MTI0fDA&ixlib=rb-4.1.0&q=85",
      actions: ['Fight Skeleton', 'Search for Treasure', 'Cast Spell', 'Retreat']
    }
  };

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-200 mb-4">No Character Found</h2>
          <Link to="/new-game" className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-bold">
            Create Character
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Game Interface Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b-2 border-amber-600">
        <div className="flex items-center justify-between p-4">
          {/* Character Info */}
          <div className="flex items-center space-x-4">
            <div className="bg-amber-600 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{character.name[0]}</span>
            </div>
            <div>
              <h3 className="text-amber-200 font-bold">{character.name}</h3>
              <p className="text-amber-100 text-sm capitalize">{character.class} • Level {character.level}</p>
            </div>
          </div>

          {/* Status Bars */}
          <div className="flex-1 max-w-md mx-4">
            <div className="mb-1">
              <div className="flex justify-between text-sm text-amber-100">
                <span>Health</span>
                <span>{character.health}/100</span>
              </div>
              <div className="w-full bg-red-900 rounded-full h-3">
                <div 
                  className="bg-red-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${character.health}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-amber-100">
                <span>Mana</span>
                <span>{character.mana}/50</span>
              </div>
              <div className="w-full bg-blue-900 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(character.mana / 50) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Menu Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setShowInventory(!showInventory)}
              className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Inventory
            </button>
            <button
              onClick={() => setShowJournal(!showJournal)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Journal
            </button>
            <Link 
              to="/"
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="pt-24 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Location View */}
            <div className="lg:col-span-2">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 overflow-hidden">
                <div className="relative">
                  <img 
                    src={locations[currentLocation].image}
                    alt={locations[currentLocation].name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{locations[currentLocation].name}</h2>
                    <p className="text-amber-100">{locations[currentLocation].description}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {locations[currentLocation].actions.map((action, index) => (
                  <button
                    key={index}
                    className="bg-amber-600 hover:bg-amber-500 text-white py-3 px-6 rounded-lg font-bold transition-colors"
                    onClick={() => {
                      if (action.includes('Forest')) setCurrentLocation('forest');
                      else if (action.includes('Town')) setCurrentLocation('town');
                      else if (action.includes('Ruins') || action.includes('Deeper')) setCurrentLocation('dungeon');
                    }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 p-6">
                <h3 className="text-xl font-bold text-amber-200 mb-4">Character Stats</h3>
                <div className="space-y-3">
                  {Object.entries(character.attributes).map(([attr, value]) => (
                    <div key={attr} className="flex justify-between">
                      <span className="text-amber-100 capitalize">{attr}:</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                  ))}
                  <div className="border-t border-amber-600 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-amber-100">Experience:</span>
                      <span className="text-white font-bold">{character.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 p-6">
                <h3 className="text-xl font-bold text-amber-200 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg font-semibold">
                    Cast Heal
                  </button>
                  <button className="w-full bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg font-semibold">
                    Attack
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">
                    Use Skill
                  </button>
                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded-lg font-semibold">
                    Use Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Overlay */}
      {showInventory && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-stone-800 rounded-lg border-2 border-amber-600 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-amber-200">Inventory</h2>
                <button
                  onClick={() => setShowInventory(false)}
                  className="text-white hover:text-amber-200 text-2xl"
                >
                  ✕
                </button>
              </div>
              <Inventory embedded={true} />
            </div>
          </div>
        </div>
      )}

      {/* Journal Overlay */}
      {showJournal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-stone-800 rounded-lg border-2 border-amber-600 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-amber-200">Quest Journal</h2>
                <button
                  onClick={() => setShowJournal(false)}
                  className="text-white hover:text-amber-200 text-2xl"
                >
                  ✕
                </button>
              </div>
              <Journal embedded={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Inventory Component
export const Inventory = ({ embedded = false }) => {
  const [selectedTab, setSelectedTab] = useState('weapons');
  
  const inventoryItems = {
    weapons: [
      { name: 'Iron Sword', damage: '1d8+2', rarity: 'common', description: 'A sturdy iron blade, well-balanced for combat.' },
      { name: 'Steel Axe', damage: '1d10+1', rarity: 'common', description: 'Heavy axe that cleaves through armor.' },
      { name: 'Elven Bow', damage: '1d6+3', rarity: 'rare', description: 'Crafted by elven artisans, never misses its mark.' },
      { name: 'Magic Staff', damage: '1d4+4', rarity: 'epic', description: 'Channels magical energy for devastating spells.' }
    ],
    armor: [
      { name: 'Leather Armor', defense: '+2 AC', rarity: 'common', description: 'Basic protection for adventurers.' },
      { name: 'Chain Mail', defense: '+4 AC', rarity: 'common', description: 'Interlocked metal rings provide solid defense.' },
      { name: 'Plate Armor', defense: '+6 AC', rarity: 'rare', description: 'Heavy armor that turns aside most attacks.' },
      { name: 'Robe of Warding', defense: '+3 AC, +2 MR', rarity: 'epic', description: 'Magical robes that protect against spells.' }
    ],
    consumables: [
      { name: 'Health Potion', effect: 'Restore 50 HP', rarity: 'common', description: 'A red liquid that heals wounds.' },
      { name: 'Mana Potion', effect: 'Restore 30 MP', rarity: 'common', description: 'Blue elixir that restores magical energy.' },
      { name: 'Antidote', effect: 'Cure Poison', rarity: 'common', description: 'Neutralizes toxic substances.' },
      { name: 'Elixir of Strength', effect: '+5 STR (1 hour)', rarity: 'rare', description: 'Temporarily increases physical power.' }
    ],
    misc: [
      { name: 'Gold Coins', quantity: 150, rarity: 'common', description: 'Standard currency of the realm.' },
      { name: 'Lockpicks', quantity: 5, rarity: 'common', description: 'Tools for opening locked doors and chests.' },
      { name: 'Torch', quantity: 3, rarity: 'common', description: 'Provides light in dark places.' },
      { name: 'Ancient Key', quantity: 1, rarity: 'epic', description: 'A mysterious key with unknown purpose.' }
    ]
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'text-gray-300';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-yellow-400';
      default: return 'text-white';
    }
  };

  return (
    <div className={embedded ? '' : 'min-h-screen p-6'}>
      <div className={embedded ? '' : 'max-w-6xl mx-auto'}>
        {!embedded && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-200 mb-2">Inventory</h1>
            <Link to="/game" className="text-amber-100 hover:text-amber-200">← Back to Game</Link>
          </div>
        )}

        <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600">
          {/* Tabs */}
          <div className="flex border-b border-amber-600">
            {Object.keys(inventoryItems).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-4 font-bold capitalize transition-colors ${
                  selectedTab === tab
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-200 hover:text-white hover:bg-amber-600/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inventoryItems[selectedTab].map((item, index) => (
                <div
                  key={index}
                  className="bg-stone-700 rounded-lg p-4 border-2 border-stone-600 hover:border-amber-400 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-bold ${getRarityColor(item.rarity)}`}>
                      {item.name}
                    </h3>
                    {item.quantity && (
                      <span className="text-amber-100 text-sm">x{item.quantity}</span>
                    )}
                  </div>
                  
                  {item.damage && (
                    <div className="text-red-400 text-sm mb-1">Damage: {item.damage}</div>
                  )}
                  {item.defense && (
                    <div className="text-blue-400 text-sm mb-1">Defense: {item.defense}</div>
                  )}
                  {item.effect && (
                    <div className="text-green-400 text-sm mb-1">Effect: {item.effect}</div>
                  )}
                  
                  <p className="text-amber-100 text-sm mt-2">{item.description}</p>
                  
                  <div className="mt-3 flex space-x-2">
                    <button className="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded text-sm">
                      Use
                    </button>
                    <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-sm">
                      Drop
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skills Component
export const Skills = () => {
  const [character, setCharacter] = useState(null);
  
  useEffect(() => {
    const savedCharacter = localStorage.getItem('character');
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    }
  }, []);

  const skills = {
    combat: [
      { name: 'Sword Mastery', level: 3, maxLevel: 10, description: 'Increases damage with sword weapons.' },
      { name: 'Archery', level: 1, maxLevel: 10, description: 'Improves accuracy and damage with bows.' },
      { name: 'Armor Training', level: 2, maxLevel: 10, description: 'Reduces armor penalties and increases defense.' }
    ],
    magic: [
      { name: 'Fire Magic', level: 2, maxLevel: 10, description: 'Unlocks powerful fire spells.' },
      { name: 'Healing', level: 1, maxLevel: 10, description: 'Allows casting of healing spells.' },
      { name: 'Mana Control', level: 1, maxLevel: 10, description: 'Increases maximum mana and regeneration.' }
    ],
    utility: [
      { name: 'Lockpicking', level: 1, maxLevel: 10, description: 'Opens locked doors and chests.' },
      { name: 'Herbalism', level: 0, maxLevel: 10, description: 'Identify and craft potions from plants.' },
      { name: 'Diplomacy', level: 2, maxLevel: 10, description: 'Improves dialogue options and prices.' }
    ]
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-200 mb-2">Skills & Abilities</h1>
          <Link to="/game" className="text-amber-100 hover:text-amber-200">← Back to Game</Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 p-6">
              <h2 className="text-2xl font-bold text-amber-200 mb-4 capitalize">{category} Skills</h2>
              
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <div key={index} className="bg-stone-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-white font-bold">{skill.name}</h3>
                      <span className="text-amber-200">
                        {skill.level}/{skill.maxLevel}
                      </span>
                    </div>
                    
                    <div className="w-full bg-stone-800 rounded-full h-2 mb-2">
                      <div 
                        className="bg-amber-500 h-2 rounded-full"
                        style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
                      ></div>
                    </div>
                    
                    <p className="text-amber-100 text-sm mb-3">{skill.description}</p>
                    
                    <button 
                      className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                      disabled={skill.level >= skill.maxLevel}
                    >
                      Upgrade
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Journal Component
export const Journal = ({ embedded = false }) => {
  const [selectedTab, setSelectedTab] = useState('active');
  
  const quests = {
    active: [
      {
        title: 'The Missing Merchant',
        description: 'Find the missing trader who disappeared near Darkwood Forest.',
        objectives: ['Search the forest', 'Find clues about the merchant', 'Report back to the town guard'],
        reward: '100 gold, Iron Sword',
        difficulty: 'Easy'
      },
      {
        title: 'Ancient Ruins Expedition',
        description: 'Explore the mysterious ruins discovered east of town.',
        objectives: ['Enter the ruins', 'Defeat the guardian', 'Retrieve the ancient artifact'],
        reward: '250 gold, Magic Ring',
        difficulty: 'Medium'
      }
    ],
    completed: [
      {
        title: 'Welcome to Elara',
        description: 'Learn the basics of adventuring in the town of Elara.',
        objectives: ['Visit the tavern', 'Buy equipment', 'Talk to NPCs'],
        reward: '50 gold, Health Potion',
        difficulty: 'Tutorial'
      }
    ],
    failed: []
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      case 'tutorial': return 'text-blue-400';
      default: return 'text-white';
    }
  };

  return (
    <div className={embedded ? '' : 'min-h-screen p-6'}>
      <div className={embedded ? '' : 'max-w-6xl mx-auto'}>
        {!embedded && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-200 mb-2">Quest Journal</h1>
            <Link to="/game" className="text-amber-100 hover:text-amber-200">← Back to Game</Link>
          </div>
        )}

        <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600">
          {/* Tabs */}
          <div className="flex border-b border-amber-600">
            {Object.keys(quests).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-4 font-bold capitalize transition-colors ${
                  selectedTab === tab
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-200 hover:text-white hover:bg-amber-600/20'
                }`}
              >
                {tab} ({quests[tab].length})
              </button>
            ))}
          </div>

          {/* Quest List */}
          <div className="p-6">
            <div className="space-y-4">
              {quests[selectedTab].map((quest, index) => (
                <div
                  key={index}
                  className="bg-stone-700 rounded-lg p-6 border-2 border-stone-600"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{quest.title}</h3>
                    <span className={`font-semibold ${getDifficultyColor(quest.difficulty)}`}>
                      {quest.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-amber-100 mb-4">{quest.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-amber-200 font-bold mb-2">Objectives:</h4>
                    <ul className="space-y-1">
                      {quest.objectives.map((obj, objIndex) => (
                        <li key={objIndex} className="text-amber-100 flex items-center">
                          <span className="mr-2">•</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-amber-200 font-bold">Reward: </span>
                      <span className="text-green-400">{quest.reward}</span>
                    </div>
                    {selectedTab === 'active' && (
                      <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold">
                        Track Quest
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {quests[selectedTab].length === 0 && (
                <div className="text-center py-12">
                  <p className="text-amber-100 text-lg">No {selectedTab} quests.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Component (placeholder)
export const Settings = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-200">Settings</h1>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg border-2 border-amber-600 p-6">
          <p className="text-amber-100">Settings panel coming soon...</p>
        </div>
      </div>
    </div>
  );
};