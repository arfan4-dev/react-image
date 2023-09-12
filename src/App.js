import React, { useState } from 'react';
import './style.css';
import Navbar from './component/Navbar';

function App() {
  const [selectedImages, setSelectedImages] = useState([]);

  const openImagePicker = () => {
    // In a ReactJS app, you can use an HTML input element of type file for image selection.
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.multiple = true;

    fileInput.addEventListener('change', (e) => {
      const files = e.target.files;
      const newImages = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          newImages.push(e.target.result);
          if (newImages.length === files.length) {
            setSelectedImages([...selectedImages, ...newImages]);
          }
        };

        reader.readAsDataURL(file);
      }
    });

    fileInput.click();
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Image Picker</h1>
        <button className="select-button" onClick={openImagePicker}>
          Select Images
        </button>
        <div className="image-grid">
          {selectedImages.map((image, index) => (
            <div
              key={index + 1}
              className={`image-container ${
                index % 3 === 2 && index % 1 === 0? 'single-width' : 'double-width'
              }`}
            >
             <a href={image} target='_blank'><img src={image} alt={`Image ${index}`} className="image" /></a> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
