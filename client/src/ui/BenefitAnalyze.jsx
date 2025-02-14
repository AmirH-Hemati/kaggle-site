import { Chart1, Code, ProgrammingArrow } from "iconsax-react";
import Benefit from "./Benefit";

function BenefitAnalyze() {
  return (
    <div className="flex justify-between gap-2">
      <Benefit>
        <Code size="40" color="black" />
        <p>
          مهارت‌های خود را در تجزیه‌وتحلیل داده تقویت کنید و با کار روی داده‌های
          واقعی تجربه کسب کنید.
        </p>
      </Benefit>
      <Benefit>
        <Chart1 size="40" color="black" />
        <p>
          الگوریتم‌ها و مدل‌های یادگیری ماشین خود را روی داده‌های متنوع تست کنید
          و آن‌ها را بهبود دهید.
        </p>
      </Benefit>
      <Benefit>
        <ProgrammingArrow size="40" color="black" />
        <p>
          در چالش‌های علمی و مسابقات داده‌کاوی شرکت کنید و امتیاز و شهرت کسب
          کنید.
        </p>
      </Benefit>
    </div>
  );
}

export default BenefitAnalyze;
