import { useTranslator } from './hooks/useTranslator'
import { AUTO_LANGUAGE } from './constants'
import { SwapButton } from './components/icons'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import TextArea from './components/TextArea'
import Output from './components/Output'
import { useEffect } from 'react'
import { translateText } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

function App () {
  const {
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
  } = useTranslator()

  const debouncedText = useDebounce(fromText, 300)
  useEffect(() => {
    if (fromLanguage === toLanguage) {
      setResult(debouncedText)
      return
    }
    if (debouncedText === '') return
    translateText({ fromLanguage, toLanguage, text: debouncedText })
      .then(text => {
        if (text == null) return
        setResult(text)
      })
      .catch(err => {
        console.error('Error al traducir el texto:', err)
      })
  }, [debouncedText, fromLanguage, toLanguage])

  return (
    <div className='min-h-screen bg-[#202124]'>
      <div className='container mx-auto max-w-6xl px-4 py-8'>
        {/* Header */}
        <header className='mb-8'>
          <h1 className='text-2xl font-normal text-[#8ab4f8]'>Google Translate</h1>
        </header>

        {/* Main Content */}
        <main>
          <section aria-label='Traductor de texto' className='rounded-lg bg-[#292a2d] shadow-xl'>
            {/* Language Selectors */}
            <form onSubmit={(e) => e.preventDefault()} className='flex items-center gap-2 border-b border-[#3c4043] p-4'>
              {/* From Language Selector */}
              <div className='flex-1'>
                <LanguageSelector type={SectionType.FROM} value={fromLanguage} onChange={setFromLanguage} />

              </div>
              {/* Swap Button */}
              <button
                type='button'
                disabled={fromLanguage === AUTO_LANGUAGE}
                onClick={swapLanguages}
                className='rounded-full p-2 text-[#e8eaed] hover:bg-[#3c4043]  disabled:pointer-events-none disabled:opacity-50'
                aria-label='Intercambiar idiomas'
              >
                <SwapButton />
              </button>

              {/* To Language Selector */}
              <div className='flex-1'>
                <LanguageSelector type={SectionType.TO} value={toLanguage} onChange={setToLanguage} />
              </div>
            </form>

            {/* Text Areas */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
              {/* Source Text Area */}
              <div className='border-b border-[#3c4043] p-6 md:border-b-0 md:border-r md:border-[#3c4043]'>
                <TextArea value={fromText} onChange={setFromText} />
              </div>

              {/* Translation Result Area */}
              <div className='relative bg-[#292a2d] p-6'>
                <Output loading={loading} result={result} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>

  )
}

export default App
