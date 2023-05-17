export const Card = () => {
  return (
    <div className="w-56 h-60 bg-white cursor-pointer">
      <figure className="relative w-full h-4/5 mb-2">
        <span className="absolute bottom-0 left-0 px-2 m-2 bg-white/60 rounded-full text-black text-sm">
          Label
        </span>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/wireless-headphone-display-in-the-store-royalty-free-image-1678138342.jpg"
          alt="headphones"
          className="w-full h-full object-cover rounded-lg"
        />
        <button className="absolute w-6 h-6 top-0 right-0 m-2 p-1 flex justify-center items-center bg-white rounded-full font-bold">
          +
        </button>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">Category</span>
        <span className="text-lg font-semibold">$300</span>
      </p>
    </div>
  );
};