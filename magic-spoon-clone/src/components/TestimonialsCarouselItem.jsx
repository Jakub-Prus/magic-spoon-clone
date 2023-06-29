const TestimonialsCarouselItem = ({
  text,
  personName,
  personAbout,
  avatarPath,
}) => {
  return (
    <div className="relative mb-20 flex flex-col items-center justify-start bg-white px-6 pb-28 pt-24 text-purple md:mx-1 md:w-1/3 md:first-of-type:ml-3 md:last-of-type:mr-3">
      <p className="pb-8 text-center text-xl text-purple md:w-3/4 md:text-3xl">{text}</p>
      <h4
        style={{
          textStroke: "1px #3f0791",
          WebkitTextStroke: "1px #3f0791",
        }}
        className="text-center text-2xl text-white md:hidden"
      >
        {personName}
      </h4>
      <h4
        style={{
          textStroke: "2px #3f0791",
          WebkitTextStroke: "2px #3f0791",
        }}
        className="hidden text-center text-4xl text-white md:block md:w-3/4"
      >
        {personName}
      </h4>
      <p className="text-center text-sm font-normal md:w-[80%] md:text-lg">
        {personAbout}
      </p>
      <img
        src={avatarPath}
        alt="person behind testimonial"
        className="absolute -bottom-16 rounded-full"
      />
    </div>
  );
};

export default TestimonialsCarouselItem;
