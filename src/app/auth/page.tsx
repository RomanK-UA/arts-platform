const page = async () => {
  return (
    <div className="flex justify-center items-center border-2 border-accent">
      <div className="w-full max-w-md p-4 border-2 border-secondary rounded-lg">
        <form className="flex flex-col space-y-4" action="">
          <label htmlFor="username">Username or email</label>
          <input type="text" id="username" className="p-2 border rounded" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="p-2 border rounded" />
          <button className="p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default page;