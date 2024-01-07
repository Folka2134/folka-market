import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
  items: { [key: string]: string[] };
};

const FormDropDown = ({ value, onChangeHandler, items }: DropdownProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder={Object.keys(items)} />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(items).length > 0 &&
          Object.keys(items).map((key) =>
            items[key].map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="select-item p-regular-14"
              >
                {item}
              </SelectItem>
            ))
          )}
      </SelectContent>
    </Select>
  );
};

export default FormDropDown;
