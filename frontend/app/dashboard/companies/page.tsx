import React from "react";

interface Company {
  name: string;
  logo: string;
  reviews: number;
  salaries: number;
  jobs: number;
  location: string;
  size: string;
  industry: string;
  description: string;
}

const companies: Company[] = [
  {
    name: "Company A",
    logo: "https://img.logo.dev/google.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Company B",
    logo: "https://img.logo.dev/facebook.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 98,
    salaries: 40,
    jobs: 8,
    location: "San Francisco, USA",
    size: "1000-5000 employees",
    industry: "Finance",
    description: "A top financial firm.",
  },
  {
    name: "Company C",
    logo: "https://img.logo.dev/yandex.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 150,
    salaries: 60,
    jobs: 15,
    location: "London, UK",
    size: "200-500 employees",
    industry: "Healthcare",
    description: "A renowned healthcare company.",
  },
  {
    name: "Company D",
    logo: "https://img.logo.dev/apple.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 110,
    salaries: 55,
    jobs: 12,
    location: "Berlin, Germany",
    size: "50-200 employees",
    industry: "Automotive",
    description: "A pioneering automotive company.",
  },
  {
    name: "Company E",
    logo: "https://img.logo.dev/andela.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "Paris, France",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Company F",
    logo: "https://img.logo.dev/airbnb.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 100,
    salaries: 45,
    jobs: 9,
    location: "Sydney, Australia",
    size: "1000-5000 employees",
    industry: "Finance",
    description: "A top financial firm.",
  },
  {
    name: "Company G",
    logo: "https://img.logo.dev/zoom.us?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Education",
    description: "A leading educational institution.",
  },
  {
    name: "Company H",
    logo: "https://img.logo.dev/verizon.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Company I",
    logo: "https://img.logo.dev/twitter.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Education",
    description: "A leading educational institution.",
  },
  {
    name: "Company J",
    logo: "https://img.logo.dev/instagram.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Company K",
    logo: "https://img.logo.dev/telegram.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Education",
    description: "A leading educational institution.",
  },
  {
    name: "Company L",
    logo: "https://img.logo.dev/mpharma.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q", // replace with your logo path
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  // Add more company objects as needed
];

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <div className="rounded-sm bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="mb-4 flex items-center">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <h2 className="ml-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {company.name}
        </h2>
      </div>
      <p className="mb-1 text-gray-700 dark:text-gray-300">
        <strong>Location:</strong> {company.location}
      </p>
      <p className="mb-1 text-gray-700 dark:text-gray-300">
        <strong>Global Company Size:</strong> {company.size}
      </p>
      <p className="mb-1 text-gray-700 dark:text-gray-300">
        <strong>Industry:</strong> {company.industry}
      </p>
      <p className="mb-1 text-gray-700 dark:text-gray-300">
        <strong>Reviews:</strong> {company.reviews}
      </p>
      <p className="mb-1 text-gray-700 dark:text-gray-300">
        <strong>Salaries:</strong> {company.salaries}
      </p>
      <p className="mb-1 text-gray-700 dark:text-gray-300">
        <strong>Jobs:</strong> {company.jobs}
      </p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {company.description}
      </p>
    </div>
  );
};

const CompaniesPage = () => {
  return (
    <div className="mx-auto bg-neutral-50 p-2">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Companies
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
