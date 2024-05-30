import Image from "next/image";
import logo from '../src/logo.png';
import hero from '../src/hero.png';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="relative flex min-h-screen">
      <div className="w-2/4 hidden md:flex flex-col items-center p-24" style={{ backgroundImage: `url(${hero.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Image className="max-w-20" width={300} height={200} src={logo} alt="Logo" />
      </div>
      <div className="bg-white w-full md:w-2/4 flex flex-col justify-center items-center relative">
        <Button variant="ghost" className="absolute top-4 right-4">Login</Button>
        <div className="w-3/4 md:w-2/4 flex flex-col justify-center items-center gap-6">
          <div className="text-center gap-2 flex flex-col">
            <h1 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">Create an account</h1>
            <p className="text-sm text-center">Enter your email below to create your account</p>
          </div>
          <Input type="email" placeholder="Email" aria-label="Email" />
          <Button className="w-full hover:bg-gray-800">
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
          </Button>
          <div className="flex pr-22 pl-22 w-full justify-center gap-6 items-center">
            <Separator className="w-2/4" />
            <p className="font-light text-gray-500 text-xs text-nowrap">Or Continue With</p>
            <Separator className="w-2/4" />
          </div>
          <Button className="w-full hover:border-gray-800" variant="outline">
            <HeartFilledIcon className="mr-2 h-4 w-4" /> Apple
          </Button>
          <p className="text-xs font-extralight text-center text-gray-500">
            By clicking continue, you agree to our  <span className="underline">Terms of Service and Privacy Policy</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
