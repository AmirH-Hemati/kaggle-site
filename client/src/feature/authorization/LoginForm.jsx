function LoginForm() {
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
        type="password"
        placeholder="Password"
        className="border-2 border-black/50 p-2 rounded-sm"
      />
      <button className="w-full p-2 bg-red-500 text-white rounded-sm">submit</button>
    </form>
  );
}

export default LoginForm;
