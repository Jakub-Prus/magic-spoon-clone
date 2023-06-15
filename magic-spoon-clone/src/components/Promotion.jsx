const Promotion = ({ amount }) => {
  return (
    <div className="z-50 grid min-h-[2.5rem] w-full animate-gradient-banner place-content-center bg-gradient-to-r from-[#E30BA6] to-[#5B00ED] bg-contain bg-repeat font-light text-white">
      <p>✨FREE Spoon with ${amount}+ Order✨</p>
    </div>
  );
};

export default Promotion;
