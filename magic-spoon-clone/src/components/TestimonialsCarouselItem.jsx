const TestimonialsCarouselItem = ({
  text,
  personName,
  personAbout,
  avatarPath,
}) => {
  return (
    <div className="relative mb-20 flex flex-col items-center justify-start bg-white px-6 pb-28 pt-10 text-purple">
      <p className="pb-8 text-center text-xl text-purple">{text}</p>
      <h4
        style={{
          textStroke: "1px #3f0791",
          WebkitTextStroke: "1px #3f0791",
        }}
        className="text-2xl text-white"
      >
        {personName}
      </h4>
      <p className="text-center text-sm font-normal">{personAbout}</p>
      <img
        src={avatarPath}
        alt="person behind testimonial"
        className="absolute -bottom-16 rounded-full"
      />
    </div>
  );
};

export default TestimonialsCarouselItem;
