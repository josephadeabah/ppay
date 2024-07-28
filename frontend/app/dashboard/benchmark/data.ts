// data.ts
export type BenchmarkDataType = {
  role: string;
  jobLevel: string;
  skills: string[];
  responsibilities: string[];
  currentSalary: number;
  benchmarkSalary: number;
  salaryRange: string;
  careerPath: string;
  growthOpportunities: string;
  yearsOfExperience: number;
  country?: string;
};

export type DataStructure = {
  [country: string]: {
    inflationRate: number;
    industries: {
      [industry: string]: {
        companies: {
          [company: string]: BenchmarkDataType[];
        };
      };
    };
  };
};

export type Country = keyof DataStructure;
export type Industry = keyof DataStructure[Country]["industries"];
export type Company =
  keyof DataStructure[Country]["industries"][Industry]["companies"];

export const data: DataStructure = {
  Germany: {
    inflationRate: 2.0, // Example inflation rate for Germany
    industries: {
      Tech: {
        companies: {
          SAP: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["ABAP", "Java"],
              responsibilities: [
                "Develop and maintain enterprise software solutions",
                "Collaborate with global teams",
              ],
              currentSalary: 70000, // EUR
              benchmarkSalary: 75000, // EUR
              salaryRange: "65,000 - 80,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Global mobility, certifications",
              yearsOfExperience: 5,
              country: "Germany",
            },
          ],
          Siemens: [
            {
              role: "Data Scientist",
              jobLevel: "Senior Level",
              skills: ["Python", "Machine Learning"],
              responsibilities: [
                "Analyze large datasets to extract insights",
                "Build predictive models for industrial applications",
              ],
              currentSalary: 90000, // EUR
              benchmarkSalary: 95000, // EUR
              salaryRange: "85,000 - 100,000",
              careerPath: "Lead Data Scientist",
              growthOpportunities: "Advanced certifications, conferences",
              yearsOfExperience: 7,
              country: "Germany",
            },
          ],
        },
      },
      Manufacturing: {
        companies: {
          Volkswagen: [
            {
              role: "Mechanical Engineer",
              jobLevel: "Mid Level",
              skills: ["SolidWorks", "Matlab"],
              responsibilities: [
                "Design and optimize automotive components",
                "Collaborate with production and design teams",
              ],
              currentSalary: 80000, // EUR
              benchmarkSalary: 85000, // EUR
              salaryRange: "75,000 - 90,000",
              careerPath: "Senior Mechanical Engineer",
              growthOpportunities: "Technical training, leadership development",
              yearsOfExperience: 6,
              country: "Germany",
            },
          ],
          Bosch: [
            {
              role: "Product Manager",
              jobLevel: "Mid Level",
              skills: ["Product Management", "Electronics"],
              responsibilities: [
                "Oversee product lifecycle",
                "Collaborate with engineering and marketing teams",
              ],
              currentSalary: 85000, // EUR
              benchmarkSalary: 90000, // EUR
              salaryRange: "80,000 - 95,000",
              careerPath: "Senior Product Manager",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 5,
              country: "Germany",
            },
          ],
        },
      },
      Healthcare: {
        companies: {
          Charité: [
            {
              role: "Clinical Data Analyst",
              jobLevel: "Mid Level",
              skills: ["SQL", "Python"],
              responsibilities: [
                "Analyze clinical data for research purposes",
                "Prepare reports for medical professionals",
              ],
              currentSalary: 60000, // EUR
              benchmarkSalary: 65000, // EUR
              salaryRange: "55,000 - 70,000",
              careerPath: "Senior Data Analyst",
              growthOpportunities: "Data analytics certifications, training",
              yearsOfExperience: 4,
              country: "Germany",
            },
          ],
          "University Hospital Heidelberg": [
            {
              role: "Healthcare Administrator",
              jobLevel: "Senior Level",
              skills: ["Healthcare Management", "Finance"],
              responsibilities: [
                "Manage hospital operations",
                "Develop strategic initiatives",
              ],
              currentSalary: 100000, // EUR
              benchmarkSalary: 105000, // EUR
              salaryRange: "95,000 - 110,000",
              careerPath: "Chief Operating Officer",
              growthOpportunities: "Executive training, advanced degrees",
              yearsOfExperience: 12,
              country: "Germany",
            },
          ],
        },
      },
    },
  },
  USA: {
    inflationRate: 0.2, // Example inflation rate for the USA
    industries: {
      Tech: {
        companies: {
          Google: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["JavaScript", "React"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams",
              ],
              currentSalary: 80000,
              benchmarkSalary: 85000,
              salaryRange: "70,000 - 100,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 5,
              country: "USA",
            },
            {
              role: "Data Scientist",
              jobLevel: "Senior Level",
              skills: ["Python", "Machine Learning"],
              responsibilities: [
                "Analyze large datasets to extract insights",
                "Build predictive models",
              ],
              currentSalary: 120000,
              benchmarkSalary: 125000,
              salaryRange: "100,000 - 140,000",
              careerPath: "Lead Data Scientist",
              growthOpportunities: "Advanced certifications, conferences",
              yearsOfExperience: 7,
              country: "USA",
            },
            {
              role: "Software Developer",
              jobLevel: "Entry Level",
              skills: ["C++", "C"],
              responsibilities: [
                "Develop and maintain software applications",
                "Collaborate with cross-functional teams",
              ],
              currentSalary: 50000,
              benchmarkSalary: 55000,
              salaryRange: "40,000 - 60,000",
              careerPath: "Entry Software Developer",
              growthOpportunities: "Internship opportunities",
              yearsOfExperience: 3,
              country: "USA",
            },
            {
              role: "Product Manager",
              jobLevel: "Mid Level",
              skills: ["Java", "Kotlin"],
              responsibilities: [
                "Manage product development",
                "Collaborate with cross-functional teams",
              ],
              currentSalary: 75000,
              benchmarkSalary: 80000,
              salaryRange: "60,000 - 80,000",
              careerPath: "Mid Product Manager",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 5,
              country: "USA",
            },
          ],
          Facebook: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["JavaScript", "React"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams",
              ],
              currentSalary: 80000,
              benchmarkSalary: 85000,
              salaryRange: "70,000 - 100,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 5,
              country: "USA",
            },
          ],
          Amazon: [
            {
              role: "Data Scientist",
              jobLevel: "Senior Level",
              skills: ["Python", "Machine Learning"],
              responsibilities: [
                "Analyze large datasets to extract insights",
                "Build predictive models",
              ],
              currentSalary: 120000,
              benchmarkSalary: 125000,
              salaryRange: "100,000 - 140,000",
              careerPath: "Lead Data Scientist",
              growthOpportunities: "Advanced certifications, conferences",
              yearsOfExperience: 7,
              country: "USA",
            },
          ],
        },
      },
      Manufacturing: {
        companies: {
          "General Electric": [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 4,
              country: "USA",
            },
          ],
          "Ford Motor Company": [
            {
              role: "Mechanical Engineer",
              jobLevel: "Entry Level",
              skills: ["AutoCAD", "SolidWorks"],
              responsibilities: [
                "Design and develop automotive parts",
                "Work with production teams",
              ],
              currentSalary: 55000,
              benchmarkSalary: 58000,
              salaryRange: "50,000 - 60,000",
              careerPath: "Senior Mechanical Engineer",
              growthOpportunities: "Technical training, project leadership",
              yearsOfExperience: 2,
              country: "USA",
            },
          ],
        },
      },
      Healthcare: {
        companies: {
          "Blue Cross Blue Shield": [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 4,
              country: "USA",
            },
          ],
          "Johns Hopkins Hospital": [
            {
              role: "Clinical Data Analyst",
              jobLevel: "Mid Level",
              skills: ["SQL", "Tableau"],
              responsibilities: [
                "Analyze clinical data for insights",
                "Prepare reports for clinical staff",
              ],
              currentSalary: 75000,
              benchmarkSalary: 78000,
              salaryRange: "70,000 - 80,000",
              careerPath: "Senior Data Analyst",
              growthOpportunities: "Data analytics certifications, conferences",
              yearsOfExperience: 5,
              country: "USA",
            },
          ],
        },
      },
    },
  },
  India: {
    inflationRate: 6.0, // Example inflation rate for India
    industries: {
      Tech: {
        companies: {
          Infosys: [
            {
              role: "Software Developer",
              jobLevel: "Mid Level",
              skills: ["Java", "Spring Boot"],
              responsibilities: [
                "Develop and maintain software applications",
                "Collaborate with cross-functional teams",
              ],
              currentSalary: 800000, // INR
              benchmarkSalary: 850000, // INR
              salaryRange: "700,000 - 900,000",
              careerPath: "Senior Software Developer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 5,
              country: "India",
            },
          ],
          Wipro: [
            {
              role: "Data Analyst",
              jobLevel: "Entry Level",
              skills: ["Excel", "SQL"],
              responsibilities: [
                "Analyze business data",
                "Prepare reports for stakeholders",
              ],
              currentSalary: 600000, // INR
              benchmarkSalary: 650000, // INR
              salaryRange: "500,000 - 700,000",
              careerPath: "Senior Data Analyst",
              growthOpportunities: "Data science certifications, training",
              yearsOfExperience: 2,
              country: "India",
            },
          ],
          TCS: [
            {
              role: "Software Tester",
              jobLevel: "Mid Level",
              skills: ["Selenium", "Manual Testing"],
              responsibilities: [
                "Test software applications",
                "Collaborate with development teams",
              ],
              currentSalary: 700000, // INR
              benchmarkSalary: 750000, // INR
              salaryRange: "600,000 - 800,000",
              careerPath: "Lead Tester",
              growthOpportunities: "Quality assurance certifications",
              yearsOfExperience: 4,
              country: "India",
            },
          ],
        },
      },
      Manufacturing: {
        companies: {
          Tata: [
            {
              role: "Mechanical Engineer",
              jobLevel: "Mid Level",
              skills: ["AutoCAD", "SolidWorks"],
              responsibilities: [
                "Design and optimize mechanical components",
                "Work with production teams",
              ],
              currentSalary: 900000, // INR
              benchmarkSalary: 950000, // INR
              salaryRange: "800,000 - 1,000,000",
              careerPath: "Senior Mechanical Engineer",
              growthOpportunities: "Technical training, project leadership",
              yearsOfExperience: 6,
              country: "India",
            },
          ],
          Mahindra: [
            {
              role: "Automotive Engineer",
              jobLevel: "Entry Level",
              skills: ["CATIA", "Matlab"],
              responsibilities: [
                "Develop and test automotive systems",
                "Work with cross-functional teams",
              ],
              currentSalary: 700000, // INR
              benchmarkSalary: 750000, // INR
              salaryRange: "600,000 - 800,000",
              careerPath: "Senior Automotive Engineer",
              growthOpportunities: "Technical courses, certifications",
              yearsOfExperience: 3,
              country: "India",
            },
          ],
        },
      },
      Healthcare: {
        companies: {
          "Apollo Hospitals": [
            {
              role: "Clinical Data Analyst",
              jobLevel: "Mid Level",
              skills: ["SQL", "R"],
              responsibilities: [
                "Analyze clinical trial data",
                "Prepare detailed reports for clinical research",
              ],
              currentSalary: 850000, // INR
              benchmarkSalary: 880000, // INR
              salaryRange: "800,000 - 900,000",
              careerPath: "Senior Data Analyst",
              growthOpportunities: "Data science training, conferences",
              yearsOfExperience: 5,
              country: "India",
            },
          ],
          "Fortis Healthcare": [
            {
              role: "Healthcare Administrator",
              jobLevel: "Senior Level",
              skills: ["Healthcare Management", "Budgeting"],
              responsibilities: [
                "Oversee hospital operations",
                "Develop and implement policies",
              ],
              currentSalary: 1500000, // INR
              benchmarkSalary: 1550000, // INR
              salaryRange: "1,400,000 - 1,600,000",
              careerPath: "Executive Director",
              growthOpportunities: "Leadership programs, advanced degrees",
              yearsOfExperience: 10,
              country: "India",
            },
          ],
        },
      },
    },
  },
  Russia: {
    inflationRate: -1.4, // Example inflation rate for Russia
    industries: {
      Tech: {
        companies: {
          Yandex: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 4,
              country: "Russia",
            },
          ],
          "Arm Robotics": [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 4,
              country: "Russia",
            },
          ],
          "Kaspersky Lab": [
            {
              role: "Cybersecurity Analyst",
              jobLevel: "Senior Level",
              skills: ["Network Security", "Penetration Testing"],
              responsibilities: [
                "Monitor and protect against security threats",
                "Conduct vulnerability assessments",
              ],
              currentSalary: 85000,
              benchmarkSalary: 88000,
              salaryRange: "80,000 - 90,000",
              careerPath: "Cybersecurity Manager",
              growthOpportunities: "Advanced security certifications",
              yearsOfExperience: 8,
              country: "Russia",
            },
          ],
        },
      },
      Manufacturing: {
        companies: {
          Kazantiles: [
            {
              role: "Lead Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
              yearsOfExperience: 4,
              country: "Russia",
            },
          ],
          Lukoil: [
            {
              role: "Process Engineer",
              jobLevel: "Senior Level",
              skills: ["Chemical Engineering", "Process Optimization"],
              responsibilities: [
                "Optimize refinery processes",
                "Ensure safety standards are met",
              ],
              currentSalary: 90000,
              benchmarkSalary: 93000,
              salaryRange: "85,000 - 95,000",
              careerPath: "Chief Engineer",
              growthOpportunities:
                "Management training, advanced technical courses",
              yearsOfExperience: 10,
              country: "Russia",
            },
          ],
        },
      },
      Healthcare: {
        companies: {
          Rosmed: [
            {
              role: "Clinical Data Analyst",
              jobLevel: "Mid Level",
              skills: ["SQL", "Tableau"],
              responsibilities: [
                "Analyze clinical data for insights",
                "Prepare reports for clinical staff",
              ],
              currentSalary: 75000,
              benchmarkSalary: 78000,
              salaryRange: "70,000 - 80,000",
              careerPath: "Senior Data Analyst",
              growthOpportunities: "Data analytics certifications, conferences",
              yearsOfExperience: 5,
              country: "Russia",
            },
          ],
          "Moscow Healthcare": [
            {
              role: "Healthcare Administrator",
              jobLevel: "Mid Level",
              skills: ["Hospital Administration", "Healthcare Policy"],
              responsibilities: [
                "Oversee administrative operations",
                "Ensure compliance with healthcare regulations",
              ],
              currentSalary: 70000,
              benchmarkSalary: 72000,
              salaryRange: "65,000 - 75,000",
              careerPath: "Senior Administrator",
              growthOpportunities: "Advanced healthcare management training",
              yearsOfExperience: 6,
              country: "Russia",
            },
          ],
        },
      },
    },
  },
};
