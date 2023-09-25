'use client'

import { Button, ButtonProps } from "@chakra-ui/react"

export default function SubmitButton(props: ButtonProps) {
    return (
        <Button
            bgColor="blue-dark"
            color="gray.100"
            p={4}
            h="48px"
            boxShadow="lg"
            _hover={{
                bgColor: "blue-dark",
            }}
            {...props}
        >
            {props.children}
        </Button>
    )
}