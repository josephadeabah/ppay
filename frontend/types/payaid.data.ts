export interface EmployeeData {
  [key: string]: string | undefined;
  employeeId: string;
  name: string;
  gender: string;
  ethnicity: string;
  jobTitle: string;
  department: string;
  location: string;
  baseSalary: string;
  bonus: string;
  stockOptions: string;
  yearsOfExperience: string;
  performancePoints: string;
  marketRate: string;
  industryPoints: string;
  departmentPoints: string;
  seniorityPoints: string;
  educationLevelPoints: string;
  companySizePoints: string;
  jobLevel: string;
  managerRating: string;
  employeeRating: string;
  dateOfHire?: string; // Employee's hire date
  lastSalaryIncreaseDate?: string; // Date of the last salary increase
  lastSalaryIncreasePercentage?: string; // Percentage of the last salary increase
  equitablePayRange?: string; // Calculated equitable pay range
  internalPayRange?: string; // Pay range for similar roles within the company
  benefits?: string; // Non-monetary compensation like health insurance, etc.
  totalCompensation?: string; // Total of base salary, bonus, and stock options
  costOfLivingAdjustment?: string; // Adjustment based on the cost of living in the location
  promoted?: string; // Optional field to track if the employee has been promoted
  promotionDeterminant?: string; // Optional field to capture reasons or criteria for promotion
}
