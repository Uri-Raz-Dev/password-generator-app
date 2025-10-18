import type { StrengthStates } from '@/App'

const PasswordStrength = ({
  strengthState,
}: {
  strengthState: StrengthStates
}) => {
  const handleStrengthStates = (key: number) => {
    const base = 'h-2.5 w-7 rotate-90 border-2'
    let color = ''

    if (key === 1 && strengthState === 'TOO WEAK!')
      color = 'bg-(--color-red500) border-(--color-red500)'
    else if ((key === 1 || key === 2) && strengthState === 'WEAK')
      color = 'bg-(--color-orange400) border-(--color-orange400)'
    else if (
      (key === 1 || key === 2 || key === 3) &&
      strengthState === 'MEDIUM'
    )
      color = 'bg-(--color-yellow300) border-(--color-yellow300)'
    else if (
      (key === 1 || key === 2 || key === 3 || key === 4) &&
      strengthState === 'STRONG'
    )
      color = 'bg-(--color-green200) border-(--color-green200)'

    return <li key={key} className={`${base} ${color}`}></li>
  }

  return (
    <section className="flex items-center justify-between bg-(--color-grey850) px-4 py-5.5 md:px-5 md:py-6.5">
      <span className="text-preset4 md:text-preset3 text-(--color-grey600)">
        STRENGTH
      </span>
      <section className="flex items-center gap-1">
        <span className="text-preset4 md:text-preset2 text-nowrap text-(--color-grey200)">
          {strengthState}
        </span>
        <ul className="flex -space-x-2">
          {Array.from({ length: 4 }, (_, idx) => handleStrengthStates(idx + 1))}
        </ul>
      </section>
    </section>
  )
}

export default PasswordStrength
