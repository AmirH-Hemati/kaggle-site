import Benefit from "./Benefit";

function BenefitUpload() {
  return (
    <div className="flex justify-between gap-2">
      <Benefit
        text={`✅ داده‌های خود را با دیگران به اشتراک بگذارید و به رشد جامعه داده‌کاوی کمک کنید.
`}
      />
      <Benefit
        text={`✅تجزیه‌وتحلیل‌های جدید روی داده‌های شما توسط کاربران دیگر انجام می‌شود.`}
      />
      <Benefit
        text={`✅ نظرات و بازخوردهای ارزشمند دریافت کنید و کیفیت داده‌های خود را بهبود دهید.`}
      />
      <Benefit
        text={`✅ نظرات و بازخوردهای ارزشمند دریافت کنید و کیفیت داده‌های خود را بهبود دهید.`}
      />
    </div>
  );
}

export default BenefitUpload;
