"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { consultationFormSchema } from "@/lib/zodSchemas"
import { Checkbox } from "../ui/checkbox"


export default function GetFreeConsultForm() {

    const form = useForm({
        resolver: zodResolver(consultationFormSchema),
        mode: "onChange"
    });

    function onSubmit(data) {
        console.log(data);
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="seekingHomeCare"
                        render={({ field }) => (
                            <FormItem className="space-x-2">
                                <FormControl>
                                    <Checkbox className="bg-primary-foreground data-[state=checked]:bg-primary-primary-foreground data-[state=checked]:text-primary" id="seekingHomeCare" {...field} />
                                </FormControl>
                                <FormLabel htmlFor="seekingHomeCare">I'm seeking home care for myself or a loved one.</FormLabel>
                                {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="seekingCareer"
                        render={({ field }) => (
                            <FormItem className="space-x-2">
                                <FormControl>
                                    <Checkbox className="bg-primary-foreground data-[state=checked]:bg-primary-primary-foreground data-[state=checked]:text-primary" id="seekingCareer" {...field} />
                                </FormControl>
                                <FormLabel htmlFor="seekingCareer">I'm seeking a career in home care.</FormLabel>
                                {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First Name" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bestTimeToReach"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Best time to be reached</FormLabel>
                                <FormControl>
                                    <Input placeholder="Best time to be reached" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How did you hear about us</FormLabel>
                            <FormControl>
                                <Input placeholder="How did you hear about us" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="careDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What kind of care we are looking for?</FormLabel>
                            <FormControl>
                                <Input placeholder="What kind of care we are looking for..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p className="text-base text-primary-foreground/60">By clicking on submit, you approve that the information you entered will be transmitted via email, and understand that information provided should not be considered medical advice or treatment.</p>
                <Button type="submit" variant="secondary" >Submit</Button>
            </form>
        </Form>
    )
}
