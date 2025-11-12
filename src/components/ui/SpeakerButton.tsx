import { SpeakerIcon } from '../icons'

const SpeakerButton = ({ className, onClick }:{ className: string, onClick: () => void }) => {
  return (
    <button onClick={onClick} className={className}>
      <SpeakerIcon color='white' />
    </button>
  )
}

export default SpeakerButton
