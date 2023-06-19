import Button from "./Button";

const LastCallToAction = () => {
  return (
    <section className="flex h-96 w-full animate-gradient-banner flex-col items-center justify-center bg-gradient-to-r from-[#E30BA6] to-[#5B00ED] bg-contain bg-repeat text-center text-white ">
      <h2 className="text-4xl font-bold">Happiness 100% Guaranteed</h2>
      <Button text={"TRY NOW"} />
      <a href="" className="pt-8 text-sm">
        SEE TERMS OF USE.
      </a>
    </section>
  );
};

export default LastCallToAction;
