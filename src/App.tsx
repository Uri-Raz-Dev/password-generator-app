import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import arrow from './assets/images/icon-arrow-right.svg'
import copy from './assets/images/icon-copy.svg'
import PasswordSlider from './comps/PasswordSlider'
import PasswordFilter from './comps/PasswordFilter'
import PasswordStrength from './comps/PasswordStrength'
import { chars } from './main'
import { useState } from 'react'

export type StrengthStates = 'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG' | null

const App = () => {
  const [check, setCheck] = useState<(string | null)[]>([])
  const [arr, setArr] = useState<string[]>([])
  const [numOfChars, setNumOfChars] = useState<number>(0)
  const [strengthState, setStrengthState] = useState<StrengthStates>(null)
  const [txt, setTxt] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setArr([])
    setStrengthState(null)
    setTxt(null)
    handleCheck()
    handleStrStates()
  }
  const handleCheck = (): void => {
    const maxLength = numOfChars
    const filtered = chars.filter((char: string) => {
      const regexUpper: RegExp = /[A-Z]/
      const regexLower: RegExp = /[a-z]/
      const regexNum: RegExp = /[0-9]/
      const regexSymbol: RegExp = /[!@#$%^&*_+\-=?~]/

      if (check.length === 0) return

      return check.some((c) => {
        if (c === 'upper') return regexUpper.test(char)
        if (c === 'lower') return regexLower.test(char)
        if (c === 'number') return regexNum.test(char)
        if (c === 'symbol') return regexSymbol.test(char)
        return false
      })
    })

    const shuffledArr = [...filtered]
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]
    }

    const limitedArr = shuffledArr.slice(0, maxLength)

    if (limitedArr.length === 0) return
    const randomIndex = Math.floor(Math.random() * limitedArr.length)
    const randomChar = limitedArr[randomIndex]

    console.log('ShuffledArr limitedArr array:', limitedArr)
    console.log('Random char:', randomChar)

    setArr(limitedArr)
  }

  const handleStrStates = (): void => {
    if (!check) return
    if (numOfChars < 5 && numOfChars !== 0) {
      setStrengthState('TOO WEAK!')
    } else if (numOfChars >= 5 && numOfChars < 10) {
      setStrengthState('WEAK')
    } else if (numOfChars >= 10 && numOfChars < 15) {
      setStrengthState('MEDIUM')
    } else if (numOfChars >= 15 && numOfChars <= 20) {
      setStrengthState('STRONG')
    }
  }

  return (
    <form
      id="password-gen"
      className="mx-4 flex min-h-[100dvh] max-w-2xl flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-preset4 text-(--color-grey600)">
        Password Generator
      </h1>
      <Label className="relative w-full">
        <Input
          id="password"
          className="read-only:text-preset2 h-12 w-full bg-(--color-grey800) p-4 placeholder:text-[1.5rem] placeholder:leading-3 placeholder:font-(--font-display) placeholder:font-bold placeholder:tracking-normal placeholder:text-(--color-grey700)"
          type="text"
          readOnly
          placeholder="P4$5W0rD!"
          value={arr.join('')}
        />
        <button
          type="button"
          onClick={() => {
            const copiedText = arr.join('')
            navigator.clipboard.writeText(copiedText).then(() => {
              setTxt(copiedText)
              setTimeout(() => setTxt(null), 1000)
            })
          }}
          className="absolute right-4 bottom-3.5 cursor-pointer"
        >
          <img src={copy} alt="copy text to clipboard" />
        </button>
        {txt && (
          <span className="text-preset4 absolute right-0 bottom-15.5 [animation:fade-out_1s_ease-in-out_forwards] text-(--color-green200)">
            copied
          </span>
        )}
      </Label>

      <section className="flex w-full flex-col gap-8 bg-(--color-grey800) p-4">
        <PasswordSlider numOfChars={numOfChars} setNumOfChars={setNumOfChars} />

        <PasswordFilter check={check} setCheck={setCheck} />

        <PasswordStrength strengthState={strengthState} />

        <Button className="after:content-[{arrow}] -mt-4 flex cursor-pointer gap-4 bg-(--color-green200) py-7">
          <span className="text-preset4 text-(--color-grey800)">GENERATE</span>
          <img src={arrow} alt="arrow" />
        </Button>
      </section>
    </form>
  )
}

export default App
