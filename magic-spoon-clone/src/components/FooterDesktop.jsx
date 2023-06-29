import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterDesktop = () => {
  return (
    <div className="items hidden w-[90%] flex-row justify-between pb-10 sm:flex">
      <div className="mt-8 flex w-1/2 flex-col items-center justify-start">
        <div className="">
          <div className="mt-8 font-bold">
            <h1 className="text-7xl">MAGIC SPOON</h1>
          </div>
          <p className="relative mt-4 w-4/5 text-left text-sm font-light">
            Terms of Use • Privacy Policy • Accessibility Policy • FAQ • Become an
            Affiliate • Reviews • Jobs • Track Orders • Store Locator • Terms of Service •
            Refund policy • For Creators
          </p>
          <div className="flex flex-row justify-start">
            <button className="mt-8 rounded-full border-2 border-white bg-black px-8 py-3 text-2xl font-bold">
              CONTACT US
            </button>
            <div className="ml-8 mt-10 flex h-8 w-44 flex-row items-center justify-between">
              <InstagramIcon style={{ fontSize: "2.5rem" }} />
              <FacebookIcon style={{ fontSize: "2.5rem" }} />
              <TwitterIcon style={{ fontSize: "2.5rem" }} />
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-600">© 2023 Magic Spoon</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="pt-12 text-xl font-semibold">Don`t miss the magic:</p>
        <form
          action=""
          className="mx-auto flex max-w-4xl flex-row items-center gap-y-2 pt-2 text-2xl sm:text-3xl"
        >
          <label htmlFor="email" className="absolute -left-40">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            minLength="3"
            maxLength="60"
            placeholder="Your email"
            className="w-3/5 rounded-full border-2 border-solid border-white bg-black px-4 py-3 text-left text-2xl text-white"
          />
          <button className="ml-6 w-2/5 rounded-full border-2 border-white bg-black px-8 py-3 text-2xl font-bold">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterDesktop;
