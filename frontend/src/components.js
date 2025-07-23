import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-white text-xl font-bold">Hero Forge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/create" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Create
            </Link>
            <Link to="/shop" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Shop
            </Link>
            <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Gallery
            </Link>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Support
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-blue-400 transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <Link to="/create" className="text-white hover:text-blue-400 transition-colors duration-200">
                Create
              </Link>
              <Link to="/shop" className="text-white hover:text-blue-400 transition-colors duration-200">
                Shop
              </Link>
              <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors duration-200">
                Gallery
              </Link>
              <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200">
                Support
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1601255596436-3d600117f19e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXJzfGVufDB8fHxibHVlfDE3NTMyOTQ1MjR8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1698086034294-752ffbd0f832?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxmaWd1cmluZXN8ZW58MHx8fGJsdWV8MTc1MzI5NDUwOXww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1612635466104-e3aab50680b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx0b3lzfGVufDB8fHxibHVlfDE3NTMyOTQ1MzJ8MA&ixlib=rb-4.1.0&q=85"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Animation Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Create Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
                Perfect Hero
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Design and customize unique 3D miniatures for your tabletop adventures. 
              Bring your characters to life with our advanced creation tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/create"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Creating
              </Link>
              <Link 
                to="/gallery"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Right Content - Rotating Images */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl">
              <img 
                src={heroImages[currentImageIndex]}
                alt="3D Miniature Character"
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-blue-500' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Component
export const Features = () => {
  const features = [
    {
      title: "3D Character Creator",
      description: "Design your perfect miniature with our intuitive 3D creation tools",
      image: "https://images.unsplash.com/photo-1603589138334-be34651248b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwbWluaWF0dXJlc3xlbnwwfHx8Ymx1ZXwxNzUzMjk0NDg1fDA&ixlib=rb-4.1.0&q=85",
      icon: "🎨"
    },
    {
      title: "Endless Customization",
      description: "Choose from thousands of parts, poses, and color combinations",
      image: "https://images.pexels.com/photos/6848351/pexels-photo-6848351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      icon: "⚙️"
    },
    {
      title: "High Quality Prints",
      description: "Professional 3D printing in multiple materials and finishes",
      image: "https://images.pexels.com/photos/29148783/pexels-photo-29148783/free-photo-of-3d-printed-architectural-model-in-hand.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      icon: "🖨️"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Bring Your Characters to Life
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Create, customize, and order your perfect miniature with our cutting-edge tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative mb-6">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Component
export const Gallery = ({ expanded = false }) => {
  const galleryItems = [
    {
      image: "https://images.pexels.com/photos/20144906/pexels-photo-20144906/free-photo-of-cute-girl-doll-in-dress.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Fantasy Warrior",
      creator: "DragonSlayer92"
    },
    {
      image: "https://images.unsplash.com/photo-1644984875413-7f65e3671564?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHx0b3lzfGVufDB8fHxibHVlfDE3NTMyOTQ1MzJ8MA&ixlib=rb-4.1.0&q=85",
      title: "Playful Builder",
      creator: "CreativeMind"
    },
    {
      image: "https://images.unsplash.com/photo-1601255596436-3d600117f19e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXJzfGVufDB8fHxibHVlfDE3NTMyOTQ1MjR8MA&ixlib=rb-4.1.0&q=85",
      title: "Cyber Knight",
      creator: "TechnoMage"
    },
    {
      image: "https://images.unsplash.com/photo-1698086034294-752ffbd0f832?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxmaWd1cmluZXN8ZW58MHx8fGJsdWV8MTc1MzI5NDUwOXww&ixlib=rb-4.1.0&q=85",
      title: "Duo Heroes",
      creator: "AdventureCrew"
    },
    {
      image: "https://images.unsplash.com/photo-1612635466104-e3aab50680b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx0b3lzfGVufDB8fHxibHVlfDE3NTMyOTQ1MzJ8MA&ixlib=rb-4.1.0&q=85",
      title: "Space Ranger",
      creator: "GalacticHero"
    },
    {
      image: "https://images.unsplash.com/photo-1603589138334-be34651248b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxmYW50YXN5JTIwbWluaWF0dXJlc3xlbnwwfHx8Ymx1ZXwxNzUzMjk0NDg1fDA&ixlib=rb-4.1.0&q=85",
      title: "Beast Companions",
      creator: "WildTamer"
    }
  ];

  const displayItems = expanded ? galleryItems : galleryItems.slice(0, 6);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Community Gallery
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover amazing creations from our community of miniature makers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400">
                  by {item.creator}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="text-center mt-12">
            <Link 
              to="/gallery"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Creations
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

// Character Creator Component
export const CharacterCreator = () => {
  const [selectedCategory, setSelectedCategory] = useState('race');
  const [selectedOptions, setSelectedOptions] = useState({
    race: 'Human',
    gender: 'Male',
    class: 'Warrior',
    pose: 'Standing',
    weapon: 'Sword',
    armor: 'Leather'
  });

  const categories = {
    race: ['Human', 'Elf', 'Dwarf', 'Orc', 'Halfling', 'Dragonborn'],
    gender: ['Male', 'Female', 'Non-binary'],
    class: ['Warrior', 'Mage', 'Rogue', 'Paladin', 'Ranger', 'Cleric'],
    pose: ['Standing', 'Action', 'Spellcasting', 'Defending', 'Attacking'],
    weapon: ['Sword', 'Staff', 'Bow', 'Dagger', 'Axe', 'Shield'],
    armor: ['Leather', 'Chainmail', 'Plate', 'Robes', 'Light', 'Heavy']
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Character Creator
          </h1>
          <p className="text-xl text-slate-300">
            Design your perfect miniature hero
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601255596436-3d600117f19e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXJzfGVufDB8fHxibHVlfDE3NTMyOTQ1MjR8MA&ixlib=rb-4.1.0&q=85"
                  alt="3D Character Preview"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white font-bold text-lg">
                      {selectedOptions.race} {selectedOptions.class}
                    </h3>
                    <p className="text-slate-300">
                      {selectedOptions.gender} • {selectedOptions.pose} • {selectedOptions.weapon}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Save Design
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Order Print
                </button>
                <button className="border border-slate-500 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Category Tabs */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Customization</h3>
              
              <div className="grid grid-cols-3 gap-2 mb-6">
                {Object.keys(categories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                      selectedCategory === category 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Options for Selected Category */}
              <div className="space-y-2">
                {categories[selectedCategory].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedOptions(prev => ({ ...prev, [selectedCategory]: option }))}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedOptions[selectedCategory] === option
                        ? 'bg-blue-600/20 border border-blue-500 text-blue-400'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Customization */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Colors</h3>
              <div className="grid grid-cols-6 gap-2">
                {['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#64748b'].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-slate-600 hover:border-white transition-colors"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Shop Component
export const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Premium Resin Print",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1601255596436-3d600117f19e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXJzfGVufDB8fHxibHVlfDE3NTMyOTQ1MjR8MA&ixlib=rb-4.1.0&q=85",
      description: "High-quality resin print with fine details"
    },
    {
      id: 2,
      name: "Metal Miniature",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1698086034294-752ffbd0f832?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxmaWd1cmluZXN8ZW58MHx8fGJsdWV8MTc1MzI5NDUwOXww&ixlib=rb-4.1.0&q=85",
      description: "Durable metal casting for premium collectors"
    },
    {
      id: 3,
      name: "Painted Miniature",
      price: "$79.99",
      image: "https://images.pexels.com/photos/20144906/pexels-photo-20144906/free-photo-of-cute-girl-doll-in-dress.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Professionally painted by expert artists"
    },
    {
      id: 4,
      name: "Digital Download",
      price: "$9.99",
      image: "https://images.pexels.com/photos/29148783/pexels-photo-29148783/free-photo-of-3d-printed-architectural-model-in-hand.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "STL file for your own 3D printer"
    }
  ];

  return (
    <div className="pt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Shop Miniatures
          </h1>
          <p className="text-xl text-slate-300">
            Choose your preferred format and quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                </div>
                <p className="text-slate-300 mb-4">{product.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-white text-xl font-bold">Hero Forge</span>
            </div>
            <p className="text-slate-400 mb-4">
              Create amazing 3D miniatures for your tabletop adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Character Creator</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">3D Printing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Digital Downloads</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Painted Minis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Tutorials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Hero Forge Clone. All rights reserved. Built for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};