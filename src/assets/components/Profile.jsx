import { useState } from 'react';
import Button from './Button';
import ProfileCard from './cards/ProfileCard';

const Profile = () => {
  const buttons = [
    { text: 'Skill', isActive: true, row: 2, minLength: 2 },
    { text: 'Experience', isActive: false, row: 1, minLength: 1 },
    { text: 'Education', isActive: false, row: 1, minLength: 1 },
  ];

  const isOpenButton = [false, false, false];

  const buttonElement = [
    [
      // Skills
      {
        img: 'img/profile/skill/laravel.png',
        title: 'Laravel',
        sub: 'Level:Intermediate',
      },
      {
        img: 'img/profile/skill/react.png',
        sub: 'Level:Beginer',
        title: 'React',
      },
      {
        img: 'img/profile/skill/tailwind.png',
        title: 'Tailwind',
        sub: 'Level:Intermediate',
      },
      {
        img: 'img/profile/skill/boostrap.png',
        title: 'Bootstrap',
        sub: 'Level:Intermediate',
      },
      {
        img: 'img/profile/skill/kotlin.png',
        title: 'Kotlin',
        sub: 'Level:Intermediate',
      },
      {
        img: 'img/profile/skill/figma.png',
        sub: 'Level:Intermediate',
        title: 'Figma',
      },
    ],
    [
      // Experience
      {
        img: 'img/profile/experience/bangkit.jpg',
        title: 'Android Learning Path',
        sub: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka',
        desc: 'Android Learning Path',
        year: 'Sep 2024 - Dec 2024',
        skill: ['kotlin'],
      },
    ],
    [
      // Education
      {
        img: 'img/profile/education/stmik.png',
        title: 'STMIK Mardira Indonesia',
        sub: 'Informatics Engineering',
        desc: 'College Level',
        year: '2022 - now',
        skill: ['kotlin'],
      },
      {
        img: 'img/profile/education/smkn1kawali.png',
        title: 'SMK Negeri 1 Kawali',
        sub: 'Software Engineering',
        desc: 'High School',
        year: '2018 - 2021',
        skill: ['kotlin'],
      },
    ],
  ];

  const [buttonsState, setButtonsState] = useState(isOpenButton);
  const [currentButton, setCurrentButton] = useState(0);

  const buttonClickedHandler = (index) => {
    setCurrentButton(index);
  };

  const showMoreHandler = (index) => {
    const updated = buttonsState.map((btn, i) => (i === index ? !btn : btn));
    setButtonsState(updated);
  };

  const currentItems = buttonsState[currentButton]
    ? buttonElement[currentButton]
    : buttonElement[currentButton].slice(0, buttons[currentButton].minLength);

  return (
    <section
      id="aboutMe"
      className="px-4 sm:px-10 md:px-20 mt-10 flex flex-col md:flex-row gap-10"
    >
      {/* About Me */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold mb-2">About Me</h1>
        <p className="tracking-wide text-[12pt]">
          Informatics Engineering student at STMIK Mardira Indonesia with
          hands-on experience in web and Android development. Skilled in both
          frontend and backend technologies, capable of building responsive and
          user-friendly applications.
        </p>
        <p className="tracking-wide text-[12pt]">
          Familiar with modern development tools, design principles, and
          efficient workflows. Enjoys team collaboration and solving problems
          with clean, maintainable code. Always eager to explore new
          technologies and improve technical abilities.
        </p>
      </div>

      {/* Skill / Experience / Education */}
      <div id="SEED" className="w-full md:w-1/2 flex flex-col">
        <div className="buttons flex flex-wrap gap-3 mb-4">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              text={btn.text}
              isActive={currentButton === index}
              onClick={() => buttonClickedHandler(index)}
            />
          ))}
        </div>

        {/* Cards */}
        <div
          className={`buttonMenu mt-2 gap-4 grid ${
            buttons[currentButton].row === 1
              ? 'grid-cols-1'
              : 'grid-cols-1 sm:grid-cols-2'
          }`}
        >
          <ProfileCard
            current={currentButton}
            element={currentItems}
            className="cursor-pointer hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-300"
          />
        </div>

        {/* Show More Button */}
        {buttonElement[currentButton].length >
          buttons[currentButton].minLength && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => showMoreHandler(currentButton)}
              className="hover:text-[var(--secondary)] border cursor-pointer 
              hover:bg-[var(--primary)] bg-[var(--secondary)] text-[var(--primary)] 
              rounded-full py-3 px-6 font-bold md:w-[150px] active:scale-[0.95] transition-all duration-300"
            >
              {buttonsState[currentButton] ? 'Minimize' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
