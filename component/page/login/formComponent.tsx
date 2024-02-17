// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode, useState } from "react";
import InputComponent from "@/chunk/inputComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import { date, z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import TitleComponent from "@/chunk/titleComponent";
import SubmitBtnComponent from "@/chunk/submitBtnComponent";
import Link from "next/link";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

// Defining type of form
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(12)
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting form component as default
export default function FormComponent():ReactNode {
  // Defining states of component
  const [isValidating, setValidating] = useState<boolean>(false);

  // Defining use form hook
  const {
    handleSubmit,
    setError,
    register,
    formState: {errors},
  } = useForm<formType>({
    resolver: zodResolver(formSchema)
  });

  // Defining router
  const router = useRouter();

  // Defining a function to handle submit event
  const onSubmitFn:SubmitHandler<formType> = (data) => {
    setValidating(true);

    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setValidating(false); 
        router.push('/')
      })
      .catch(() => {
        setValidating(false);
        setError('root', {message: 'There was an error. Please try again'})
      })
  }

  // Returning JSX
  return (
    <form onSubmit={handleSubmit(onSubmitFn)} className="w-full px-[20px] pb-[20px] pt-[40px] border border-violet-500 rounded-[10px] relative">
      <TitleComponent tier={1} className="px-[20px] absolute dark:bg-darkBg bg-lightBg top-0 -translate-y-[50%] left-[50px]">Login</TitleComponent>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
        <InputComponent label="Email" errorText={errors.email?.message} register={register} registerName="email"/>
        <InputComponent label="Password" errorText={errors.password?.message} register={register} registerName="password"/>
        <SubmitBtnComponent isValidating={isValidating} className="lg:col-span-2 col-span-1"/>
      </div> 
      {
        (errors.root?.message)
          ? (
            <div className="mt-[20px]">
              <p className="text-red-600 lg:text-[16px] text-[13px] font-bold">
                {errors.root?.message}
              </p>
            </div>
            ) : false
      }
      <TitleComponent tier={2} className="mt-[20px]" noMargin>
        If yout dont already have an account: <Link href="/sign-up" className="underline">Sign Up</Link>
      </TitleComponent> 
    </form>
  );
}
