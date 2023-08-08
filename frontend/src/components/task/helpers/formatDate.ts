import { format } from "date-fns";

export function formatDateToString(date: string | Date | undefined): string {
  if (!date) {
    return "";
  }

  const parsedDate = typeof date === "string" ? new Date(date) : date;
  const formattedDate = format(parsedDate, "PPP");

  return formattedDate;
}
