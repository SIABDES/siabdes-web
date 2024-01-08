import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AccountGroupType, AccountSubgroupType } from "@/types/accounts";
import React from "react";
import ItemGroup from "./item-group";

interface SelectItemsGroupProps {
  items: AccountGroupType[];
}

export default function SelectItemGroup({ items }: SelectItemsGroupProps) {
  return (
    <div>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Pilih Kategori" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <ItemGroup
              key={item.group_ref}
              label={item.group_name}
              items={item.subgroups}
            />
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// interface SelectItemGroupMantapProps {
//   label: string;
//   items: AccountSubgroupType[];
// }

// function SelectItemGroupMantap({ items, label }: SelectItemGroupMantapProps) {
//   return (
//     <SelectGroup>
//       <SelectLabel>{label}</SelectLabel>
//       {items.map((item) => (
//         <SelectItem key={item.subgroup_ref} value={item.subgroup_ref}>
//           {item.subgroup_name}
//         </SelectItem>
//       ))}
//     </SelectGroup>
//   );
// }
