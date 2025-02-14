import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Member from "../ui/Member";
import TypeWritetext from "../ui/TypeWritetext";

function Home() {
  return (
    <div className="bg-[#FCFCFD] flex flex-col w-full h-full justify-between overflow-auto p-10">
      <div className="flex justify-between items-center ">
        <div className="w-1/2  h-70 flex flex-col justify-evenly">
          <TypeWritetext
            text="بهه انجمن هوش مصنوعی ایران خوش آمدید ..."
          />
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
        <div className="flex justify-evenly w-full  gap-5">
          <Member
            title={`یاد بگیرید . !!!`}
            description={`با انجام چالش ها ومسابقات دانش برنامه نویسی خود را افزایش دهید
`}
          />
          <Member
            title={`برنامه نویسان `}
            description={`
              برنامه نویسان میتوانند با انجام چالش ها و مدل ها امتیاز کسب کنند
                `}
          />
          <Member
            title={`محققان`}
            description={`
           محققان میتوانند مدل ها و داده های خود را برای انالیز و ساخت مدل بر
              روی انها وارد کنند
                `}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
