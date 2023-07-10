const ShopSubscription = ({ toggledSubscription, handleToggleSubscription }) => {
  return (
    <div className="my-2 flex h-6 w-full justify-center">
      <div
        className={`flex items-center justify-center rounded-full border-2 border-purple ${
          toggledSubscription ? "bg-purple" : ""
        }`}
      >
        <label
          htmlFor="toggle"
          className={`relative flex h-5 w-10 cursor-pointer items-center rounded-full`}
        >
          <input
            type="checkbox"
            id="toggle"
            className="sr-only "
            checked={toggledSubscription}
            onChange={handleToggleSubscription}
          />
          <span
            className={`absolute left-0 ml-1 h-4 w-4 rounded-full bg-purple transition-transform duration-300 ease-in-out ${
              toggledSubscription ? "translate-x-full transform bg-white" : ""
            }`}
          ></span>
        </label>
      </div>
      <h3
        className="ml-2 flex items-center justify-center text-center text-base font-normal uppercase underline"
        onClick={handleToggleSubscription}
      >
        SUBSCRIBE & SAVE(25%)
      </h3>
    </div>
  );
};

export default ShopSubscription;
