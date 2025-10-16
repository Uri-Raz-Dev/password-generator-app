import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import arrow from './assets/images/icon-arrow-right.svg'
import copy from './assets/images/icon-copy.svg'
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
          className="h-12 w-full bg-(--color-grey800) p-4 placeholder:text-[1.5rem] placeholder:leading-3 placeholder:font-(--font-display) placeholder:font-bold placeholder:tracking-normal placeholder:text-(--color-grey700)"
          type="text"
          placeholder="P4$5W0rD!"
        />
        <img
          className="absolute right-4 bottom-3.5 cursor-pointer"
          src={copy}
          alt=""
        />
      </Label>

      <section className="flex w-full flex-col gap-8 bg-(--color-grey800) p-4">
        <section className="flex flex-col gap-7">
          <section className="flex justify-between">
            <Label
              className="text-preset4 text-(--color-grey200)"
              htmlFor="slider"
            >
              Character Length
            </Label>
            <span className="text-preset2 text-(--color-green200)">0</span>
          </section>

          <Slider
            className="bg-(--color-850)"
            defaultValue={[0]}
            max={20}
            step={1}
          />
        </section>

        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <Checkbox id="include-uppercase"></Checkbox>
            <Label
              className="text-preset4 text-(--color-grey200)"
              htmlFor="include-uppercase"
            >
              Include Uppercase Letters
            </Label>
          </li>
          <li className="flex items-center gap-4">
            <Checkbox id="include-lowercase"></Checkbox>
            <Label
              className="text-preset4 text-(--color-grey200)"
              htmlFor="include-lowercase"
            >
              Include Lowercase Letters
            </Label>
          </li>
          <li className="flex items-center gap-4">
            <Checkbox id="include-numbers"></Checkbox>
            <Label
              className="text-preset4 text-(--color-grey200)"
              htmlFor="include-numbers"
            >
              Include Numbers
            </Label>
          </li>
          <li className="flex items-center gap-4">
            <Checkbox id="include-symbols"></Checkbox>
            <Label
              className="text-preset4 text-(--color-grey200)"
              htmlFor="include-symbols"
            >
              Include Symbols
            </Label>
          </li>
        </ul>
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
        <Button className="after:content-[{arrow}] -mt-4 flex cursor-pointer gap-4 bg-(--color-green200) py-7">
          <span className="text-preset4 text-(--color-grey800)">GENERATE</span>
          <img src={arrow} alt="arrow" />
        </Button>
      </section>
    </form>
  )
}

export default App
