import PropTypes from "prop-types";

export default function Title({ text }) {
  return (
    <div className="">
      <h1 className="text-[2rem] md:text-[2.6rem] font-bold text-center underline">
        {text}
      </h1>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
