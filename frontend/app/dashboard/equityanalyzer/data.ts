// data.ts

export interface RoleResponsibilities {
  [role: string]: {
    points: number;
    responsibilities: {
      [responsibility: string]: number;
    };
  };
}

export interface SkillsQualifications {
  [skill: string]: number;
}

export interface ExperiencePoints {
  [experienceRange: string]: number;
}

export interface PerformancePoints {
  [performance: string]: number;
}

export interface LocationPoints {
  [location: string]: number;
}

export interface MarketRates {
  [rate: string]: number;
}

export interface IndustryPoints {
  [industry: string]: number;
}

export interface CompanySizeRevenue {
  [size: string]: number;
}

export interface SeniorityLevels {
  [level: string]: number;
}

export interface UnionAgreements {
  [agreement: string]: number;
}

export interface BenefitsPerks {
  [perk: string]: number;
}

export interface PayPolicies {
  [policy: string]: number;
}

export interface DiscriminationFactors {
  [discrimination: string]: number;
}

export interface Compliance {
  [compliance: string]: number;
}

export interface JobEvaluationSystems {
  [system: string]: number;
}

export interface SalaryDataRow {
  country: string;
  industry: string;
  company: string;
  role: string;
  currentSalaryByCompany: number;
  currentSalaryByRole: number;
  change: number;
  changeTimeframe: string;
}

export const payEquityData = {
  rolesAndResponsibilities: <RoleResponsibilities>{
    SoftwareEngineer: {
      points: 80,
      responsibilities: {
        "Develop and maintain web applications": 40,
        "Collaborate with cross-functional teams": 30,
        "Design system architecture": 10,
      },
    },
    DataScientist: {
      points: 90,
      responsibilities: {
        "Analyze large datasets": 40,
        "Build predictive models": 30,
        "Present findings to stakeholders": 20,
      },
    },
    ProductManager: {
      points: 85,
      responsibilities: {
        "Manage product development lifecycle": 40,
        "Define product vision and strategy": 30,
        "Coordinate with engineering and design teams": 15,
      },
    },
  },

  skillsAndQualifications: <SkillsQualifications>{
    JavaScript: 20,
    Python: 25,
    MachineLearning: 30,
    DataAnalysis: 20,
    ProjectManagement: 25,
    AdvancedDegree: 30,
  },

  experiencePoints: <ExperiencePoints>{
    "0-2 years": 20,
    "3-5 years": 40,
    "6-10 years": 60,
    "10+ years": 80,
  },

  performancePoints: <PerformancePoints>{
    Outstanding: 40,
    ExceedsExpectations: 30,
    MeetsExpectations: 20,
    NeedsImprovement: 10,
  },

  locationPoints: <LocationPoints>{
    "High Cost of Living Area": 50,
    "Medium Cost of Living Area": 30,
    "Low Cost of Living Area": 10,
  },

  marketRates: <MarketRates>{
    AboveMarket: 40,
    AtMarket: 20,
    BelowMarket: 10,
  },

  industryPoints: <IndustryPoints>{
    Tech: 40,
    Healthcare: 30,
    Manufacturing: 20,
    Finance: 50,
  },

  companySizeRevenue: <CompanySizeRevenue>{
    LargeEnterprise: 40,
    MediumSizedCompany: 30,
    SmallBusiness: 20,
  },

  seniorityLevels: <SeniorityLevels>{
    EntryLevel: 20,
    MidLevel: 40,
    SeniorLevel: 60,
    Executive: 80,
  },

  unionAgreements: <UnionAgreements>{
    StandardAgreement: 20,
    EnhancedAgreement: 30,
  },

  benefitsAndPerks: <BenefitsPerks>{
    ComprehensiveBenefitsPackage: 40,
    BasicBenefitsPackage: 20,
    MinimalBenefits: 10,
  },

  payPolicies: <PayPolicies>{
    TransparentAndFair: 40,
    StandardPolicy: 20,
    OpaquePolicy: 10,
  },

  discriminationFactors: <DiscriminationFactors>{
    NoDiscrimination: 40,
    MinorDiscrepancies: 20,
    SignificantDiscrepancies: 10,
  },

  compliance: <Compliance>{
    FullyCompliant: 40,
    PartiallyCompliant: 20,
    NonCompliant: 10,
  },

  jobEvaluationSystems: <JobEvaluationSystems>{
    StructuredEvaluationSystem: 40,
    BasicEvaluationSystem: 20,
    NoEvaluationSystem: 10,
  },
  // Example table data
  tableData: <SalaryDataRow[]>[
    {
      country: "USA",
      industry: "Tech",
      company: "Company A",
      role: "Software Engineer",
      currentSalaryByCompany: 80000,
      currentSalaryByRole: 85000,
      change: 5,
      changeTimeframe: "1 year",
    },
    {
      country: "USA",
      industry: "Tech",
      company: "Company B",
      role: "Data Scientist",
      currentSalaryByCompany: 90000,
      currentSalaryByRole: 95000,
      change: 10,
      changeTimeframe: "2 years",
    },
    // Add more rows as needed
  ],
};
