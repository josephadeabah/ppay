export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-100">
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="flex flex-col space-y-0 w-full lg:w-1/3">
            <div className="flex-1 bg-blue-950 p-4">
              <h2 className="text-lg font-bold text-white">Why This System?</h2>
              <p className="text-white">
                Professionals in developing world are often compensated less than their counterparts in the developed world, despite most times doing the same job and in the same company or otherwise.
              </p>
            </div>
            <div className="flex-1 bg-blue-700 p-4">
              <h2 className="text-lg font-bold text-white">The Issue</h2>
              <p className="text-white">
                This pay disparity, known as &rsquo;geographic pay discrimination&rsquo; or &rsquo;pay arbitrage&rsquo;, is unfair and driven by market forces exploiting lower living costs and weaker labor protections in developing countries.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-0 w-full lg:w-1/3">
            <div className="flex-[2] bg-blue-950 p-4">
              <h2 className="text-lg font-bold text-white text-4xl">Global Wage Transparency</h2>
              <p className="text-white">
                A platform where Professionals can anonymously report their wages and job descriptions to compare pay across different countries.
              </p>
            </div>
            <div className="flex-[1] bg-blue-500 p-4">
              <h2 className="text-lg font-bold text-white">Impact</h2>
              <p className="text-white">
              Fair Wage Negotiation: The tool empowers employees to negotiate fair salaries aligned with recommended pay standards.
              </p>
              <p className="text-white">
              Standardized Pay Practices: Promotes adoption of uniform pay practices across companies, mitigating disparities in pay based on geographical location
              </p>
              <p className="text-white">
              Enhanced Employer Branding: Companies implementing fair pay practices enhance their appeal to top talent, highlighting their dedication to equitable wages.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-0 w-full lg:w-1/3">
            <div className="flex-1 bg-blue-600 p-4">
              <h2 className="text-lg font-bold text-white">Pay Equity Calculator</h2>
              <p className="text-white">
                A tool that compares wages across countries, providing fair wage recommendations based on qualifications and job responsibilities, excluding cost of living or geographical location.
              </p>
            </div>
            <div className="flex-1 bg-blue-800 p-4">
              <h2 className="text-lg font-bold text-white">Fair Wage Negotiation</h2>
              <p className="text-white">
                Employees can use this tool to negotiate better salaries, encouraging standardized pay practices and enhancing employer branding.
              </p>
            </div>
            <div className="flex-1 bg-blue-800 p-4">
              <h2 className="text-lg font-bold text-white">Join Us</h2>
              <p className="text-white">
                Together, we can address geographic pay discrimination and ensure fair compensation for all professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
