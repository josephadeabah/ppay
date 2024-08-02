"use client";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import React from "react";
import { HiOutlineArrowDown, HiOutlineArrowUp } from "react-icons/hi";

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
    name: "Google",
    logo: "https://img.logo.dev/google.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Facebook",
    logo: "https://img.logo.dev/facebook.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 98,
    salaries: 40,
    jobs: 8,
    location: "San Francisco, USA",
    size: "1000-5000 employees",
    industry: "Finance",
    description: "A top financial firm.",
  },
  {
    name: "Yandex",
    logo: "https://img.logo.dev/yandex.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 150,
    salaries: 60,
    jobs: 15,
    location: "London, UK",
    size: "200-500 employees",
    industry: "Healthcare",
    description: "A renowned healthcare company.",
  },
  {
    name: "Apple",
    logo: "https://img.logo.dev/apple.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 110,
    salaries: 55,
    jobs: 12,
    location: "Berlin, Germany",
    size: "50-200 employees",
    industry: "Automotive",
    description: "A pioneering automotive company.",
  },
  {
    name: "Andela",
    logo: "https://img.logo.dev/andela.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "Paris, France",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Airbnb",
    logo: "https://img.logo.dev/airbnb.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 100,
    salaries: 45,
    jobs: 9,
    location: "Sydney, Australia",
    size: "1000-5000 employees",
    industry: "Finance",
    description: "A top financial firm.",
  },
  {
    name: "Zoom",
    logo: "https://img.logo.dev/zoom.us?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Education",
    description: "A leading educational institution.",
  },
  {
    name: "Verizon",
    logo: "https://img.logo.dev/verizon.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Twitter",
    logo: "https://img.logo.dev/twitter.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Education",
    description: "A leading educational institution.",
  },
  {
    name: "Instagram",
    logo: "https://img.logo.dev/instagram.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Technology",
    description: "A leading tech company.",
  },
  {
    name: "Telegram",
    logo: "https://img.logo.dev/telegram.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Education",
    description: "A leading educational institution.",
  },
  {
    name: "mPharma",
    logo: "https://img.logo.dev/mpharma.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
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

const CompaniesPage: React.FC = () => {
  return (
    <div className="mx-auto bg-neutral-50 p-2 dark:bg-gray-900">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Companies
      </h1>
      <Accordion
        selectionMode="single"
        className="text-gray-800 dark:text-gray-100"
      >
        {companies.map((company, index) => (
          <AccordionItem
            key={index}
            aria-label={company.name}
            indicator={({ isOpen }) =>
              isOpen ? <HiOutlineArrowDown /> : <HiOutlineArrowUp />
            }
            startContent={
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width={40}
                height={40}
                className="rounded-full"
              />
            }
            subtitle={`${company.reviews} reviews`}
            title={company.name}
          >
            <Card>
              <Card>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Location:</strong> {company.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Global Company Size:</strong> {company.size}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Industry:</strong> {company.industry}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Reviews:</strong> {company.reviews}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Salaries:</strong> {company.salaries}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Jobs:</strong> {company.jobs}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {company.description}
                </p>
              </Card>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CompaniesPage;
