"use client";

import { useSchematicEvents } from "@schematichq/schematic-react";
import { Key } from "lucide-react";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs"


const SchematicWrapped = ({children}: {children: React.ReactNode}) => {
    const { identify } = useSchematicEvents()
    const { user } = useUser()

    useEffect(() => {
        const userName = 
        user?.username ??
        user?.fullName ??
        user?.emailAddresses[0]?.emailAddress ??
        user?.id;

        if (user?.id) {
            identify({
                // Company Level Key
                company: {
                    key: {
                        id: user.id,
                    },
                    name: userName,
                },
                key: {
                    id: user.id,
                },
                name: userName,
            })
        }
    }, [user, identify])

    return children
}

export default SchematicWrapped;