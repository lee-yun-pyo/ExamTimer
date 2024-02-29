import { NOON } from "@/constants";

export function convertToTimeFormat (hour: number, minute: number, noon: number) {
    return `${(hour + 1).toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${NOON[noon]}`
}