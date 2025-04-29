import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date | string, endDate?: Date | string): string {
  // Parse the start date if it's a string in DD/MM/YYYY format
  let startDateObj: Date;
  if (typeof startDate === "string") {
    const [day, month, year] = startDate.split("/").map(Number);
    startDateObj = new Date(year, month - 1, day); // month is 0-indexed in JS Date
  } else {
    startDateObj = startDate;
  }

  const startMonth = startDateObj.toLocaleString("default", { month: "short" });
  const startYear = `'${startDateObj.getFullYear().toString().slice(-2)}`;
  
  let endMonth = '';
  let endYear = '';

  if (endDate) {
    // Parse the end date if it's a string in DD/MM/YYYY format
    let endDateObj: Date;
    if (typeof endDate === "string") {
      if (endDate.includes("/")) {
        const [day, month, year] = endDate.split("/").map(Number);
        endDateObj = new Date(year, month - 1, day); // month is 0-indexed in JS Date
        endMonth = endDateObj.toLocaleString("default", { month: "short" });
        endYear = `'${endDateObj.getFullYear().toString().slice(-2)}`;
      } else {
        // Handle special case like "Present"
        endMonth = endDate;
        endYear = '';
      }
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = `'${endDate.getFullYear().toString().slice(-2)}`;
    }
  } else {
    endMonth = 'Present';
    endYear = '';
  }

  // Format the output with spaces between month and year
  return `${startMonth} ${startYear} - ${endMonth}${endYear ? ' ' + endYear : ''}`.replace(/ - $/, '');
}