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
    <section className="flex flex-col gap-7">
      <section className="flex justify-between">
        <Label className="text-preset4 text-(--color-grey200)" htmlFor="slider">
          Character Length
        </Label>
        <span className="text-preset2 text-(--color-green200)">
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
