export default function ForgotPassword() {
  return (
    <section className="flex h-screen bg-white dark:bg-gray-900">
      {/* Left container */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center px-6 py-8 lg:py-0">
          <a
            href="/"
            className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <span className="flex items-center justify-center overflow-hidden rounded-xl">
              <span className="flex h-7 w-auto items-center justify-center rounded-xl bg-blue-600 p-1 text-xs font-extrabold text-white">
                Pay
              </span>
              <span className="inline-block py-2 text-xs font-extrabold text-blue-600 dark:text-white">
                Sight
              </span>
            </span>
          </a>
          <div className="w-full rounded-lg bg-white dark:border dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Forgot your password?
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Reset Password
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Remember your password?{" "}
                  <a
                    href="/auth/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Right container */}
      <div className="hidden w-full items-center justify-center bg-primary-600 dark:bg-gray-950  lg:flex lg:w-1/2">
        <section className="bg-primary-600 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
          <div className="mx-auto flex max-w-[52.5rem] flex-col items-center gap-y-16 px-6 py-32 lg:max-w-[78rem]">
            <div className="mx-auto max-w-[36.75rem] text-center">
              <h2 className="mb-3 text-3xl font-bold lg:text-4xl">
                Explore the world’s leading Wages and Salaries Insights Platform
              </h2>
              <p className="text-base">
                Our platform provides comprehensive insights, tailored to your
                needs. We provide data-driven insights to help you make better
                decisions.
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-12 rounded-lg bg-gray-50 px-6 py-12 dark:bg-gray-900 lg:flex-row lg:justify-center lg:gap-6 lg:px-12">
              <div>
                <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                  500k+
                </h4>
                <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                  Monthly Visitors
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                  250k+
                </h4>
                <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                  Registered Users
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                  175k+
                </h4>
                <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                  Monthly Reports
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                  100k+
                </h4>
                <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                  Email Subscribers
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
