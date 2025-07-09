import { useState } from 'react';
import ImagePreview from './ImagePreview';

const achivements = [
  {
    name: 'Bangkit Academy Batch 2 2024 \n Mobile Development',
    img: 'img/achivement/bangkit.jpg',
    desc: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka (MSIB Program)',
  },
];

const Achivement = () => {
  const [src, setSrc] = useState('');

  const showDetailHandler = (index) => {
    setSrc(achivements[index].img);
  };

  return (
    <section id="achiveMenu" className="achivementMenu px-4 py-8">
      <h1 className="text-center font-extrabold text-3xl mb-6">Achievement</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {achivements.map((achive, index) => (
          <article
            key={index}
            onClick={() => showDetailHandler(index)}
            className="cursor-pointer bg-white w-full h-auto py-3 px-4 rounded-[8px] shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={achive.img}
              alt={achive.name}
              className="rounded-[12px] w-full h-48 object-cover mb-3"
            />
            <div className="achive-description">
              <p className="font-bold text-sm whitespace-pre-line">
                {achive.name}
              </p>
              <p className="font-normal text-xs tracking-wide leading-relaxed mt-2">
                {achive.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {src && <ImagePreview src={src} onClose={() => setSrc(null)} />}
    </section>
  );
};

export default Achivement;
