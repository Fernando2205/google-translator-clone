type OutputProps = {
  loading: boolean,
  result: string
}

function Output ({ loading, result }: OutputProps) {
  return (
    <>
      {loading && (
        <div className='flex h-64 items-center justify-center' role='status' aria-label='Traduciendo'>
          <div className='h-8 w-8 animate-spin rounded-full border-4 border-[#8ab4f8] border-t-transparent' />
        </div>
      )}
      {!loading && (
        <output
          htmlFor='source-text from-language to-language'
          className='block h-64 overflow-y-auto text-lg text-[#e8eaed]'
          aria-live='polite'
        >
          {result || <span className='text-[#9aa0a6]'>Traducción</span>}
        </output>
      )}
    </>
  )
}

export default Output
