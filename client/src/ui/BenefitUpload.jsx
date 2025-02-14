import Benefit from "./Benefit";
import { Message, Profile2User, Share } from "iconsax-react";
function BenefitUpload() {
  return (
    <div className="flex justify-between gap-2">
      <Benefit>
        <Share size="40" color="black" />
        <p>
          داده‌های خود را با دیگران به اشتراک بگذارید و به رشد جامعه داده‌کاوی
          کمک کنید.
        </p>
      </Benefit>
      <Benefit>
        <Profile2User size="40" color="black" />
        <p>
          تجزیه‌وتحلیل‌های جدید روی داده‌های شما توسط کاربران دیگر انجام می‌شود.
        </p>
      </Benefit>
      <Benefit>
        <Message size="40" color="black" />
        <p>
          نظرات و بازخوردهای ارزشمند دریافت کنید و کیفیت داده‌های خود را بهبود
          دهید.
        </p>
      </Benefit>
    </div>
  );
}

export default BenefitUpload;
