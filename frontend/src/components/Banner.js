function Banner({ img, text }) {
  return (
    <div className="relative h-64 w-full flex justify-center items-center overflow-hidden border-b-4  border-white">
      <img
        className="absolute min-w-full min-h-full object-cover object-bottom"
        src={img}
        alt="background"
      />
      <div className="z-10 font-bebas text-3xl sm:text-5xl text-white p-15 whitespace-pre">
        {text}
      </div>
    </div>
  );
}

export default Banner;
