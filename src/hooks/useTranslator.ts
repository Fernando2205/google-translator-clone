import { useReducer } from 'react'
import { type Action, type FromLanguage, type Language, type State } from '../types'
import { AUTO_LANGUAGE } from '../constants'

// 1.  Estado inicial
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Reducer
const reducer = (state: State, action: Action) => {
  const { type } = action

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state
    const loading = state.fromText !== ''
    return {
      ...state,
      loading,
      fromLanguage: action.payload,
      result: ''

    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state
    return {
      ...state,
      loading: true,
      toLanguage: action.payload,
      result: ''
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''
    return {
      ...state,
      loading,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }
  if (type === 'SWAP_LANGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      fromText: state.result,
      result: '',
      loading: state.result !== '',
      toLanguage: state.fromLanguage,

    }
  }
  return state
}

export function useTranslator () {
  // 3. Usar el hook useReducer
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] = useReducer(reducer, initialState)

  const swapLanguages = () => {
    dispatch({ type: 'SWAP_LANGUAGES' })
  }

  const setFromLanguage = (language: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload: language })
  }

  const setToLanguage = (language: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload: language })
  }

  const setFromText = (text: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload: text })
  }

  const setResult = (text: string) => {
    dispatch({ type: 'SET_RESULT', payload: text })
  }
  /* No retornar el dispatch para no atar nuestro componentes a un contrato especifico
  En lugar de eso retornamos funciones que encapsulan las acciones */
  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    swapLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
