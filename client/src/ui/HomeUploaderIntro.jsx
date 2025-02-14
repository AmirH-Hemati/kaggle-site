import BenefitUpload from "./BenefitUpload";
function HomeUploaderIntro() {
  return (
    <div>
      <div className="bg-white flex justify-between items-center p-10 mt-20 border-t-2 border-black/8">
        <div className="flex h-80 flex-col justify-center gap-8">
          <h3 className="text-xl font-semibold">
            📂 ورود به دنیای داده‌ها: آپلود و به‌اشتراک‌گذاری مجموعه داده‌ها
          </h3>
          <p className="text-gray-800">
            اگر محقق، دانشمند داده، یا حتی یک علاقه‌مند به داده‌ها هستید، این
            بخش برای شماست! اینجا می‌توانید داده‌های خود را آپلود کنید و با
            جامعه‌ای از تحلیل‌گران، برنامه‌نویسان و محققان به اشتراک بگذارید.
          </p>
        </div>
        <img
          src="https://www.kaggle.com/static/images/home/logged-out/hero-illo@3x.png"
          alt=""
          className=" w-96 h-96 object-cover "
        />
      </div>
      <div className="space-y-5">
        <h2 className="text-xl font-semibold ">
          چرا داده‌های خود را آپلود کنید؟
        </h2>

        <BenefitUpload />
      </div>
    </div>
  );
}

export default HomeUploaderIntro;
