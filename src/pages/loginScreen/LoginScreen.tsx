import loginImage from "../../assets/images/cinema.svg";

const LoginScreen = () => {
  return (
    <div className="flex  h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="bg-white grid grid-cols-1 md:grid-cols-2  shadow sm:rounded-lg">
        <div className="md:w-full md:max-w-md space-y-8 m-12">
          <div>
            <h2 className="mt-6 text-center text-3xl md:text-6xl font-bold tracking-tight text-secondary">
              MyMovies website
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full h-10 justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-md font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-full md:max-w-md py-5">
          <img
            className="mx-auto max-h-fit h-36 md:h-fit  w-auto"
            src={loginImage}
            alt="Login Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
