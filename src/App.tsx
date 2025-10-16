import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import arrow from './assets/images/icon-arrow-right.svg'
import copy from './assets/images/icon-copy.svg'
import PasswordSlider from './comps/PasswordSlider'
import PasswordFilter from './comps/PasswordFilter'
import PasswordStrength from './comps/PasswordStrength'
const App = () => {
  return (
    <form
      id="password-gen"
      className="mx-4 flex min-h-[100dvh] flex-col items-center justify-center gap-4"
      action=""
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
        />
        <img
          className="absolute right-4 bottom-3.5 cursor-pointer"
          src={copy}
          alt=""
        />
      </Label>

      <section className="flex w-full flex-col gap-8 bg-(--color-grey800) p-4">
        <PasswordSlider />

        <PasswordFilter />

        <PasswordStrength />

        <Button className="after:content-[{arrow}] -mt-4 flex cursor-pointer gap-4 bg-(--color-green200) py-7">
          <span className="text-preset4 text-(--color-grey800)">GENERATE</span>
          <img src={arrow} alt="arrow" />
        </Button>
      </section>
    </form>
  )
}

export default App
