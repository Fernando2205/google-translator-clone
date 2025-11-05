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
    return {
      ...state,
      loading: true,
      fromLanguage: action.payload,
      result: ''

    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      loading: true,
      toLanguage: action.payload,
      result: ''
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
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
      toLanguage: state.fromLanguage,
      result: ''
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
