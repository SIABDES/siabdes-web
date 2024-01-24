import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function MultiSelect() {
  return (
    <Select>
      <SelectTrigger>Mantap</SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">Mantap</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
