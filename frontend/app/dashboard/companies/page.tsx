"use client";
import PaginationComponent from "@/components/pagination/pagination";
import { Card, Tooltip } from "@nextui-org/react";
import React, { useState } from "react";

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
    description:
      "Google LLC is an American multinational technology company specializing in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
  },
  {
    name: "Facebook",
    logo: "https://img.logo.dev/facebook.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 98,
    salaries: 40,
    jobs: 8,
    location: "San Francisco, USA",
    size: "1000-5000 employees",
    industry: "Technology",
    description:
      "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.",
  },
  {
    name: "Yandex",
    logo: "https://img.logo.dev/yandex.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 150,
    salaries: 60,
    jobs: 15,
    location: "London, UK",
    size: "200-500 employees",
    industry: "Technology",
    description:
      "Yandex N.V. is a Dutch-domiciled multinational corporation specializing in Internet-related products and services, including transportation, search and information services, eCommerce, navigation, mobile applications, and online advertising.",
  },
  {
    name: "Apple",
    logo: "https://img.logo.dev/apple.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 110,
    salaries: 55,
    jobs: 12,
    location: "Berlin, Germany",
    size: "50-200 employees",
    industry: "Technology",
    description:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, manufactures, and sells consumer electronics, computer software, and online services.",
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
    description:
      "Andela is an American company with operational campuses in Africa including Nigeria, Ghana, Kenya, Rwanda, Uganda, and Egypt. Andela builds distributed engineering teams with software developers.",
  },
  {
    name: "Airbnb",
    logo: "https://img.logo.dev/airbnb.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 100,
    salaries: 45,
    jobs: 9,
    location: "Sydney, Australia",
    size: "1000-5000 employees",
    industry: "Travel & Tourism",
    description:
      "Airbnb, Inc. operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities. Based in San Francisco, California, the platform is accessible via website and mobile app.",
  },
  {
    name: "Zoom",
    logo: "https://img.logo.dev/zoom.us?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Communications",
    description:
      "Zoom Video Communications, Inc. is an American communications technology company headquartered in San Jose, California. It provides videotelephony and online chat services through a cloud-based peer-to-peer software platform.",
  },
  {
    name: "Verizon",
    logo: "https://img.logo.dev/verizon.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "New York, USA",
    size: "500-1000 employees",
    industry: "Telecommunications",
    description:
      "Verizon Communications Inc. is an American multinational telecommunications conglomerate and a corporate component of the Dow Jones Industrial Average. The company is headquartered at 1095 Avenue of the Americas in Midtown Manhattan, New York City.",
  },
  {
    name: "Twitter",
    logo: "https://img.logo.dev/twitter.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Technology",
    description:
      "Twitter, Inc. is an American microblogging and social networking service on which users post and interact with messages known as 'tweets'. Registered users can post, like, and retweet tweets, but unregistered users can only read them.",
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
    description:
      "Instagram is an American photo and video sharing social networking service created by Kevin Systrom and Mike Krieger. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.",
  },
  {
    name: "Telegram",
    logo: "https://img.logo.dev/telegram.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 80,
    salaries: 35,
    jobs: 6,
    location: "Tokyo, Japan",
    size: "50-200 employees",
    industry: "Technology",
    description:
      "Telegram is a cloud-based instant messaging, video telephony, and VoIP service. The service also provides end-to-end encrypted video calling, VoIP, file sharing, and several other features.",
  },
  {
    name: "mPharma",
    logo: "https://img.logo.dev/mpharma.com?token=pk_EoYVBqzrSFeSm5-xN9WT9Q",
    reviews: 120,
    salaries: 50,
    jobs: 10,
    location: "Accra, Ghana",
    size: "500-1000 employees",
    industry: "Healthcare",
    description:
      "mPharma is a pharmaceutical distribution company that aims to increase patient access to affordable high-quality medications in developing countries. They partner with drug manufacturers, wholesalers, and pharmacies.",
  },
  // Add more company objects as needed
];

const CompaniesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 6;
  const totalPages = Math.ceil(companies.length / companiesPerPage);

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(
    indexOfFirstCompany,
    indexOfLastCompany,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto p-2">
      <div className="h-screen">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Companies
        </h1>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {currentCompanies.map((company, index) => (
            <Card
              key={index}
              className="flex h-full flex-col justify-between bg-white p-4 transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800 dark:text-gray-100"
            >
              <div className="flex items-center justify-between">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {company.name}
                </h2>
              </div>
              <div className="mt-2 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Location:</strong> {company.location}
                </p>
                <p>
                  <strong>Size:</strong> {company.size}
                </p>
                <p>
                  <strong>Industry:</strong> {company.industry}
                </p>
                <Tooltip
                  content={company.description}
                  placement="bottom"
                  className="w-full max-w-xl bg-gray-700 p-5 text-gray-100 dark:bg-slate-800 dark:text-gray-50"
                >
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    <strong>Description:</strong> {company.description}
                  </p>
                </Tooltip>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <PaginationComponent
        initialPage={currentPage}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CompaniesPage;
