const ProfileCard = ({ className = '', current, element }) => {
  const skils = (skill) => {
    {
      return skill.map((f) => (
        <span
          className=" text-xs bg-blue-50 text-blue-500 
              hover:bg-blue-500 hover:text-white transition-all 
              duration-3 cursor-pointer 00 font-bold 
              border border-blue-500 px-3 py-1 rounded-full"
        >
          {f}
        </span>
      ));
    }
  };
  const cardElement = (el) => {
    return (
      <div className="w-1/2">
        <h1 className="text-sm font-bold">{el.title}</h1>
        <p className="text-[13px] ">{el.sub}</p>
        <h2 className="text-sm my-1 ">{el.year}</h2>
      </div>
    );
  };

  return element.map((el, index) => (
    <article
      key={index}
      className={`card p-2 mt-2 mr-2 rounded-[10px] relative  min-h-[90px] shadow-[0_0_2px_0.2px] border-[var(--secondary)] ${className}`}
    >
      <div className="top-article items-center flex gap-2">
        <img
          src={el.img}
          alt="image"
          className="w-[90px] h-[90px] object-cover"
        />
        {cardElement(el)}
      </div>

      {current == 1 ? skils(el.skill) : ''}
    </article>
  ));
};

export default ProfileCard;
