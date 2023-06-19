import Button from "./Button";
import cerealBoxes from "../assets/img/cereal-boxes-standing.png";
import backgroundLeft from "../assets/img/call-to-action/call-to-action-background-left.svg";
import backgroundRight from "../assets/img/call-to-action/call-to-action-background-right.svg";
import backgroundBottomRight from "../assets/img/call-to-action/call-to-action-background-bottom-right.svg";
import backgroundStar from "../assets/img/call-to-action/star.svg";

const CallToAction = () => {
  return (
    <section className="relative flex h-auto w-full flex-col items-center justify-center bg-[url('./assets/img/background-call-to-action.jpg')] bg-cover py-24">
      <h2 className="z-50 w-64 text-center text-4xl text-white">
        A whole world of flavor.
      </h2>
      <img src={cerealBoxes} alt="" className="z-50" />
      <img
        src={backgroundLeft}
        alt="background mountain left"
        className="absolute -left-4 top-24 z-20 w-64"
      />
      <img
        src={backgroundRight}
        alt="background mountain right"
        className="absolute -right-4 top-16 z-10 w-64 object-cover"
      />
      <img
        src={backgroundBottomRight}
        alt="background mountain bottom right"
        className="absolute -right-0 bottom-3 z-10 w-40 object-cover"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute right-8 top-16 z-10 w-4"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute right-16 top-10 z-10 w-4"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute left-20 top-40 z-10 w-4 rotate-45"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute left-8 top-10 z-10 w-5 rotate-12"
      />

      <Button text={"TRY NOW"} />
    </section>
  );
};

export default CallToAction;
