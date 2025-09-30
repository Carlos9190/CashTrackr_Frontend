"use client"

import { updateUser } from "@/actions/update-user-action"
import { useEffect } from "react"
import ErrorMessage from "../ui/ErrorMessage"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"
import { User } from "@/src/schemas"

export default function ProfileForm({ user }: { user: User }) {

    const [state, dispatch] = useFormState(updateUser, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
        }
    }, [state])

    return (
        <>
            <form
                className="mt-14 space-y-5"
                noValidate
                action={dispatch}
            >

                {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}

                <div className="flex flex-col gap-5">
                    <label
                        className="font-bold text-2xl"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="name"
                        defaultValue={user.name}
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <label
                        className="font-bold text-2xl"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="email"
                        defaultValue={user.email}
                    />
                </div>

                <input
                    type="submit"
                    value='Save Changes'
                    className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer"
                />
            </form>
        </>
    )
}