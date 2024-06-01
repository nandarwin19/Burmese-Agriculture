import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaPlay, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="max-container h-screen">
      <div className=" w-4/5 md:w-1/2 mt-16">
        <h1 className="roobert whitespace-nowrap text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold tracking-wide">
          Breath Natureal
        </h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure atque
          ipsam blanditiis iusto, molestias commodi magni quibusdam quaerat
          voluptate excepturi?
        </p>
        <div className="flex gap-6 mt-5">
          <button className="py-1 rounded-md tracking-wider px-4 md:px-5 flex items-center justify-center border border-gray-400">
            <Link to={`/search`}>Explore</Link>
          </button>
          <button className="flex items-center justify-center gap-2">
            <Link to={`/plant`}>
              <small className="w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center">
                <FaPlay className="text-[10px] md:text-md" />
              </small>
              Live Demo....
            </Link>
          </button>
        </div>
        <div className="hidden lg:flex flex-col bg-blur bg-[#d7d7d70b] items-start w-1/2 mt-20 gap-3 p-5 border-2 border-[#80808078] rounded-2xl">
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNl9hX3Bob3RvX29mX2FfcG9ydHJhaXRfb2ZfYV9mYXNoaW9uYWJsZV9zbWlsaV8xYmRlMDQwNy01YTE4LTQ4MTItYmNjOS1lZjBhYWVmMTE3NmZfMS5qcGc.jpg"
              alt="profile"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="text-sm">
              <p>Alena Patel</p>
              <p className="flex gap-1 text-[#FFF84E]">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              atque repellat quisquam veniam, ullam quia?
            </p>
          </div>
        </div>
      </div>

      <img
        src="/img/p-main.png"
        className="object-cover md:hidden w-44 mx-auto mt-8"
      />
    </div>
  );
}
