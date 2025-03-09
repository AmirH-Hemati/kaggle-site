import BenefitUpload from "./BenefitUpload";
function HomeUploaderIntro() {
  return (
    <div className="bg-white flex flex-col gap-6  p-10 my-10 border-t-2 border-black/8">
      <div className="flex flex-row-reverse justify-between items-center gap-10">
        <div className="flex h-80 flex-col justify-evenly">
          <h3 className="text-xl font-semibold">
            ورود به دنیای ابزار هاش هوش مصنوعی , نحوه کار با این ابزار بزرگ را
            یاد بگیرید{" "}.
          </h3>
          <p className="text-gray-800">
            به دنیای مقالات هوش مصنوعی بپیوندید , انها را بخوانید و از این ابزار
            بزرگ در کار های خود استفاده کنید تا پیشرفت کنید . با ابزار های هوش
            مصنوعی در کار خود بهترین شوید....
          </p>
        </div>
        <img
          src="https://vectormine.b-cdn.net/wp-content/uploads/machine_learning2-1.jpg"
          alt=""
          className=" aspect-video w-1/2 object-cover "
        />
      </div>
      <div className="space-y-5">
        {/* <h2 className="text-xl font-semibold ">ما چه کار انجام میدهیم؟ </h2>

        <BenefitUpload /> */}
      </div>
    </div>
  );
}

export default HomeUploaderIntro;
