import { useEffect, useState } from 'react';

const ImagePreview = ({ src, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);

    document.body.style.overflowY = 'hidden';

    return () => {
      clearTimeout(timeout);
      document.body.style.overflowY = '';
    };
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50  backdrop-blur-md flex 
        items-center justify-center bg-[#333]/40 
        transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={onClose}
    >
      <div
        className={`relative w-[90%] max-w-3xl p-4 md:p-6  transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt="Preview"
          onClick={onClose}
          className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
        />
      </div>
    </div>
  );
};

export default ImagePreview;
