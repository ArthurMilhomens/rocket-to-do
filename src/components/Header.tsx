'use client'

import { Center } from "@chakra-ui/react"
import Image from "next/image"

export default function Header() {
    return (
        <Center bg="gray.700" w="100%" h="200px">
            <Image
              alt="Logo"
              src="/Logo.svg"
              width={126}
              height={48}
            />
        </Center>
    )
}