"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import PaginationComponent from "@/components/pagination/pagination";
import SliderComponent from "@/components/slider/Slider";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
} from "@nextui-org/react";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { companies } from "./data";

const CompaniesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 9;
  const totalPages = Math.ceil(companies.length / companiesPerPage);

  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState<number[]>([0, 10000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLocationFilter(event.target.value);
  };

  const handleIndustryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setIndustryFilter(event.target.value);
  };

  const handleSizeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSizeFilter(value);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredCompanies = companies.filter((company) => {
    const size = parseInt(company.size.split(" ")[0].replace(",", ""));
    const isLocationMatch =
      locationFilter === "" || company.location.includes(locationFilter);
    const isIndustryMatch =
      industryFilter === "" || company.industry === industryFilter;
    const isSizeMatch = size >= sizeFilter[0] && size <= sizeFilter[1];
    const isSearchMatch =
      searchQuery === "" ||
      company.name.toLowerCase().includes(searchQuery.toLowerCase());

    return isLocationMatch && isIndustryMatch && isSizeMatch && isSearchMatch;
  });

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany,
  );

  return (
    <div className="mx-auto px-4 py-8">
      <div className="min-h-screen">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="mb-8 space-y-4">
              <input
                type="text"
                placeholder="Search companies"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
              <DropdownSelect
                placeholder="Location"
                selectedValue={locationFilter}
                options={[
                  { label: "All", value: "" },
                  { label: "New York, USA", value: "New York, USA" },
                  { label: "San Francisco, USA", value: "San Francisco, USA" },
                  { label: "London, UK", value: "London, UK" },
                  { label: "Berlin, Germany", value: "Berlin, Germany" },
                  { label: "Paris, France", value: "Paris, France" },
                  { label: "Sydney, Australia", value: "Sydney, Australia" },
                  { label: "Tokyo, Japan", value: "Tokyo, Japan" },
                  { label: "Accra, Ghana", value: "Accra, Ghana" },
                ]}
                onChange={handleLocationChange}
              />
              <DropdownSelect
                placeholder="Industry"
                selectedValue={industryFilter}
                options={[
                  { label: "All", value: "" },
                  { label: "Technology", value: "Technology" },
                  { label: "Travel & Tourism", value: "Travel & Tourism" },
                  { label: "Communications", value: "Communications" },
                  { label: "Telecommunications", value: "Telecommunications" },
                  { label: "Healthcare", value: "Healthcare" },
                ]}
                onChange={handleIndustryChange}
              />
              <DropdownSelect
                placeholder="Company Rating"
                selectedValue={ratingFilter}
                options={[
                  { label: "All", value: "" },
                  // Add actual ratings here when available
                ]}
                onChange={(e) => setRatingFilter(e.target.value)}
              />
              <div className="flex flex-col">
                <SliderComponent
                  id="companySize"
                  minValue={0}
                  maxValue={10000}
                  step={10}
                  value={sizeFilter}
                  onChange={handleSizeChange}
                  label="Size"
                />
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Explore Similar Searches
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Salaries</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Employee Retention</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Work Life Balance</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Work Environment</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Innovation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Corporate Culture</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Diversity</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Job Security</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Company Reviews</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="."
                      className="flex items-center space-x-2 text-sm text-gray-800 hover:text-gray-500 hover:no-underline dark:text-blue-400"
                    >
                      <HiOutlineSearch className="h-5 w-5 text-gray-500" />
                      <span>Best Companies by Jobs</span>
                    </a>
                  </li>
                  {/* Add more similar searches here */}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {currentCompanies.map((company, index) => (
                <Card
                  key={index}
                  className={twMerge(
                    "mx-auto w-full max-w-xl transition-shadow duration-300 hover:shadow-md",
                  )}
                  isHoverable
                >
                  <CardHeader>
                    <div className="flex items-center">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="mr-4 h-12 w-12"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {company.name}
                        </h4>
                        <p className="text-gray-500">{company.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Tooltip
                      content={company.description}
                      placement="bottom"
                      className="w-full max-w-sm bg-white p-5 text-gray-900 dark:bg-slate-800 dark:text-gray-50"
                    >
                      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-100">
                        <strong>Description:</strong> {company.description}
                      </p>
                    </Tooltip>
                  </CardBody>
                  <CardFooter className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500">
                        Reviews: {company.reviews}
                      </p>
                      <p className="text-gray-500">
                        Salaries: {company.salaries}
                      </p>
                      <p className="text-gray-500">Jobs: {company.jobs}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <PaginationComponent
          initialPage={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CompaniesPage;
