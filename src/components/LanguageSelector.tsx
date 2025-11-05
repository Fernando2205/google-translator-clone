import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from '../constants'
import { type FromLanguage, type Language, SectionType } from '../types.d'

type LanguageSelectorProps =
| { type: SectionType.FROM, value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: SectionType.TO, value: Language, onChange: (language: Language) => void }

function LanguageSelector ({ type, value, onChange }: LanguageSelectorProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }
  return (
    <>
      <label htmlFor={type === SectionType.FROM ? 'to-language' : 'from-language'} className='sr-only'>
        {type === SectionType.FROM ? 'Idioma de origen' : 'Idioma de destino'}
      </label>
      <select
        id={type === SectionType.FROM ? 'from-language' : 'to-language'}
        value={value}
        onChange={handleOnChange}
        className='w-full rounded-lg border-none bg-transparent px-3 py-2 text-sm font-medium text-[#e8eaed] hover:bg-[#3c4043] focus:bg-[#3c4043] focus:outline-none'
      >
        {type === SectionType.FROM && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
        {Object.entries(SUPORTED_LANGUAGES).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </>
  )
}

export default LanguageSelector
