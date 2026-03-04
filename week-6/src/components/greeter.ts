import { formatDate } from "@/utils/formatters"

export function sayHello(name: string): string {
    const today = formatDate(new Date())
    return `Привет, ${name}! Сегодня ${today}`
}