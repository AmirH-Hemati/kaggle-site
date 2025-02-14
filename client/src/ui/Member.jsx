function Member({ title, description }) {
  return (
    <div className="flex-1 flex flex-col justify-evenly h-40 space-y-2 p-2 shadow-md border-2 border-black/20 rounded-sm w-[25%] ">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="flex items-center gap-1">
        <img
          src="https://www.kaggle.com/static/images/home/logged-out/learners-illo_light.svg"
          className="w-14 h-14 rounded-full"
          alt=""
        />
        <p className="text-gray-700 text-xs ">{description}</p>
      </div>
    </div>
  );
}

export default Member;
