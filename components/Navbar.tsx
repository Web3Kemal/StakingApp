import { Container, Flex, Heading, Box, useBreakpointValue } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    const direction = useBreakpointValue({ base: "column", sm: "row" }) as "column" | "row" | undefined;

    return (
        <Box bgGradient="linear(to-l, rgb(0, 122, 255), rgb(0, 222, 255))">
            <Container maxW={"1200px"} py={4}>
                <Flex direction={direction} justifyContent={"space-between"} alignItems={"center"}>
                    <Heading color="white" mb={{ base: 4, sm: 0 }}>Official BLUE staking website. Get $CAPO for free by staking $BLUE!</Heading>
                    <ConnectWallet />
                </Flex>
            </Container>
        </Box>
    )
}
