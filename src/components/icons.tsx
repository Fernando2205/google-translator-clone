export const SwapButton = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className='h-5 w-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
      />
    </svg>
  )
}

export const CopyIcon = ({ color }:{ color: string }) => {
  return (
    <svg focusable='false' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24' viewBox='0 0 24 24' width='24'><g><rect fill='none' height='24' width='24' /></g><g><path fill={color} d='M16,20H5V6H3v14c0,1.1,0.9,2,2,2h11V20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9 C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z' /></g></svg>
  )
}

export const SpeakerIcon = ({ color }:{ color: string }) => {
  return (
    <svg focusable='false' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill={color} d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' /></svg>
  )
}
