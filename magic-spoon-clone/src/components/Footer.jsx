import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-start bg-black pb-10 text-white">
      <button className="mt-8 rounded-full border border-white bg-black px-8 py-3 text-xl font-bold">
        CONTACT US
      </button>
      <div className="mt-10 flex h-8 w-44 flex-row items-center justify-between">
        <InstagramIcon style={{ fontSize: "2.5rem" }} />
        <FacebookIcon style={{ fontSize: "2.5rem" }} />
        <TwitterIcon style={{ fontSize: "2.5rem" }} />
      </div>
      <form
        action=""
        className="mx-auto flex max-w-4xl flex-col items-center gap-y-2 pt-2 text-2xl sm:text-3xl"
      >
        <p className="center-center pt-12 text-base font-light">
          Don`t miss the magic:
        </p>

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
          className="w-full rounded-full border border-solid border-white bg-black px-8 py-3 text-center text-xl text-white"
        />
        <button className="w-full rounded-full border border-white bg-black px-8 py-3 text-xl font-bold">
          SUBSCRIBE
        </button>
      </form>
      <div className="mt-4 flex flex-col items-center text-4xl font-bold">
        <h1>MAGIC</h1>
        <h1>SPOON</h1>
      </div>
      <p className="relative w-4/5 text-center text-xs">
        Terms of Use • Privacy Policy • Accessibility Policy • FAQ • Become an
        Affiliate • Reviews • Jobs • Track Orders • Store Locator • Terms of
        Service • Refund policy • For Creators
      </p>
      <p className="mt-4 text-xs text-gray-600">© 2023 Magic Spoon</p>
    </footer>
  );
};

export default Footer;
