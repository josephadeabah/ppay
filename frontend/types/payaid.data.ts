export interface EmployeeData {
  [key: string]: string;
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
  seniorityLevel: string;
  managerRating: string; // New field
  employeeRating: string; // New field
}
