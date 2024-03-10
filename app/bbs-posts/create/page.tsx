"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import { postBBS } from '@/app/actions/postBBSAction'



export const formSchema = z.object({
    username: z
        .string()
        .min(2, { message: "ユーザー名は2文字以上で入力して下さい。" }),
    title: z
        .string()
        .min(2, { message: "タイトルは2文字以上で入力して下さい。" }),
    content: z
        .string()
        .min(10, { message: "本文は10文字以上で入力して下さい。" })
        .max(140, { message: "本文は140文字以内で入力して下さい。" }),
})

const CreateBBSPage = () => {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            title: "",
            content: "",
        },
    });

    async function onSubmit(value: z.infer<typeof formSchema>) {
        const { username, title, content } = value;
        // try {
        //     await fetch("http://localhost:3000/api/post", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({username, title, content}),
        //     });
        //     router.push("/");
        //     router.refresh();
        // } catch (err) {
        //     console.log(err);
        // }
        postBBS({ username, title, content });
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 px-7">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="content" className="resize-none" {...field}></Textarea>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateBBSPage