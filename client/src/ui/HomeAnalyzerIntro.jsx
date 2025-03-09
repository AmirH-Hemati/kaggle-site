import BenefitAnalyze from "./BenefitAnalyze";

function HomeAnalyzerIntro() {
  return (
    <div className="bg-white  p-10 mt-20 border-t-2 border-black/8">
      <div className="flex justify-between items-center">
        <div className="flex h-80 flex-col justify-center gap-8">
          <h3 className="text-xl font-semibold">
            در مسابقات شرکت کنید و خود را به چالش بکشید .
          </h3>
          <p className="text-gray-800">
            از مجموعه داده های موجود انتخاب کنید و بر روی آنها کار بکنید و مدل
            خود را ارسال کنید . به بهترین مدل جایزه تعلق میگیرید.
          </p>
        </div>
        <img
          src="https://cdn-llnof.nitrocdn.com/tUhsYyMyuYYlQHhzCKCWCSRurZjIffeY/assets/images/optimized/rev-b04a0dc/neuroleadership.com/wp-content/uploads/2024/10/How-to-Use-AI-to-Improve-Your-Thinking-768x435.png"
          alt=""
          className=" aspect-video w-1/2 object-cover "
        />
      </div>
      <div className="space-y-5">
        <h2 className="text-xl font-semibold ">
          شرایط مسابقه به چه صورت است ؟
        </h2>

        <BenefitAnalyze />
      </div>
    </div>
  );
}

export default HomeAnalyzerIntro;
