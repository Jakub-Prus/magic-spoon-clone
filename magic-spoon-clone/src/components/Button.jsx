const Button = ({ text }) => {
  return (
    <button
      className={`z-50 rounded-full bg-purple px-8 py-4 text-2xl font-bold text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
