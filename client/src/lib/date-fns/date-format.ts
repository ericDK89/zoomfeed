import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale'

export const formatDate = (date: string) => {
  const formattedDate = format((new Date(date)), "dd 'de' MMMM 'às' HH':'mm'h'", {
    locale: ptBR,
  })
  return formattedDate
}

export const formatDateDistance = (date: string) => {
  const formattedDate = formatDistanceToNow((new Date(date)), {
    locale: ptBR,
    addSuffix: true,
  })
  return formattedDate
}
