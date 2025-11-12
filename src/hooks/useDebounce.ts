import { useEffect, useState } from 'react'
/**
 * Hook personalizado que aplica un "debounce" a un valor por un tiempo de espera especificado.
 *
 * @template T - El tipo del valor a "filtrar".
 * @param value - El valor a filtrado.
 * @param delay - El tiempo de espera en milisegundos para el debounce. Por defecto es 500ms.
 * @returns Una variable que contiene el valor debilitado.
 *
 * @example
 * const debouncedValue = useDebounce(searchTerm, 300);
 *
 * @remarks
 * El valor filtrado solo se actualizará después de que haya pasado el tiempo de espera especificado
 * sin que el valor cambie. Útil para optimizar el rendimiento de operaciones costosas como llamadas a API
 * en respuesta a la entrada del usuario.
 */

export function useDebounce<T> (value:T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debouncedValue
}
