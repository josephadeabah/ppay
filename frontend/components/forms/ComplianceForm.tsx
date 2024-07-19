export default function ComplianceForm() {
  return (
    <section className="dark:bg-gray-900">
      <span className="p-4 text-xs font-bold text-gray-400 dark:text-gray-100">
        This data is only collected for the purposes of analytics and insight
        into global wage and salary trends and labor compliance. We do not share
        this data with anybody and you have our word.
      </span>
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Submit Compliance Data
        </h2>
        <form action="#">
          <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="company-name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                name="company-name"
                id="company-name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Type company name"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="industry"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Industry
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Industry of employment"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="City, State, Country"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="contact-person"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Person
              </label>
              <input
                type="text"
                name="contact-person"
                id="contact-person"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Contact person for the company"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Email
              </label>
              <input
                type="email"
                name="contact-email"
                id="contact-email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Contact email address"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="multiple_files"
              >
                Upload compliance files
              </label>
              <input
                type="file"
                name="compliance-file"
                id="compliance-file"
                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                multiple
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
