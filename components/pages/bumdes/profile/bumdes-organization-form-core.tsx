import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  BumdesOrganization,
  BumdesUnitOrganization,
  UpdateBumdesOrganizationFormData,
} from "@/types/bumdes";
import { useForm } from "react-hook-form";

interface BumdesOrganizationFormCoreProps {
  form: ReturnType<typeof useForm<UpdateBumdesOrganizationFormData>>;
  organization: BumdesOrganization;
}

export default function BumdesOrganizationFormCore({
  form,
  organization,
}: BumdesOrganizationFormCoreProps) {
  return (
    <div id="organization-core">
      <h4 className="font-medium">Pengurus Operasional</h4>

      <Separator className="mb-4 mt-2" />

      <div className="flex flex-col gap-y-4">
        <FormField
          control={form.control}
          name="core.leader"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Ketua</FormLabel>
              <FormControl>
                <Input placeholder="contoh: Adi Sumarmo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="core.secretary"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Sekretaris</FormLabel>
              <FormControl>
                <Input placeholder="contoh: Adi Sumarmo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="core.treasurer"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Bendahara</FormLabel>
              <FormControl>
                <Input placeholder="contoh: Adi Sumarmo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {organization.core.units.map((unit) => (
            <CoreUnitMembers key={unit.name} form={form} unit={unit} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CoreUnitMembersProps {
  unit: BumdesUnitOrganization;
  form: ReturnType<typeof useForm<UpdateBumdesOrganizationFormData>>;
}

function CoreUnitMembers({ form, unit }: CoreUnitMembersProps) {
  return (
    <div className="my-4">
      <h5 className="font-medium text-sm">
        Unit: <span className="font-normal">{unit.name}</span>
      </h5>

      <div className="ml-4">
        <FormItem className="w-full my-4 mt-2">
          <FormLabel>Ketua Unit</FormLabel>
          <FormControl>
            <Input
              placeholder="Tidak ditemukan."
              value={unit.leader}
              readOnly
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        {unit.members.length === 0 && (
          <div>
            <FormItem className="w-full">
              <FormLabel>Anggota</FormLabel>
              <FormControl>
                <Input placeholder="Tidak ditemukan anggota" readOnly />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>
        )}

        {unit.members.length > 0 && (
          <ul>
            {unit.members.map((member, index) => (
              <li key={member}>
                <FormItem className="w-full">
                  <FormLabel>Anggota {index + 1}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tidak ditemukan."
                      value={member}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
