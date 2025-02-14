import Member from "./Member";

function Members() {
  return (
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
  );
}

export default Members;
