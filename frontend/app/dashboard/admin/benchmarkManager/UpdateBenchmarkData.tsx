import {
  BenchmarkDataType,
  Company,
  Country,
  data,
  Industry,
} from "@/app/dashboard/benchmark/data";
import { useEffect, useState } from "react";

const UpdateBenchmarkData = () => {
  const [countries, setCountries] = useState<Country[]>(
    Object.keys(data) as Country[],
  );
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [roles, setRoles] = useState<BenchmarkDataType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | "">("");
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | "">("");
  const [selectedCompany, setSelectedCompany] = useState<Company | "">("");
  const [selectedRole, setSelectedRole] = useState<BenchmarkDataType | null>(
    null,
  );

  const [formData, setFormData] = useState<BenchmarkDataType>({
    role: "",
    jobLevel: "",
    skills: [],
    responsibilities: [],
    currentSalary: 0,
    benchmarkSalary: 0,
    salaryRange: "",
    careerPath: "",
    growthOpportunities: "",
    yearsOfExperience: 0,
  });

  useEffect(() => {
    if (selectedCountry && selectedIndustry && selectedCompany) {
      setRoles(
        data[selectedCountry]?.industries[selectedIndustry]?.companies[
          selectedCompany
        ] || [],
      );
    }
  }, [selectedCountry, selectedIndustry, selectedCompany]);

  useEffect(() => {
    if (selectedRole) {
      setFormData(selectedRole);
    }
  }, [selectedRole]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    if (name === "skills" || name === "responsibilities") {
      setFormData((prev: BenchmarkDataType) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()),
      }));
    } else {
      setFormData((prev: BenchmarkDataType) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCountry && selectedIndustry && selectedCompany) {
      // Update or submit the form data
    }
  };

  return (
    <div className="px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold">Update Existing Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Country
          </label>
          <select
            name="country"
            value={selectedCountry}
            onChange={(e) => {
              const country = e.target.value as Country;
              setSelectedCountry(country);
              setIndustries(
                Object.keys(data[country]?.industries || {}) as Industry[],
              );
              setSelectedIndustry("");
              setCompanies([]);
              setSelectedCompany("");
              setRoles([]);
              setSelectedRole(null);
            }}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Industry
          </label>
          <select
            name="industry"
            value={selectedIndustry}
            onChange={(e) => {
              const industry = e.target.value as Industry;
              setSelectedIndustry(industry);
              setCompanies(
                Object.keys(
                  data[selectedCountry]?.industries[industry]?.companies || {},
                ) as Company[],
              );
              setSelectedCompany("");
              setRoles([]);
              setSelectedRole(null);
            }}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="">Select an industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Company
          </label>
          <select
            name="company"
            value={selectedCompany}
            onChange={(e) => {
              const company = e.target.value as Company;
              setSelectedCompany(company);
              setRoles(
                data[selectedCountry]?.industries[selectedIndustry]?.companies[
                  company
                ] || [],
              );
              setSelectedRole(null);
            }}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="">Select a company</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Role
          </label>
          <select
            name="role"
            value={selectedRole?.role || ""}
            onChange={(e) => {
              const role = roles.find((r) => r.role === e.target.value) || null;
              setSelectedRole(role);
            }}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role.role} value={role.role}>
                {role.role}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="jobLevel"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Job Level
          </label>
          <input
            type="text"
            name="jobLevel"
            value={formData.jobLevel}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Skills (comma separated)
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills.join(", ")}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="responsibilities"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Responsibilities (comma separated)
          </label>
          <input
            type="text"
            name="responsibilities"
            value={formData.responsibilities.join(", ")}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="currentSalary"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Current Salary
          </label>
          <input
            type="number"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="benchmarkSalary"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Benchmark Salary
          </label>
          <input
            type="number"
            name="benchmarkSalary"
            value={formData.benchmarkSalary}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="salaryRange"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Salary Range
          </label>
          <input
            type="text"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="careerPath"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Career Path
          </label>
          <input
            type="text"
            name="careerPath"
            value={formData.careerPath}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="growthOpportunities"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Growth Opportunities
          </label>
          <input
            type="text"
            id="growthOpportunities"
            name="growthOpportunities"
            value={formData.growthOpportunities}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="yearsOfExperience"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Years of Experience
          </label>
          <input
            type="number"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateBenchmarkData;
