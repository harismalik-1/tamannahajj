import React, { useState } from 'react';
import './Gallery.scss';

// Import Umrah images
import umrahImg1 from '../../assets/umrah/1.jpg';
import umrahImg2 from '../../assets/umrah/2.jpg';
import umrahImg3 from '../../assets/umrah/3.jpg';
import umrahImg4 from '../../assets/umrah/4.jpg';


// Import Hajj images
import hajjImg1 from '../../assets/highdef/1.jpg';
import hajjImg2 from '../../assets/highdef/2.jpg';
import hajjImg3 from '../../assets/highdef/3.jpg';
import hajjImg4 from '../../assets/highdef/4.jpg';
import hajjImg5 from '../../assets/highdef/5.jpg';
import hajjImg6 from '../../assets/highdef/6.jpg';
import hajjImg7 from '../../assets/highdef/7.jpg';
import hajjImg8 from '../../assets/highdef/8.jpg';
import hajjImg9 from '../../assets/highdef/9.jpg';
import hajjImg10 from '../../assets/highdef/10.jpg';

function Gallery() {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const collections = {
    hajj: [
      {
        id: 'h1',
        src: hajjImg1,
        title: 'Masjid Al-Haram',
        description: 'The Grand Mosque during Hajj'
      },
      {
        id: 'h2',
        src: hajjImg2,
        title: 'Kaaba View',
        description: 'Pilgrims circling the Holy Kaaba'
      },
      {
        id: 'h3',
        src: hajjImg3,
        title: 'Mount Arafat',
        description: 'The Day of Arafah gathering'
      },
      {
        id: 'h4',
        src: hajjImg4,
        title: 'Mina',
        description: 'The tent city of Mina'
      },
      {
        id: 'h5',
        src: hajjImg5,
        title: 'Jamarat',
        description: 'The symbolic stoning of the devil'
      },
      {
        id: 'h6',
        src: hajjImg6,
        title: 'Pilgrims Gathering',
        description: 'Unity of Muslims during Hajj'
      },
      {
        id: 'h7',
        src: hajjImg7,
        title: 'Sacred Sites',
        description: 'Holy places during Hajj'
      },
      {
        id: 'h8',
        src: hajjImg8,
        title: 'Evening Prayer',
        description: 'Spiritual moments in Makkah'
      },
      {
        id: 'h9',
        src: hajjImg9,
        title: 'Masjid View',
        description: 'Beautiful architecture of the Holy Mosque'
      },
      {
        id: 'h10',
        src: hajjImg10,
        title: 'Hajj Journey',
        description: 'Memorable moments of the pilgrimage'
      }
    ],
    umrah: [
      {
        id: 1,
        src: umrahImg1,
        title: 'Masjid Al-Haram',
        description: 'The Holy Mosque in Makkah'
      },
      {
        id: 2,
        src: umrahImg2,
        title: 'Kaaba',
        description: 'The Holy Kaaba during Tawaf'
      },
      {
        id: 3,
        src: umrahImg3,
        title: 'Masjid Al-Nabawi',
        description: 'The Prophet\'s Mosque in Madinah'
      },
      {
        id: 4,
        src: umrahImg4,
        title: 'Umrah Pilgrims',
        description: 'Pilgrims performing their rituals'
      },

      // Add more images as needed
    ],
  };

  const allImages = [...collections.hajj, ...collections.umrah];
  const currentImages = selectedCollection === 'all' 
    ? allImages 
    : collections[selectedCollection];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Sacred Journeys</h1>
        <p>Experience the spiritual moments of Hajj and Umrah through our lens</p>
        
        <div className="collection-filters">
          <button 
            className={selectedCollection === 'all' ? 'active' : ''} 
            onClick={() => setSelectedCollection('all')}
          >
            All Photos
          </button>
          <button 
            className={selectedCollection === 'hajj' ? 'active' : ''} 
            onClick={() => setSelectedCollection('hajj')}
          >
            Hajj
          </button>
          <button 
            className={selectedCollection === 'umrah' ? 'active' : ''} 
            onClick={() => setSelectedCollection('umrah')}
          >
            Umrah
          </button>
        </div>
      </div>

      <div className="gallery-grid">
        {currentImages.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={image.title} />
            <div className="image-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <button className="nav-button prev" onClick={prevImage}>‹</button>
            <button className="nav-button next" onClick={nextImage}>›</button>
            
            <div className="modal-image-container">
              <img 
                src={currentImages[currentImageIndex].src} 
                alt={currentImages[currentImageIndex].title} 
              />
              <div className="image-info">
                <h3>{currentImages[currentImageIndex].title}</h3>
                <p>{currentImages[currentImageIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
