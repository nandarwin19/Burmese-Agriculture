import { FaRegComments } from "react-icons/fa";

export default function Comments() {
  return (
    <div className="flex flex-col gap-4 py-7">
      <div className="gap-4 py-7 flex">
        <FaRegComments className="text-3xl" />
        <p className="text-xl">Comments</p>
      </div>
      <div className="bg-white/90 text-black w-auto shadow-3xl p-2 rounded-md">
        <div className="flex items-center gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s"
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-md font-semibold">John Doe</p>
            <p className="text-[10px] text-gray-400">11 May 2022</p>
          </div>
        </div>
        <p className="text-sm text-gray-200 py-2">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}
