function SignIn() {
  function handelLoginForm(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handelLoginForm}
      className="w-96 h-80 p-6 shadow-md flex flex-col rounded-sm justify-evenly"
    >
      <input
        type="text"
        placeholder="User Name"
        className="border-2 border-black/50 p-2 rounded-sm"
      />
      <input
        type="text"
        placeholder="email"
        className="border-2 border-black/50 p-2 rounded-sm"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2 border-black/50 p-2 rounded-sm"
      />
      <select name="" id="">
        <option value="uploader">uploader</option>
        <option value="analyzer">analyzer</option>
      </select>
      <button className="w-full p-2 bg-red-500 text-white rounded-sm">
        submit
      </button>
    </form>
  );
}

export default SignIn;

// return (
//   <div className="w-full flex justify-evenly">
//     <Link
//       to={`/signInUploader`}
//       className="w-80 h-72 bg-white shadow-md rounded-tr-2xl rounded-bl-2xl hover:bg-gray-200 cursor-pointer  transition"
//     >
//       Uploader
//     </Link>
//     <Link
//       to={`/signInAnalyze`}
//       className="w-80 h-72 bg-white shadow-md rounded-tr-2xl rounded-bl-2xl hover:bg-gray-200 cursor-pointer  transition"
//     >
//       Analyz
//     </Link>
//   </div>
// );
