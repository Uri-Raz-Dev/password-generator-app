import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@radix-ui/react-label'
const PasswordFilter = () => {
  return (
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
  )
}

export default PasswordFilter
