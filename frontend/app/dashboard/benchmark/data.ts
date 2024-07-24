// data.ts

export type Role = {
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
};

export type DataStructure = {
  [country: string]: {
    industries: {
      [industry: string]: {
        companies: {
          [company: string]: Role[];
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
  USA: {
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
            },
          ],
        },
      },
    },
  },
  Russia: {
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
                "Management training, advanced certifications",
              yearsOfExperience: 10,
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
            },
          ],
          "Russian Medical Group": [
            {
              role: "Medical Research Analyst",
              jobLevel: "Mid Level",
              skills: ["Statistical Analysis", "Clinical Research"],
              responsibilities: [
                "Analyze medical research data",
                "Prepare reports and publications",
              ],
              currentSalary: 70000,
              benchmarkSalary: 72000,
              salaryRange: "65,000 - 75,000",
              careerPath: "Senior Research Analyst",
              growthOpportunities: "Research grants, academic partnerships",
              yearsOfExperience: 6,
            },
          ],
        },
      },
    },
  },
};
