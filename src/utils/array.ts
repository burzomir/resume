export const findBy = <T>(propName: keyof T) => <V extends T>(array: V[]) => <U extends keyof T>(value: V[U]) => {
  return array.find(element => element[propName] === value)
}

interface WithId {
  id: number
}
export const findById = findBy<WithId>('id')

export const createRange = (start: number, end: number): number[] => {
  if (start < end) {
    return [start, ...createRange(start + 1, end)]
  } else {
    return []
  }
}
