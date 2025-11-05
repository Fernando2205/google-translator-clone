// Definición de tipos
import { AUTO_LANGUAGE, type SUPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

// Para definir el contrato de un objeto es más recomendable usar una interface
export interface State {
  fromLanguage: string,
  toLanguage: string,
  fromText: string,
  result: string,
  loading: boolean
}

export type Action =
   | { type: 'SET_FROM_LANGUAGE', payload: string }
   | { type: 'SET_TO_LANGUAGE', payload: string }
   | { type: 'SET_FROM_TEXT', payload: string }
   | { type: 'SET_RESULT', payload: string }
   | { type: 'SWAP_LANGUAGES', }
