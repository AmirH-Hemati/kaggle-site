import { Link } from "react-router-dom";
import Button from "./Button";
import TypeWritetext from "./TypeWritetext";
import Members from "./Members";

function HomeIntro() {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <div className="w-1/2  h-80 flex flex-col justify-evenly  ">
          <TypeWritetext text="بهه انجمن هوش مصنوعی ایران خوش آمدید ..." />
          <p>
            به انجمن هوش مصنوعی بپیوندید , با ابزار های هوش مصنوعی مدرن و جدید
            اشنا شوید . مقالات هوش مصنوعی را بخوانید و دانش خود را افزایش دهید و
            در مسابقات شرکت کنید و برنده شویــــــــد
          </p>
          <div className="flex gap-2">
            <Link to={`/signin`}>
              <Button type={`primary`}>ثبت نام</Button>
            </Link>
            <Link to={`/login`}>
              <Button type={`contained`}>ورود </Button>
            </Link>
          </div>
        </div>
        <img
          src="https://www.copyright.com/wp-content/uploads/2022/09/3-challenges-AI-768x488.jpg"
          alt=""
          className=" aspect-video w-1/2  object-cover "
        />
      </div>
    </>
  );
}

export default HomeIntro;

{
  /* <div className="] w-full flex flex-col  gap-4">
        <h2 className="text-xl font-semibold ">چه کسانی در کگل هستند ؟ .</h2>
        <Members />
      </div> */
}
