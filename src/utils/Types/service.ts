import { Dispatch, SetStateAction } from 'react'

export type InferObjectValueType<T> = T extends { [key: string]: infer U } ? U : never
export type UseStateCallBackType<T> = Dispatch<SetStateAction<T>>
