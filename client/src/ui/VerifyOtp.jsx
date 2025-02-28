import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "./Button";
import Input from "./Input";
import { useAuth } from "../context/AuthContext";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const { value } = useAuth();
  const verifyOTP = async (e) => {
    e.preventDefault();
    if (!otp) return;
    try {
      const { data } = await axios.post(
        "http://localhost:1313/api/users/verifyOtp",
        { phone: value.phone, otp, role: value.role, password: value.password }
      );
      toast.success("اکانت با موفقیت ساخته شد");
    } catch (error) {
      toast.error(error.response?.data?.message || "کد وارد شده صحیح نیست");
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      <form
        onSubmit={verifyOTP}
        className="flex flex-col w-80  gap-2 shadow-md  p-8"
      >
        <h2 className="text-2xl font-bold">کد تأیید را وارد کنید</h2>
        <Input
          type="text"
          placeholder="کد تایید را وارد کنید"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border p-2 mt-4"
        />
        <Button type={`contained`} className="bg-green-500 text-white p-2 mt-4">
          تأیید کد
        </Button>
      </form>
    </div>
  );
};

export default VerifyOtp;
