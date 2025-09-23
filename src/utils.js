import { format, isValid, parseISO } from "date-fns";

export function validateDate(date, formatStr) {
    date = parseISO(date);
    date = isValid(date) ? format(date, formatStr) : "";
    return date;
}