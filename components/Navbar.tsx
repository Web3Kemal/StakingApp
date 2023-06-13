import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <Box bgGradient="linear(to-l, rgb(0, 122, 255), rgb(0, 222, 255))">
            <Container maxW={"1200px"} py={4}>
                <Flex direction={"row"} justifyContent={"space-between"}>
                    <Heading color="white">Official BLUE staking website. Get $CAPO for free by staking $BLUE!</Heading>
                    <ConnectWallet />
                </Flex>
            </Container>
        </Box>
    )
}
