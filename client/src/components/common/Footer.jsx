import { PiPottedPlantDuotone } from "react-icons/pi";

export default function Footer() {

  return (
    <div className="w-full bg-[#021801] h-full">
      <div className="max-container">
        <div className="flex flex-col gap-6 md:flex-row justify-between md:items-start py-10">
          <div className="flex w-full items-start md:w-2/3">
            <div className="flex gap-2 w-1/2 flex-col items-start">
              <div className="flex gap-2 items-center text-lg md:text-xl font-bold">
                <PiPottedPlantDuotone className="lg:hidden" />
                <p className="ml-12">Planto.</p>
              </div>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem nostrum harum doloremque aperiam ipsam, quas ad
                ipsum repellat totam!
              </p>
            </div>

            <div className="flex gap-2 w-1/2 flex-col items-center justify-end">
              <p className="text-lg md:text-xl font-bold">Company</p>
              <p className="text-sm">About</p>
              <p className="text-sm">Contact</p>
              <p className="text-sm">Careers</p>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-1/3 flex-col items-start">
            <h3 className="text-lg md:text-xl font-bold">
              For Everyone Update
            </h3>
            <div className="md:w-auto border border-slate-400">
              <input
                className="bg-transparent border min-w-[200px] border-slate-400 py-1 px-2 placeholder:text-sm"
                placeholder="Enter Email"
              />
              <button className="bg-white scale-105 uppercase px-2 py-1 text-black rouned-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <p className="text-[#8F8F8F] text-center text-sm pb-4">
          © 2021 Planto. All rights reserved.
        </p>
      </div>
    </div>
  );
}
