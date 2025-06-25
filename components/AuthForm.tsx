"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/dist/client/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
type FormType = "sign-in" | "sign-up";


const formSchema = z.object({
  username: z.string().min(2).max(50),
})
const authformSchema = (type : FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(6),

    })
}

const AuthForm = ({type} : {type : FormType} ) => {
    const router = useRouter();
    const formSchema = authformSchema(type);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === "sign-up") {
                // Handle sign-up logic here
                console.log("Signing up with values:", values);
                toast.success("Signed up successfully!");
                // Use router.replace to avoid back navigation to sign-up
                router.replace("/sign-in");
            } else {
                // Handle sign-in logic here
                console.log("Signing in with values:", values);
                toast.success("Signed in successfully!");
                // Use router.replace to avoid back navigation to sign-in
                router.replace("/");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(`there was an error: ${error}`);
        }
    }
   
const isSignIn = type === "sign-in";

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card-Border w-full max-w-md mx-auto">
                <div className="flex flex-col gap-6 card py-10 px-6 items-center">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Image src="/logo.svg" alt="Logo" width={32} height={38} />
                        <h2 className="text-primary-100">PrepBuddy</h2>
                    </div>
                    <h3 className="text-center">Practice Job Interview With AI</h3>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                            {/*For Name Field*/}
                            {!isSignIn && (
                                <FormField
                                    control={form.control}
                                    name="name"
                                    label="Name"
                                    placeholder="Your name"
                                    type="text"
                                />
                            )}
                            {/*For Email Field*/}
                            <FormField
                                control={form.control}
                                name="email"
                                label="Email"
                                placeholder="Your email"
                                type="email"
                            />
                            {/*For Password Field*/}
                            <FormField
                                control={form.control}
                                name="password"
                                label="Password"
                                placeholder="Your password"
                                type="password"
                            />

                            <Button className="btn w-full" type="submit">
                                {isSignIn ? "Sign In" : "Create an Account"}
                            </Button>
                        </form>
                    </Form>
                    <p className="text-center">
                        {isSignIn ? "Don't have an account?" : "Already have an account?"}
                        <Link
                            href={!isSignIn ? "/sign-in" : "/sign-up"}
                            className="font-bold text-user-primary ml-1"
                        >
                            {!isSignIn ? "Sign in" : "Sign up"}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
