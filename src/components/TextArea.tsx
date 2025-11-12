import SpeakerButton from './ui/SpeakerButton'

type TextAreaProps = {
  value: string,
  onChange: (language: string) => void
  onSpeakerClick: () => void
}

function TextArea ({ value, onChange, onSpeakerClick }: TextAreaProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }
  return (
    <div className='w-full '>
      <label htmlFor='source-text' className='sr-only'>
        Texto de origen
      </label>
      <textarea
        id='source-text'
        value={value}
        onChange={handleOnChange}
        placeholder='Escribe el texto...'
        className='h-64 w-full resize-none border-none bg-transparent text-lg text-[#e8eaed] placeholder-[#9aa0a6] focus:outline-none'

      />
      <SpeakerButton className='absolute bottom-4 left-4 hover:cursor-pointer' onClick={onSpeakerClick} />

    </div>
  )
}

export default TextArea
