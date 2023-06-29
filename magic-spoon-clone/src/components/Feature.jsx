const Feature = ({ title, text }) => {
  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center text-[#bfefff] first:mt-0">
      <h2 className="w-60 text-center text-4xl font-bold md:text-5xl">{title}</h2>
      <p className="mt-4 w-48 text-center text-sm font-light md:w-52 md:text-xl md:font-normal">
        {text}
      </p>
    </div>
  );
};

export default Feature;
