import { AccountSubgroupType } from "@/types/accounts/accounts";
import React from "react";
import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";

interface ItemGroupProps {
  label: string;
  items: AccountSubgroupType[];
}

export default function ItemGroup({ items, label }: ItemGroupProps) {
  return (
    <SelectGroup>
      <SelectLabel>{label}</SelectLabel>
      {items.map((item) => (
        <SelectItem key={item.subgroup_ref} value={item.subgroup_ref}>
          {item.subgroup_name}
        </SelectItem>
      ))}
    </SelectGroup>
  );
}
