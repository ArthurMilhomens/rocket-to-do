import { Stack } from "@chakra-ui/react";
import Header from "./Header";
import Body from "./body";

export default function List() {
    return (
        <Stack maxW="736px" alignContent="center" marginX="auto" marginTop={16}>
            <Header />
            <Body />
        </Stack>
    )
}