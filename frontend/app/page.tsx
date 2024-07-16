"use client";

import { Accordion, Button, Carousel, Navbar } from "flowbite-react";

const LandingPage = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
            PayWage
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Sign Up</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/dashboard">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex h-screen flex-col lg:flex-row">
        {/* Left container */}
        <div className="flex-1 bg-gray-800 lg:h-auto lg:w-1/3">
          <div className="py-4 text-white">
            <div className="py-4 text-center text-5xl font-bold sm:px-6 lg:px-8">
              <p>The Global Wage Transparency Platform.</p>
            </div>
          </div>
        </div>

        {/* Right container */}
        <div className="flex-1 lg:h-auto lg:w-2/3">
          <Carousel pauseOnHover>
            {/* Carousel items */}
            <div className="flex h-96 items-center justify-center rounded-none bg-gray-50 lg:h-full">
              <div className="w-full max-w-[270px] text-lg font-bold text-gray-600">
                The tool empowers employees to negotiate fair salaries aligned
                with recommended pay standards.
              </div>
            </div>
            <div className="flex h-96 items-center justify-center rounded-none bg-gray-50 lg:h-full">
              <p className="w-full max-w-[270px] text-lg font-bold text-gray-600">
                The tool Promotes adoption of uniform pay practices across
                companies, mitigating disparities in pay based on geographical
                location
              </p>
            </div>
            <div className="flex h-96 items-center justify-center rounded-none bg-gray-50 lg:h-full">
              <p className="w-full max-w-[270px] text-lg font-bold text-gray-600">
                Companies implementing fair pay practices enhance their appeal
                to top talent, highlighting their dedication to equitable wages.
              </p>
            </div>
            <div className="flex h-96 items-center justify-center rounded-none bg-gray-50 lg:h-full">
              <p className="w-full max-w-[270px] text-lg font-bold text-gray-600">
                Employees can use this tool to negotiate better salaries,
                encouraging standardized pay practices and enhancing employer
                branding.
              </p>
            </div>
          </Carousel>
        </div>
      </div>

      <main className="flex min-h-screen items-center justify-center bg-blue-100">
        <div className="flex h-screen w-full flex-col">
          <div className="flex flex-1 flex-col lg:flex-row">
            <div className="flex w-full flex-col space-y-0 lg:w-1/3">
              <div className="flex-1 bg-slate-50 p-4">
                <Accordion flush>
                  <Accordion.Panel>
                    <Accordion.Title>Why this Platform?</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Professionals in developing world are often compensated
                        less than their counterparts in the developed world,
                        despite most times doing the same job and in the same
                        company or otherwise.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>The Issue</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        This pay disparity, known as &rsquo;geographic pay
                        discrimination&rsquo; or &rsquo;pay arbitrage&rsquo;, is
                        unfair and driven by market forces exploiting lower
                        living costs and weaker labor protections in developing
                        countries.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>The Solution</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Paywage is a platform where Professionals can
                        anonymously report their wages and job descriptions to
                        compare pay across different countries. The tool
                        compares wages across countries and industries,
                        providing fair wage recommendations based on
                        qualifications and job responsibilities, excluding cost
                        of living or geographical location. It also tracks inflation adjusting pay accordingly.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-0 lg:w-1/3">
              <div className="flex-1 bg-gray-100 p-4"></div>
            </div>
            <div className="flex w-full flex-col space-y-0 lg:w-1/3">
              <div className="flex-1 bg-slate-50 p-4"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
