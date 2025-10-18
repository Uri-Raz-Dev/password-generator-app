import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@radix-ui/react-label'
const PasswordFilter = ({
  check,
  setCheck,
}: {
  check: (string | null)[]
  setCheck: React.Dispatch<React.SetStateAction<(string | null)[]>>
}) => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4 md:gap-6">
        <Checkbox
          checked={check.includes('upper')}
          onCheckedChange={() =>
            setCheck((prev) =>
              prev.includes('upper')
                ? prev.filter((c) => c !== 'upper')
                : [...prev, 'upper']
            )
          }
          id="include-uppercase"
        ></Checkbox>
        <Label
          className="text-preset4 md:text-preset3 text-(--color-grey200)"
          htmlFor="include-uppercase"
        >
          Include Uppercase Letters
        </Label>
      </li>
      <li className="flex items-center gap-4 md:gap-6">
        <Checkbox
          checked={check.includes('lower')}
          onCheckedChange={() =>
            setCheck((prev) =>
              prev.includes('lower')
                ? prev.filter((c) => c !== 'lower')
                : [...prev, 'lower']
            )
          }
          id="include-lowercase"
        ></Checkbox>
        <Label
          className="text-preset4 md:text-preset3 text-(--color-grey200)"
          htmlFor="include-lowercase"
        >
          Include Lowercase Letters
        </Label>
      </li>
      <li className="flex items-center gap-4 md:gap-6">
        <Checkbox
          checked={check.includes('number')}
          onCheckedChange={() =>
            setCheck((prev) =>
              prev.includes('number')
                ? prev.filter((c) => c !== 'number')
                : [...prev, 'number']
            )
          }
          id="include-numbers"
        ></Checkbox>
        <Label
          className="text-preset4 md:text-preset3 text-(--color-grey200)"
          htmlFor="include-numbers"
        >
          Include Numbers
        </Label>
      </li>
      <li className="flex items-center gap-4 md:gap-6">
        <Checkbox
          checked={check.includes('symbol')}
          onCheckedChange={() =>
            setCheck((prev) =>
              prev.includes('symbol')
                ? prev.filter((c) => c !== 'symbol')
                : [...prev, 'symbol']
            )
          }
          id="include-symbols"
        ></Checkbox>
        <Label
          className="text-preset4 md:text-preset3 text-(--color-grey200)"
          htmlFor="include-symbols"
        >
          Include Symbols
        </Label>
      </li>
    </ul>
  )
}

export default PasswordFilter
