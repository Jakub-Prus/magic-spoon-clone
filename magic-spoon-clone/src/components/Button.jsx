const Button = ({ text, otherProps }) => {
  return (
    <button
      className={`z-30 rounded-full bg-purple px-8 py-4 text-2xl font-bold text-white ${otherProps}`}
    >
      {text}
    </button>
  );
};

export default Button;
