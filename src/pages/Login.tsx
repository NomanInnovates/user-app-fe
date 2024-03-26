import Login from "../components/auth/Login";

function index() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased h-screen flex justify-center items-center">
      <div className="max-w-screen-xl min-w-[500px] ">
        <Login />
      </div>
    </section>
  );
}

export default index;
