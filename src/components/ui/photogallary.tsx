import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import carpenter from '../photos/carpenter.jpg';
import electrician from '../photos/Electrician.jpg';
import painter from '../photos/painter.jpg';
import plumber from '../photos/plumber.jpg';
 

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: carpenter,
  },
  {
    src: electrician,
  },
  {
    src: plumber,
  },

 
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    
       {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, );

  return (
    <div className="relative w-15 mx-2 mt-4 justify-center items-right">
      <div
        className="flex justify-center py-6 items-center pt-10"
       
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
   
          height = '500'
          width = '370'
          objectFit="fill"
          className="rounded-xl transition-all duration-900 fade-in-out"
        />
      </div>
 
     
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-15 mx-5 ${
              index === currentIndex
            } transition-all duration-1500 fade-in-out`}
          ></div>
        ))}
      </div>
 
  );
}