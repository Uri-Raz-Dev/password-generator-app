const PasswordStrength = () => {
  return (
    <section className="flex items-center justify-between bg-(--color-grey850) px-4 py-5.5">
      <span className="text-preset4 text-(--color-grey600)">STRENGTH</span>
      <section className="flex">
        <span className="hidden">MEDIUM</span>
        <ul className="flex -space-x-2">
          <li className="h-2.5 w-7 rotate-90 border-2"></li>
          <li className="h-2.5 w-7 rotate-90 border-2"></li>
          <li className="h-2.5 w-7 rotate-90 border-2"></li>
          <li className="h-2.5 w-7 rotate-90 border-2"></li>
        </ul>
      </section>
    </section>
  )
}

export default PasswordStrength
