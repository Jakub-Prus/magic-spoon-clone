import Button from "./Button";

const LastCallToAction = () => {
  return (
    <section className="flex h-80 w-full animate-gradient-banner flex-col items-center justify-center bg-gradient-to-r from-[#E30BA6] to-[#5B00ED] bg-contain bg-repeat text-center text-white md:py-10 ">
      <div className="md:mt-4 md:flex md:flex-row md:items-center md:justify-center">
        <h2 className="mb-8 text-4xl font-bold md:mr-12 md:text-6xl">
          Happiness{" "}
          <span
            style={{
              textStroke: "1px #ffffff",
              WebkitTextStroke: "1px #ffffff",
            }}
            className="text-transparent"
          >
            100% Guaranteed
          </span>
        </h2>
        <Button text={"TRY NOW"} />
      </div>
      <a href="" className="mt-8 text-sm font-semibold md:mb-8 md:mt-0">
        SEE TERMS OF USE.
      </a>
    </section>
  );
};

export default LastCallToAction;
