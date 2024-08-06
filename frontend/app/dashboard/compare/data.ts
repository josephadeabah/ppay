export interface Country {
  name: string;
  average_salary: number;
  healthcare_salary: number;
  tech_salary: number;
  education_salary: number;
}

export interface Industry {
  name: string;
  job_prospects: number;
  growth_prospects: number;
  salary_prospects: number;
  job_security: number;
}

export interface Company {
  name: string;
  average_salary: number;
  innovation: number;
  work_environment: number;
  employee_retention: number;
}

export const data = {
  countries: [
    {
      name: "USA",
      average_salary: 70000,
      healthcare_salary: 72000,
      tech_salary: 71000,
      education_salary: 68000,
    },
    {
      name: "Germany",
      average_salary: 60000,
      healthcare_salary: 61000,
      tech_salary: 62000,
      education_salary: 59000,
    },
    {
      name: "Japan",
      average_salary: 50000,
      healthcare_salary: 51000,
      tech_salary: 52000,
      education_salary: 53000,
    },
    {
      name: "France",
      average_salary: 40000,
      healthcare_salary: 41000,
      tech_salary: 42000,
      education_salary: 43000,
    },
    {
      name: "UK",
      average_salary: 30000,
      healthcare_salary: 31000,
      tech_salary: 32000,
      education_salary: 33000,
    },
    {
      name: "China",
      average_salary: 20000,
      healthcare_salary: 21000,
      tech_salary: 22000,
      education_salary: 23000,
    },
    {
      name: "India",
      average_salary: 10000,
      healthcare_salary: 11000,
      tech_salary: 12000,
      education_salary: 13000,
    },
    {
      name: "Brazil",
      average_salary: 80000,
      healthcare_salary: 81000,
      tech_salary: 82000,
      education_salary: 83000,
    },
    {
      name: "Australia",
      average_salary: 90000,
      healthcare_salary: 91000,
      tech_salary: 92000,
      education_salary: 93000,
    },
    {
      name: "Canada",
      average_salary: 100000,
      healthcare_salary: 101000,
      tech_salary: 102000,
      education_salary: 103000,
    },
    {
      name: "South Africa",
      average_salary: 110000,
      healthcare_salary: 111000,
      tech_salary: 112000,
      education_salary: 113000,
    },
    {
      name: "South Korea",
      average_salary: 120000,
      healthcare_salary: 121000,
      tech_salary: 122000,
      education_salary: 123000,
    },
    {
      name: "Russia",
      average_salary: 130000,
      healthcare_salary: 131000,
      tech_salary: 132000,
      education_salary: 133000,
    },
    {
      name: "Mexico",
      average_salary: 140000,
      healthcare_salary: 141000,
      tech_salary: 142000,
      education_salary: 143000,
    },
    {
      name: "Italy",
      average_salary: 150000,
      healthcare_salary: 151000,
      tech_salary: 152000,
      education_salary: 153000,
    },
    {
      name: "Spain",
      average_salary: 160000,
      healthcare_salary: 161000,
      tech_salary: 162000,
      education_salary: 163000,
    },
    {
      name: "Netherlands",
      average_salary: 170000,
      healthcare_salary: 171000,
      tech_salary: 172000,
      education_salary: 173000,
    },
    {
      name: "Turkey",
      average_salary: 8000,
      healthcare_salary: 8100,
      tech_salary: 8200,
      education_salary: 8300,
    },
    {
      name: "Saudi Arabia",
      average_salary: 190000,
      healthcare_salary: 191000,
      tech_salary: 192000,
      education_salary: 193000,
    },
    {
      name: "Switzerland",
      average_salary: 200000,
      healthcare_salary: 201000,
      tech_salary: 202000,
      education_salary: 203000,
    },
    {
      name: "Sweden",
      average_salary: 210000,
      healthcare_salary: 211000,
      tech_salary: 212000,
      education_salary: 213000,
    },
    {
      name: "Poland",
      average_salary: 220000,
      healthcare_salary: 221000,
      tech_salary: 222000,
      education_salary: 223000,
    },
    {
      name: "Israel",
      average_salary: 230000,
      healthcare_salary: 231000,
      tech_salary: 232000,
      education_salary: 233000,
    },
    {
      name: "Finland",
      average_salary: 240000,
      healthcare_salary: 241000,
      tech_salary: 242000,
      education_salary: 243000,
    },
    {
      name: "Nigeria",
      average_salary: 5000,
      healthcare_salary: 5100,
      tech_salary: 5200,
      education_salary: 5300,
    },
    {
      name: "Argentina",
      average_salary: 5000,
      healthcare_salary: 5100,
      tech_salary: 5200,
      education_salary: 5300,
    },
    {
      name: "Kenya",
      average_salary: 4000,
      healthcare_salary: 4100,
      tech_salary: 4200,
      education_salary: 4300,
    },
    {
      name: "Indonesia",
      average_salary: 3000,
      healthcare_salary: 3100,
      tech_salary: 3200,
      education_salary: 3300,
    },
    {
      name: "Philippines",
      average_salary: 4000,
      healthcare_salary: 4100,
      tech_salary: 4200,
      education_salary: 4300,
    },
    {
      name: "Vietnam",
      average_salary: 3500,
      healthcare_salary: 3600,
      tech_salary: 3700,
      education_salary: 3800,
    },
    {
      name: "Pakistan",
      average_salary: 2500,
      healthcare_salary: 2600,
      tech_salary: 2700,
      education_salary: 2800,
    },
    {
      name: "Egypt",
      average_salary: 4000,
      healthcare_salary: 4100,
      tech_salary: 4200,
      education_salary: 4300,
    },
    {
      name: "Thailand",
      average_salary: 5000,
      healthcare_salary: 5100,
      tech_salary: 5200,
      education_salary: 5300,
    },
    {
      name: "Malaysia",
      average_salary: 6000,
      healthcare_salary: 6100,
      tech_salary: 6200,
      education_salary: 6300,
    },
    {
      name: "Bangladesh",
      average_salary: 2000,
      healthcare_salary: 2100,
      tech_salary: 2200,
      education_salary: 2300,
    },
    {
      name: "Peru",
      average_salary: 3500,
      healthcare_salary: 3600,
      tech_salary: 3700,
      education_salary: 3800,
    },
    {
      name: "Colombia",
      average_salary: 4000,
      healthcare_salary: 4100,
      tech_salary: 4200,
      education_salary: 4300,
    },
    {
      name: "Chile",
      average_salary: 6000,
      healthcare_salary: 6100,
      tech_salary: 6200,
      education_salary: 6300,
    },
    {
      name: "Ghana",
      average_salary: 3500,
      healthcare_salary: 3600,
      tech_salary: 3700,
      education_salary: 3800,
    },
    {
      name: "Morocco",
      average_salary: 3000,
      healthcare_salary: 3100,
      tech_salary: 3200,
      education_salary: 3300,
    },
  ],
  industries: [
    {
      name: "Tech",
      job_prospects: 85,
      growth_prospects: 90,
      salary_prospects: 80,
      job_security: 88,
    },
    {
      name: "Finance",
      job_prospects: 80,
      growth_prospects: 85,
      salary_prospects: 90,
      job_security: 82,
    },
    {
      name: "Healthcare",
      job_prospects: 75,
      growth_prospects: 80,
      salary_prospects: 85,
      job_security: 78,
    },
    {
      name: "Education",
      job_prospects: 70,
      growth_prospects: 75,
      salary_prospects: 80,
      job_security: 74,
    },
    {
      name: "Manufacturing",
      job_prospects: 65,
      growth_prospects: 70,
      salary_prospects: 75,
      job_security: 70,
    },
    {
      name: "Real Estate",
      job_prospects: 60,
      growth_prospects: 65,
      salary_prospects: 70,
      job_security: 66,
    },
    {
      name: "Agriculture",
      job_prospects: 55,
      growth_prospects: 60,
      salary_prospects: 65,
      job_security: 62,
    },
    {
      name: "Construction",
      job_prospects: 58,
      growth_prospects: 63,
      salary_prospects: 68,
      job_security: 64,
    },
    {
      name: "Retail",
      job_prospects: 50,
      growth_prospects: 55,
      salary_prospects: 60,
      job_security: 52,
    },
    {
      name: "Hospitality",
      job_prospects: 45,
      growth_prospects: 50,
      salary_prospects: 55,
      job_security: 48,
    },
  ],
  companies: [
    {
      name: "TechCorp",
      average_salary: 90000,
      innovation: 95,
      work_environment: 90,
      employee_retention: 88,
    },
    {
      name: "HealthInc",
      average_salary: 85000,
      innovation: 90,
      work_environment: 85,
      employee_retention: 86,
    },
    {
      name: "EduGroup",
      average_salary: 80000,
      innovation: 85,
      work_environment: 80,
      employee_retention: 84,
    },
    {
      name: "FinancePros",
      average_salary: 75000,
      innovation: 80,
      work_environment: 75,
      employee_retention: 82,
    },
    {
      name: "ManuWorks",
      average_salary: 70000,
      innovation: 75,
      work_environment: 70,
      employee_retention: 80,
    },
    {
      name: "BuildRight",
      average_salary: 65000,
      innovation: 70,
      work_environment: 65,
      employee_retention: 78,
    },
    {
      name: "RetailWorld",
      average_salary: 60000,
      innovation: 65,
      work_environment: 60,
      employee_retention: 76,
    },
    {
      name: "AgriLife",
      average_salary: 55000,
      innovation: 60,
      work_environment: 55,
      employee_retention: 74,
    },
    {
      name: "Hospitable",
      average_salary: 50000,
      innovation: 55,
      work_environment: 50,
      employee_retention: 72,
    },
    {
      name: "Construx",
      average_salary: 45000,
      innovation: 50,
      work_environment: 45,
      employee_retention: 70,
    },
  ],
};
