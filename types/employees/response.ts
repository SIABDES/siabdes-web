import { BackendResponseType } from '@/common/types';
import { Employee, EmployeeOverview } from './employees';

export type EmployeesOverviewResponse = {
  _count: number;
  employees: EmployeeOverview[];
};

export type GetEmployeesResponse =
  BackendResponseType<EmployeesOverviewResponse>;

export type GetEmplooyeDetailsResponse = BackendResponseType<Employee>;

export type AddEmployeeDataResponse = BackendResponseType<{
  id: string;
  created_at: string;
}>;
