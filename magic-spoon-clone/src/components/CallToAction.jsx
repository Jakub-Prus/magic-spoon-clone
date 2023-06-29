import Button from "./Button";
import cerealBoxes from "../assets/img/call-to-action/cereal-boxes-standing.png";
import cerealBoxesCerealBoxesRight from "../assets/img/call-to-action/cereal-boxes-standing-right.png";
import cerealBoxesCerealBoxesLeft from "../assets/img/call-to-action/cereal-boxes-standing-left.png";
import backgroundLeft from "../assets/img/call-to-action/call-to-action-background-left.svg";
import backgroundLeftDesktop from "../assets/img/call-to-action/call-to-action-background-left-desktop.svg";
import backgroundRight from "../assets/img/call-to-action/call-to-action-background-right.svg";
import backgroundMoon from "../assets/img/call-to-action/background-moon.svg";
import backgroundBottomRight from "../assets/img/call-to-action/call-to-action-background-bottom-right.svg";
import backgroundBottomRightDesktop from "../assets/img/call-to-action/call-to-action-background-bottom-right-desktop.svg";
import backgroundBottomRightDesktop2 from "../assets/img/call-to-action/call-to-action-background-bottom-right-desktop2.svg";
import backgroundBottomLeftDesktop from "../assets/img/call-to-action/call-to-action-background-bottom-left.svg";
import backgroundBottomLeftDesktop2 from "../assets/img/call-to-action/call-to-action-background-bottom-left2.svg";
import backgroundStar from "../assets/img/call-to-action/star.svg";

const CallToAction = () => {
  return (
    <section className="relative flex h-auto w-full flex-col items-center justify-center bg-[url('./assets/img/call-to-action/background-call-to-action.jpg')] bg-cover py-24 md:min-h-[800px] md:bg-[url('./assets/img/call-to-action/background-call-to-action-desktop.svg')]">
      <h2 className="z-50 w-64 text-center text-4xl text-white md:hidden">
        A whole world of flavor.
      </h2>
      <div className="relative z-30 flex w-full flex-col items-center md:flex-row md:justify-center">
        <img src={cerealBoxes} alt="" className="z-40 block md:hidden" />
        <div className="z-50 flex flex-col items-center">
          <h2 className="z-50 hidden w-96 text-center text-8xl text-white md:block">
            A whole world of flavor.
          </h2>
          <Button text={"TRY NOW"} />
        </div>
        <img
          src={cerealBoxesCerealBoxesRight}
          alt=""
          className="z-10 hidden md:absolute md:-right-20 md:block md:w-[610px]"
        />
        <img
          src={cerealBoxesCerealBoxesLeft}
          alt=""
          className="z-10 hidden md:absolute md:-left-28 md:block md:w-[610px]"
        />
      </div>
      <img
        src={backgroundLeft}
        alt="background mountain left"
        className="absolute -left-4 top-24 z-20 w-64 md:hidden"
      />
      <img
        src={backgroundLeftDesktop}
        alt="background mountain left"
        className="absolute -left-[450px] bottom-[32%] z-20 hidden md:block"
      />
      <img
        src={backgroundRight}
        alt="background mountain right"
        className="absolute -right-4 top-16 z-10 w-64 object-cover"
      />
      <img
        src={backgroundBottomRight}
        alt="background mountain bottom right"
        className="absolute -right-0 bottom-3 z-50 w-40 object-cover md:hidden"
      />
      <img
        src={backgroundBottomRightDesktop}
        alt="background mountain bottom right"
        className="absolute -right-60 bottom-3 z-40 hidden max-w-[624px] -rotate-2 object-cover md:block"
      />
      <img
        src={backgroundBottomRightDesktop2}
        alt="background mountain bottom right"
        className="absolute -right-72 bottom-6 z-40 hidden max-w-[624px] object-cover md:block"
      />
      <img
        src={backgroundBottomLeftDesktop}
        alt="background mountain bottom right"
        className="absolute -left-12 bottom-3 z-30 hidden max-w-[340px] object-cover md:block"
      />
      <img
        src={backgroundBottomLeftDesktop2}
        alt="background mountain bottom right"
        className="absolute bottom-52 left-60 z-30 hidden max-w-[200px] object-cover md:block"
      />
      <img
        src={backgroundMoon}
        alt="background mountain bottom right"
        className="absolute bottom-[70%] left-[60%] z-10 hidden w-[15%] -rotate-45 object-cover md:block"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute right-8 top-16 z-10 w-4 md:right-44 md:top-32 md:w-7"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute right-16 top-10 z-10 w-4 md:w-7"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute right-8 top-16 z-10 w-4 md:right-[45%] md:top-32 md:w-7"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute right-16 top-10 z-10 w-4 md:right-[38%] md:w-7"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute left-20 top-40 z-10 w-4 rotate-45 md:w-7"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute left-8 top-10 z-10 w-5 rotate-12 md:top-14 md:w-7"
      />
      <img
        src={backgroundStar}
        alt="background star"
        className="absolute left-24 top-8 z-10 hidden w-5 rotate-12 md:block md:w-7"
      />
    </section>
  );
};

export default CallToAction;
