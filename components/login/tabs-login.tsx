'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function TabsLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Company</TabsTrigger>
        <TabsTrigger value="password">Unit</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Company</CardTitle>
            <CardDescription>
              Pastikan email dan password yang anda masukkan benar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password1">Password</Label>
              <div className="flex relative">
                <Input
                  id="password1"
                  type={passwordVisible ? 'text' : 'password'}
                />
                <button
                  type="button"
                  className="absolute right-4 top-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <EyeOpenIcon className="w-6 h-6" />
                  ) : (
                    <EyeClosedIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Unit</CardTitle>
            <CardDescription>
              Pastikan unit id dan password yang anda masukkan benar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="unitId">Unit Id</Label>
              <Input id="unitId" type="number" placeholder="0300102023" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password2">Password</Label>
              <div className="flex relative">
                <Input
                  id="password2"
                  type={passwordVisible ? 'text' : 'password'}
                />
                <button
                  type="button"
                  className="absolute right-4 top-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <EyeOpenIcon className="w-6 h-6" />
                  ) : (
                    <EyeClosedIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
