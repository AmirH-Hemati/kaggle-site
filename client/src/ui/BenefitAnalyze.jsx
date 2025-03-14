import { Chart1, Code, ProgrammingArrow } from "iconsax-react";
import Benefit from "./Benefit";

function BenefitAnalyze() {
  return (
    <div className="flex justify-between gap-2">
      <Benefit>
        <Code size="40" color="black" />
        <p>
          شرکت های و افراد داده ها را در اختیار شما میگذارند . شما با انتخاب
          داده ها و ارسال مدل میتوانید به راحتی کسب درامد کنید.
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
