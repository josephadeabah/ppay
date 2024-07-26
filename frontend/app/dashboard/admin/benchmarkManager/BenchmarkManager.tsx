// RoleForm.jsx

import { useState } from "react";

const BenchmarkManager = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [role, setRole] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [skills, setSkills] = useState<string>("");
  const [responsibilities, setResponsibilities] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [benchmarkSalary, setBenchmarkSalary] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [careerPath, setCareerPath] = useState("");
  const [growthOpportunities, setGrowthOpportunities] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const roleData = {
      role,
      jobLevel,
      skills: skills.split(",").map((skill: string) => skill.trim()), // Convert comma-separated string to array
      responsibilities: responsibilities
        .split(",")
        .map((responsibility: string) => responsibility.trim()), // Convert comma-separated string to array
      currentSalary: Number(currentSalary),
      benchmarkSalary: Number(benchmarkSalary),
      salaryRange,
      careerPath,
      growthOpportunities,
      yearsOfExperience: Number(yearsOfExperience),
    };

    onSubmit(roleData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700"
        >
          Role
        </label>
        <input
          id="role"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="jobLevel"
          className="block text-sm font-medium text-gray-700"
        >
          Job Level
        </label>
        <input
          id="jobLevel"
          type="text"
          value={jobLevel}
          onChange={(e) => setJobLevel(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="skills"
          className="block text-sm font-medium text-gray-700"
        >
          Skills (comma-separated)
        </label>
        <input
          id="skills"
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="responsibilities"
          className="block text-sm font-medium text-gray-700"
        >
          Responsibilities (comma-separated)
        </label>
        <input
          id="responsibilities"
          type="text"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="currentSalary"
          className="block text-sm font-medium text-gray-700"
        >
          Current Salary
        </label>
        <input
          id="currentSalary"
          type="number"
          value={currentSalary}
          onChange={(e) => setCurrentSalary(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="benchmarkSalary"
          className="block text-sm font-medium text-gray-700"
        >
          Benchmark Salary
        </label>
        <input
          id="benchmarkSalary"
          type="number"
          value={benchmarkSalary}
          onChange={(e) => setBenchmarkSalary(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="salaryRange"
          className="block text-sm font-medium text-gray-700"
        >
          Salary Range
        </label>
        <input
          id="salaryRange"
          type="text"
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="careerPath"
          className="block text-sm font-medium text-gray-700"
        >
          Career Path
        </label>
        <input
          id="careerPath"
          type="text"
          value={careerPath}
          onChange={(e) => setCareerPath(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="growthOpportunities"
          className="block text-sm font-medium text-gray-700"
        >
          Growth Opportunities
        </label>
        <input
          id="growthOpportunities"
          type="text"
          value={growthOpportunities}
          onChange={(e) => setGrowthOpportunities(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="yearsOfExperience"
          className="block text-sm font-medium text-gray-700"
        >
          Years of Experience
        </label>
        <input
          id="yearsOfExperience"
          type="number"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default BenchmarkManager;
