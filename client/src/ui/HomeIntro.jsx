import { Link } from "react-router-dom";
import Button from "./Button";
import TypeWritetext from "./TypeWritetext";
import Members from "./Members";

function HomeIntro() {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="w-1/2  h-70 flex flex-col justify-evenly">
          <TypeWritetext text="بهه انجمن هوش مصنوعی ایران خوش آمدید ..." />
          <p>
            به انجمن هوش مصنوعی بپیوندید . داده ها را وارد کنید آنالیز و روی
            آنها کار کنید و با انجام انها امتیاز کسب کنید
          </p>
          <div className="flex gap-2">
            <Button type={`primary`}>ورود با گوگل</Button>
            <Link to={`/signIn`}>
              <Button type={`contained`}>ورود با ایمیل</Button>
            </Link>
          </div>
        </div>
        <img
          src="https://www.kaggle.com/static/images/home/logged-out/hero-illo@3x.png"
          alt=""
          className=" w-96 h-96 object-cover "
        />
      </div>
      <div className="w-full flex flex-col  gap-4">
        <h2 className="text-xl font-semibold ">چه کسانی در کگل هستند ؟ .</h2>
        <Members />
      </div>
    </>
  );
}

export default HomeIntro;
