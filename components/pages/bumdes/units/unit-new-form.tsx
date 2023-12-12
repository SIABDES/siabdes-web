"use client";

import { AxiosClientSide } from "@/common/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { useNewUnit } from "@/hooks/units/useNewUnit";
import { NewUnitRequest, NewUnitSchema } from "@/types/units";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function UnitNewForm() {
  const router = useRouter();
  const form = useForm<NewUnitRequest>({
    resolver: zodResolver(NewUnitSchema),
    defaultValues: {
      address: "",
      leader: "",
      name: "",
      phone_number: "",
      credentials: {
        confirmPassword: "",
        identifier: "",
        password: "",
      },
    },
  });

  const { mutateAsync: mutateNewUnit, isPending: isPendingNewUnit } =
    useNewUnit();

  const onSubmit = async (data: NewUnitRequest) => {
    const validatedData = NewUnitSchema.safeParse(data);

    if (!validatedData.success) {
      toast({
        title: "Kesalahan Input Pengguna",
        description: "Mohon periksa kembali inputan anda..",
        variant: "destructive",
      });
      console.log("asdasdsad");
    }

    await mutateNewUnit(data, {
      onSettled: () => {
        toast({
          title: "Menambahkan...",
          description: "Sedang menambahkan unit baru..",
        });
      },
      onSuccess: () => {
        router.push("/bumdes/units");
        toast({
          title: "Sukses",
          description: "Berhasil menambahkan unit baru..",
        });
      },
      onError: (error) => {
        toast({
          title: "Terjadi Error",
          description:
            (error instanceof AxiosError && error.response?.data.message) ??
            "Terjadi kesalahan internal..",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto"
      >
        <h4 className="text-lg font-medium">Membuat Unit Baru</h4>

        <Separator className="my-4" />

        <div className="flex flex-row gap-x-8 w-full justify-between mb-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="name">Nama Unit</FormLabel>
                <FormControl>
                  <Input placeholder="Tulis nama unit.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="business_type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="business_type">Jenis Usaha</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis usaha unit" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value={"COMMERCE"}>Dagang</SelectItem>
                    <SelectItem value={"SERVICES"}>Jasa</SelectItem>
                    <SelectItem value={"INDUSTRY"}>Industri</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="w-full mt-4">
              <FormLabel htmlFor="address">Alamat Unit</FormLabel>
              <FormControl>
                <Input placeholder="Tulis alamat unit.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row gap-x-8 w-full justify-between mb-4 mt-4">
          <FormField
            control={form.control}
            name="leader"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="leader">Nama Ketua</FormLabel>
                <FormControl>
                  <Input placeholder="Tulis nama ketua unit.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="phone_number">Nomor Telepon Unit</FormLabel>
                <FormControl>
                  <Input placeholder="Tulis nomor telepon unit.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="credentials.identifier"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormControl>
                <Input placeholder="Username unit.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row gap-x-8 w-full justify-between mt-4 mb-8">
          <FormField
            control={form.control}
            name="credentials.password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password unit.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="credentials.confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="confirmPassword">
                  Konfirmasi Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Konfirmasi password unit.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-fit" disabled={isPendingNewUnit}>
          {isPendingNewUnit ? "Menambahkan Unit..." : "Tambah Unit"}
        </Button>
      </form>
    </Form>
  );
}
