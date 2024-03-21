import { Pph21TaxPeriodMonth } from "../general";
import {
  PermanentEmployeeFormData,
  PermanentEmployeeBeforeDecemberFormData,
  PermanentEmployeeDecemberFormData,
} from "./permanent-employee";

export function isPermanentEmployeeDecember(
  dto: PermanentEmployeeFormData
): dto is PermanentEmployeeDecemberFormData {
  return dto.period.month === Pph21TaxPeriodMonth.DECEMBER;
}

export function isPermanentEmployeeBeforeDecember(
  dto: PermanentEmployeeFormData
): dto is PermanentEmployeeBeforeDecemberFormData {
  return (
    dto.period.month >= Pph21TaxPeriodMonth.JANUARY &&
    dto.period.month <= Pph21TaxPeriodMonth.NOVEMBER
  );
}
