import React, { useEffect, useState } from 'react';
interface ImageContainerProps {
  imagePath: string;
}
const ImageContainer: React.FC<ImageContainerProps> = ( {imagePath } ) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    
    img.onload = () => {
      const { width, height } = img;
      setDimensions({ width, height });
    };
  }, [imagePath]);

  const aspectRatio = dimensions.width / dimensions.height;

  // Determine the max width or height based on the aspect ratio
  const maxWidth = 100; // Set your max width
  const maxHeight = 40; // Set your max height
  let divStyle = {};

  // if (aspectRatio > 1) {
  //   // Landscape
  //   divStyle = {
  //     width: maxWidth,
  //     height: maxWidth / aspectRatio,
  //   };
  // } else {
    // Portrait or square
    divStyle = {
      height: "40px",
      width: maxHeight * aspectRatio,
    };
  // }

  return (
    <div className="tab" style={divStyle}>
      <img src={imagePath} alt="dynamic" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

export default ImageContainer;
