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
        },
      },
    },
  },
};
