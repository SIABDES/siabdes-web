"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import useRegisterBumdes from "@/hooks/auth/useRegisterBumdes";
import { RegisterFormData, RegisterSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      profile: {
        name: "",
        phone: "",
      },
      credentials: {
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      address: {
        postalCode: "",
        completeAddress: "",
      },
    },
  });

  const {
    mutateAsync: mutateRegisterBumdes,
    isPending: isMutateRegisterPending,
  } = useRegisterBumdes();

  const onSubmit = (data: RegisterFormData) => {
    void mutateRegisterBumdes(data, {
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Berhasil mendaftarkan akun.",
          description: `Email '${data.credentials.email}' berhasil di daftarkan.`,
          duration: 5000,
        });

        void router.push("/auth/login");
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Gagal mendaftarkan akun.",
          description: error.message,
          duration: 5000,
        });
      },
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-medium text-center mb-8">
          Pendaftaran Akun
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
          >
            <Card>
              <CardContent>
                <h6 className="text-lg font-medium mt-4">Profil Bumdes</h6>

                <Separator className="my-2" />

                <div className="flex flex-row gap-x-6">
                  <FormField
                    control={form.control}
                    name="profile.name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>Nama Bumdes</FormLabel>
                        <FormControl>
                          <Input placeholder="Tulis nama bumdes." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="profile.phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>
                          Nomor Telepon Bumdes
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Tulis nama bumdes." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h6 className="text-lg font-medium mt-4">Alamat Bumdes</h6>

                <Separator className="my-2" />

                <div className="flex flex-row gap-x-6">
                  <FormField
                    control={form.control}
                    name="address.province"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>Provinsi</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih provinsi" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectItem value={"COMMERCE"}>Dagang</SelectItem>
                              <SelectItem value={"SERVICES"}>Jasa</SelectItem>
                              <SelectItem value={"INDUSTRY"}>
                                Industri
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.regency"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>Kabupaten</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih kabupaten" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectItem value={"COMMERCE"}>Dagang</SelectItem>
                              <SelectItem value={"SERVICES"}>Jasa</SelectItem>
                              <SelectItem value={"INDUSTRY"}>
                                Industri
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.district"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>Kecamatan</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih kecamatan" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectItem value={"COMMERCE"}>Dagang</SelectItem>
                              <SelectItem value={"SERVICES"}>Jasa</SelectItem>
                              <SelectItem value={"INDUSTRY"}>
                                Industri
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.village"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>Desa</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih desa" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectItem value={"COMMERCE"}>Dagang</SelectItem>
                              <SelectItem value={"SERVICES"}>Jasa</SelectItem>
                              <SelectItem value={"INDUSTRY"}>
                                Industri
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-row gap-x-4 mt-4">
                  <FormField
                    control={form.control}
                    name="address.completeAddress"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>
                          Alamat Lengkap{" "}
                          <span className="text-gray-400">(opsional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tulis alamat lengkap."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.postalCode"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>Kode Pos</FormLabel>
                        <FormControl>
                          <Input placeholder="Tulis kode pos." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h6 className="text-lg font-medium mt-4">Kredensial Akun</h6>

                <Separator className="my-2" />

                <FormField
                  control={form.control}
                  name="credentials.email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel htmlFor={field.name}>Nama Bumdes</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Tulis email bumdes."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-row gap-x-6 mt-4">
                  <FormField
                    control={form.control}
                    name="credentials.password"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Tulis password."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="credentials.passwordConfirmation"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel htmlFor={field.name}>
                          Konfirmasi Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Tulis konfirmasi password."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              className="w-fit mt-4"
              disabled={isMutateRegisterPending}
            >
              {isMutateRegisterPending
                ? "Mendaftarkan Bumdes..."
                : "Daftarkan Bumdes"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
