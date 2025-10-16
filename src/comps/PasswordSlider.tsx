import { Slider } from '@/components/ui/slider'
import { Label } from '@radix-ui/react-label'
const PasswordSlider = () => {
  return (
    <section className="flex flex-col gap-7">
      <section className="flex justify-between">
        <Label className="text-preset4 text-(--color-grey200)" htmlFor="slider">
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
  )
}

export default PasswordSlider
