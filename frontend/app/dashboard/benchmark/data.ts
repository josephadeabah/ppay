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
  Germany: {
    industries: {
      Tech: {
        companies: {
          SAP: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Java", "Spring Boot"],
              responsibilities: [
                "Develop enterprise software solutions",
                "Collaborate with international teams",
              ],
              currentSalary: 85000,
              benchmarkSalary: 90000,
              salaryRange: "80,000 - 100,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities:
                "Leadership training, international projects",
              yearsOfExperience: 5,
            },
          ],
          Siemens: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Java", "Spring Boot"],
              responsibilities: [
                "Develop enterprise software solutions",
                "Collaborate with international teams",
              ],
              currentSalary: 85000,
              benchmarkSalary: 90000,
              salaryRange: "80,000 - 100,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities:
                "Leadership training, international projects",
              yearsOfExperience: 5,
            },
          ],
        },
      },
      Automotive: {
        companies: {
          "BMW Group": [
            {
              role: "Automotive Engineer",
              jobLevel: "Mid Level",
              skills: ["Automotive Engineering", "CAD"],
              responsibilities: [
                "Design and develop automotive components",
                "Work with cross-functional teams",
              ],
              currentSalary: 75000,
              benchmarkSalary: 78000,
              salaryRange: "70,000 - 80,000",
              careerPath: "Senior Automotive Engineer",
              growthOpportunities: "Technical training, project management",
              yearsOfExperience: 6,
            },
          ],
          Volkswagen: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Java", "Spring Boot"],
              responsibilities: [
                "Develop enterprise software solutions",
                "Collaborate with international teams",
              ],
              currentSalary: 85000,
              benchmarkSalary: 90000,
              salaryRange: "80,000 - 100,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities:
                "Leadership training, international projects",
              yearsOfExperience: 5,
            },
          ],
        },
      },
    },
  },
  Japan: {
    industries: {
      Tech: {
        companies: {
          Sony: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["C++", "Embedded Systems"],
              responsibilities: [
                "Develop software for consumer electronics",
                "Collaborate with hardware teams",
              ],
              currentSalary: 70000,
              benchmarkSalary: 72000,
              salaryRange: "65,000 - 75,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "R&D projects, international experience",
              yearsOfExperience: 5,
            },
          ],
          "SoftBank Robotics": [
            {
              role: "Robotics Engineer",
              jobLevel: "Senior Level",
              skills: ["Robotics", "AI"],
              responsibilities: [
                "Design and develop robotic systems",
                "Lead research projects",
              ],
              currentSalary: 95000,
              benchmarkSalary: 98000,
              salaryRange: "90,000 - 100,000",
              careerPath: "Lead Robotics Engineer",
              growthOpportunities: "Research grants, industry partnerships",
              yearsOfExperience: 8,
            },
          ],
        },
      },
      Automotive: {
        companies: {
          Toyota: [
            {
              role: "Automotive Engineer",
              jobLevel: "Senior Level",
              skills: ["Automotive Engineering", "Project Management"],
              responsibilities: [
                "Lead automotive design projects",
                "Ensure compliance with safety standards",
              ],
              currentSalary: 90000,
              benchmarkSalary: 93000,
              salaryRange: "85,000 - 95,000",
              careerPath: "Chief Engineer",
              growthOpportunities:
                "International assignments, advanced training",
              yearsOfExperience: 10,
            },
          ],
          Honda: [
            {
              role: "Automotive Engineer",
              jobLevel: "Mid Level",
              skills: ["Automotive Engineering", "CAD"],
              responsibilities: [
                "Design and develop automotive components",
                "Work with cross-functional teams",
              ],
              currentSalary: 75000,
              benchmarkSalary: 78000,
              salaryRange: "70,000 - 80,000",
              careerPath: "Senior Automotive Engineer",
              growthOpportunities: "Technical training, project management",
              yearsOfExperience: 6,
            },
          ],
        },
      },
    },
  },
  Canada: {
    industries: {
      Tech: {
        companies: {
          Shopify: [
            {
              role: "Frontend Developer",
              jobLevel: "Mid Level",
              skills: ["JavaScript", "Vue.js"],
              responsibilities: [
                "Develop user-facing features",
                "Optimize applications for speed and scalability",
              ],
              currentSalary: 70000,
              benchmarkSalary: 72000,
              salaryRange: "65,000 - 75,000",
              careerPath: "Senior Frontend Developer",
              growthOpportunities: "Conferences, advanced courses",
              yearsOfExperience: 4,
            },
          ],
          "BlackBerry Ltd.": [
            {
              role: "Security Engineer",
              jobLevel: "Senior Level",
              skills: ["Network Security", "C++"],
              responsibilities: [
                "Design secure systems",
                "Implement security measures",
              ],
              currentSalary: 90000,
              benchmarkSalary: 93000,
              salaryRange: "85,000 - 95,000",
              careerPath: "Lead Security Engineer",
              growthOpportunities:
                "Security certifications, leadership training",
              yearsOfExperience: 8,
            },
          ],
        },
      },
      Finance: {
        companies: {
          "Royal Bank of Canada": [
            {
              role: "Financial Analyst",
              jobLevel: "Mid Level",
              skills: ["Financial Modeling", "Excel"],
              responsibilities: [
                "Analyze financial data",
                "Prepare financial reports",
              ],
              currentSalary: 80000,
              benchmarkSalary: 82000,
              salaryRange: "75,000 - 85,000",
              careerPath: "Senior Financial Analyst",
              growthOpportunities: "CFA certification, MBA programs",
              yearsOfExperience: 5,
            },
          ],
          "Toronto-Dominion Bank": [
            {
              role: "Investment Banker",
              jobLevel: "Senior Level",
              skills: ["Valuation", "Mergers & Acquisitions"],
              responsibilities: [
                "Advise clients on financial transactions",
                "Prepare financial models",
              ],
              currentSalary: 120000,
              benchmarkSalary: 125000,
              salaryRange: "110,000 - 130,000",
              careerPath: "Managing Director",
              growthOpportunities:
                "Leadership training, advanced certifications",
              yearsOfExperience: 10,
            },
          ],
        },
      },
    },
  },
  UK: {
    industries: {
      Tech: {
        companies: {
          "ARM Holdings": [
            {
              role: "Embedded Software Engineer",
              jobLevel: "Mid Level",
              skills: ["C", "Embedded Systems"],
              responsibilities: [
                "Develop software for microcontrollers",
                "Collaborate with hardware teams",
              ],
              currentSalary: 75000,
              benchmarkSalary: 78000,
              salaryRange: "70,000 - 80,000",
              careerPath: "Senior Embedded Software Engineer",
              growthOpportunities: "Advanced training, international projects",
              yearsOfExperience: 6,
            },
          ],
          DeepMind: [
            {
              role: "Research Scientist",
              jobLevel: "Senior Level",
              skills: ["Machine Learning", "Python"],
              responsibilities: [
                "Conduct AI research",
                "Publish findings in academic journals",
              ],
              currentSalary: 120000,
              benchmarkSalary: 125000,
              salaryRange: "110,000 - 130,000",
              careerPath: "Principal Scientist",
              growthOpportunities: "Research grants, academic partnerships",
              yearsOfExperience: 10,
            },
          ],
        },
      },
      Finance: {
        companies: {
          HSBC: [
            {
              role: "Risk Analyst",
              jobLevel: "Mid Level",
              skills: ["Risk Management", "Data Analysis"],
              responsibilities: [
                "Analyze financial risks",
                "Prepare risk reports",
              ],
              currentSalary: 80000,
              benchmarkSalary: 82000,
              salaryRange: "75,000 - 85,000",
              careerPath: "Senior Risk Analyst",
              growthOpportunities:
                "Risk management certifications, MBA programs",
              yearsOfExperience: 5,
            },
          ],
          Barclays: [
            {
              role: "Corporate Lawyer",
              jobLevel: "Senior Level",
              skills: ["Corporate Law", "Contract Negotiation"],
              responsibilities: [
                "Advise on legal matters",
                "Draft and review contracts",
              ],
              currentSalary: 130000,
              benchmarkSalary: 135000,
              salaryRange: "120,000 - 140,000",
              careerPath: "Partner",
              growthOpportunities: "Legal certifications, leadership training",
              yearsOfExperience: 12,
            },
          ],
        },
      },
    },
  },
  Australia: {
    industries: {
      Tech: {
        companies: {
          Atlassian: [
            {
              role: "DevOps Engineer",
              jobLevel: "Mid Level",
              skills: ["AWS", "Kubernetes"],
              responsibilities: [
                "Automate infrastructure deployment",
                "Manage CI/CD pipelines",
              ],
              currentSalary: 85000,
              benchmarkSalary: 88000,
              salaryRange: "80,000 - 90,000",
              careerPath: "Senior DevOps Engineer",
              growthOpportunities: "Certifications, conferences",
              yearsOfExperience: 6,
            },
          ],
          Canva: [
            {
              role: "UX Designer",
              jobLevel: "Mid Level",
              skills: ["User Research", "UI Design"],
              responsibilities: [
                "Design user-friendly interfaces",
                "Conduct user testing",
              ],
              currentSalary: 75000,
              benchmarkSalary: 78000,
              salaryRange: "70,000 - 80,000",
              careerPath: "Senior UX Designer",
              growthOpportunities: "Design workshops, advanced training",
              yearsOfExperience: 5,
            },
          ],
        },
      },
      Mining: {
        companies: {
          "BHP Billiton": [
            {
              role: "Mining Engineer",
              jobLevel: "Mid Level",
              skills: ["Mining Engineering", "Project Management"],
              responsibilities: [
                "Plan and oversee mining operations",
                "Ensure safety standards",
              ],
              currentSalary: 100000,
              benchmarkSalary: 105000,
              salaryRange: "95,000 - 110,000",
              careerPath: "Senior Mining Engineer",
              growthOpportunities:
                "Leadership training, technical certifications",
              yearsOfExperience: 7,
            },
          ],
          "Rio Tinto": [
            {
              role: "Geologist",
              jobLevel: "Senior Level",
              skills: ["Geology", "Resource Estimation"],
              responsibilities: [
                "Analyze geological data",
                "Develop exploration strategies",
              ],
              currentSalary: 110000,
              benchmarkSalary: 115000,
              salaryRange: "100,000 - 120,000",
              careerPath: "Lead Geologist",
              growthOpportunities: "Research grants, international projects",
              yearsOfExperience: 9,
            },
          ],
        },
      },
    },
  },
  India: {
    industries: {
      Tech: {
        companies: {
          Infosys: [
            {
              role: "Software Developer",
              jobLevel: "Mid Level",
              skills: ["Java", "Spring Framework"],
              responsibilities: [
                "Develop software applications",
                "Collaborate with international clients",
              ],
              currentSalary: 50000,
              benchmarkSalary: 52000,
              salaryRange: "45,000 - 55,000",
              careerPath: "Senior Software Developer",
              growthOpportunities: "Certifications, overseas assignments",
              yearsOfExperience: 4,
            },
          ],
          "Tata Consultancy Services": [
            {
              role: "Data Engineer",
              jobLevel: "Mid Level",
              skills: ["SQL", "ETL"],
              responsibilities: [
                "Build and maintain data pipelines",
                "Work with big data technologies",
              ],
              currentSalary: 60000,
              benchmarkSalary: 62000,
              salaryRange: "55,000 - 65,000",
              careerPath: "Senior Data Engineer",
              growthOpportunities:
                "Big data certifications, project leadership",
              yearsOfExperience: 5,
            },
          ],
        },
      },
      Finance: {
        companies: {
          "HDFC Bank": [
            {
              role: "Branch Manager",
              jobLevel: "Senior Level",
              skills: ["Branch Operations", "Customer Service"],
              responsibilities: [
                "Manage branch operations",
                "Ensure customer satisfaction",
              ],
              currentSalary: 70000,
              benchmarkSalary: 72000,
              salaryRange: "65,000 - 75,000",
              careerPath: "Regional Manager",
              growthOpportunities: "Leadership training, management courses",
              yearsOfExperience: 7,
            },
          ],
          "ICICI Bank": [
            {
              role: "Financial Consultant",
              jobLevel: "Mid Level",
              skills: ["Financial Planning", "Sales"],
              responsibilities: [
                "Advise clients on financial products",
                "Develop client relationships",
              ],
              currentSalary: 50000,
              benchmarkSalary: 52000,
              salaryRange: "45,000 - 55,000",
              careerPath: "Senior Financial Consultant",
              growthOpportunities: "Certifications, advanced sales training",
              yearsOfExperience: 4,
            },
          ],
        },
      },
    },
  },
  China: {
    industries: {
      Tech: {
        companies: {
          Alibaba: [
            {
              role: "Backend Developer",
              jobLevel: "Mid Level",
              skills: ["Java", "Microservices"],
              responsibilities: [
                "Develop backend services",
                "Ensure system scalability",
              ],
              currentSalary: 70000,
              benchmarkSalary: 72000,
              salaryRange: "65,000 - 75,000",
              careerPath: "Senior Backend Developer",
              growthOpportunities: "International projects, advanced training",
              yearsOfExperience: 5,
            },
          ],
          Tencent: [
            {
              role: "Game Developer",
              jobLevel: "Senior Level",
              skills: ["C++", "Unity"],
              responsibilities: [
                "Develop and optimize games",
                "Lead development teams",
              ],
              currentSalary: 100000,
              benchmarkSalary: 105000,
              salaryRange: "95,000 - 110,000",
              careerPath: "Lead Game Developer",
              growthOpportunities:
                "Game development conferences, international experience",
              yearsOfExperience: 9,
            },
          ],
        },
      },
      Finance: {
        companies: {
          "China Construction Bank": [
            {
              role: "Credit Analyst",
              jobLevel: "Mid Level",
              skills: ["Credit Analysis", "Financial Reporting"],
              responsibilities: [
                "Analyze credit data",
                "Prepare credit reports",
              ],
              currentSalary: 60000,
              benchmarkSalary: 62000,
              salaryRange: "55,000 - 65,000",
              careerPath: "Senior Credit Analyst",
              growthOpportunities:
                "Financial certifications, leadership training",
              yearsOfExperience: 5,
            },
          ],
          "Industrial and Commercial Bank of China": [
            {
              role: "Investment Analyst",
              jobLevel: "Mid Level",
              skills: ["Investment Analysis", "Portfolio Management"],
              responsibilities: [
                "Analyze investment opportunities",
                "Manage investment portfolios",
              ],
              currentSalary: 70000,
              benchmarkSalary: 72000,
              salaryRange: "65,000 - 75,000",
              careerPath: "Senior Investment Analyst",
              growthOpportunities:
                "Advanced investment courses, international projects",
              yearsOfExperience: 6,
            },
          ],
        },
      },
    },
  },
};
