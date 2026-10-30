import { checkUser } from "@/actions/check-user";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
    const user = await checkUser();
    if (!user) redirect("/sign-in");
    return (
        <div className="p-8">
            <h1 className="text-2x1 font-semibold">
                Welcome, {user.name ?? user.email}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Your user id is: {user.id}
            </p>
        </div>
    )
} 

export default page