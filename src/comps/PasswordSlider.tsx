import { Slider } from '@/components/ui/slider'
import { Label } from '@radix-ui/react-label'
const PasswordSlider = ({
  numOfChars,
  setNumOfChars,
}: {
  numOfChars: number
  setNumOfChars: React.Dispatch<React.SetStateAction<number>>
}) => {
  const step: number = 1
  const maxStep: number = 20

  return (
    <section className="flex flex-col justify-center gap-7 md:gap-9">
      <section className="flex items-center justify-between">
        <Label
          className="text-preset4 md:text-preset3 text-(--color-grey200)"
          htmlFor="slider"
        >
          Character Length
        </Label>
        <span className="text-preset2 md:text-preset1 text-(--color-green200)">
          {numOfChars}
        </span>
      </section>

      <Slider
        className="bg-(--color-850)"
        defaultValue={[numOfChars]}
        value={[numOfChars]}
        max={maxStep}
        step={step}
        onValueChange={(val: number[]) => setNumOfChars(val[0])}
      />
    </section>
  )
}

export default PasswordSlider
