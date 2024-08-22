import { DateTime } from "luxon";

export const columnsMapper: Record<string, string> = {
  created_dt: "Created_DT",
  data_source_modified_dt: "Modifed_DT",
  entity_type: "Entity",
  operating_status: "Operating status",
  legal_name: "Legal name",
  dba_name: "DBA name",
  physical_address: "Physical address",
  phone: "Phone",
  usdot_number: "DOT",
  mc_mx_ff_number: "MC/MX/FF",
  power_units: "Power units",
  out_of_service_date: "Out of service date",
};

export const dateFormat = "dd LLL, yyyy hh:MM a";

export const getDateObject = (value: string) =>
  DateTime.fromFormat(value, dateFormat);

export const compareDates = (date1: string, date2: string) =>
  getDateObject(date1) > getDateObject(date2) ? -1 : 1;
