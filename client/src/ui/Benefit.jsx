import { Link } from "react-router-dom";

function Benefit({ children }) {
  return (
    <Link to={`/allDataset`}>
      <div className="w-70 h-70 hover:scale-105 cursor-pointer flex flex-col justify-center gap-6 items-center rounded-tr-2xl rounded-bl-2xl bg-[#FCFCFD] shadow-xl p-4 ">
        {children}
      </div>
    </Link>
  );
}

export default Benefit;
