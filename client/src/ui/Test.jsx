import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Test = ({ setStep, setPhone }) => {
  const [phone, setPhoneNumber] = useState("");

  const sendOTP = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/send-otp",
        { phone }
      );
      toast.success(data.message);
      setPhone(phone);
      setStep(2);
    } catch (error) {
      toast.error(error.response?.data?.message || "خطا در ارسال OTP");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">ورود با شماره تلفن</h2>
      <input
        type="text"
        placeholder="شماره موبایل"
        value={phone}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border p-2 mt-4"
      />
      <button onClick={sendOTP} className="bg-blue-500 text-white p-2 mt-4">
        ارسال کد تأیید
      </button>
    </div>
  );
};

export default Test;
