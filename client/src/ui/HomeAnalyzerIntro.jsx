import BenefitAnalyze from "./BenefitAnalyze";

function HomeAnalyzerIntro() {
  return (
    <div className="bg-white  p-10 mt-20 border-t-2 border-black/8">
      <div className="flex justify-between items-center">
        <div className="flex h-80 flex-col justify-center gap-8">
          <h3 className="text-xl font-semibold">چرا داده‌ها را تحلیل کنید؟</h3>
          <p className="text-gray-800">
            در دنیای امروز، تحلیل داده‌ها یکی از مهم‌ترین مهارت‌های مورد نیاز در
            علوم داده، هوش مصنوعی و یادگیری ماشین است. با بررسی و پردازش
            داده‌ها، می‌توان بینش‌های ارزشمندی استخراج کرد که در تصمیم‌گیری‌های
            بهتر، ساخت مدل‌های پیش‌بینی و حتی حل چالش‌های پیچیده علمی و تجاری
            مؤثر است.
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

        <BenefitAnalyze />
      </div>
    </div>
  );
}

export default HomeAnalyzerIntro;
