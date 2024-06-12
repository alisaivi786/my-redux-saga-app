// src/Services/EmployeeService.ts
import HttpService from './HttpService';
import { Employee } from '../Models/EmployeeDTO/Employee';

class EmployeeService {
  private httpService: HttpService<Employee>;

  constructor() {
    this.httpService = new HttpService<Employee>();
  }

  public getAllEmployees() {
    // Mock employee data
    const employees: Employee[] = [
        { id: 1, name: 'John Doe', position: 'Developer' },
        { id: 2, name: 'Jane Smith', position: 'Designer' },
        { id: 3, name: 'Sam Johnson', position: 'Product Manager' },
      ];
  
      return new Promise<{ data: Employee[] }>((resolve) => {
        setTimeout(() => {
          resolve({ data: employees });
        }, 1000);
      });
    //return this.httpService.get('/employees');
  }

  public getEmployeeById(id: number) {
    return this.httpService.get(`/employees/${id}`);
  }

  public createEmployee(employee: Employee) {
    console.log("Create Employee Api")
    return this.httpService.post('/employees', employee);
  }

  public updateEmployee(id: number, employee: Employee) {
    return this.httpService.put(`/employees/${id}`, employee);
  }

  public deleteEmployee(id: number) {
    return this.httpService.delete(`/employees/${id}`);
  }
}

export default new EmployeeService();
