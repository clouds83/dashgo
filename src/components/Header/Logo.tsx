import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize={['2xl', '3xl']}
            fontWeight='bold'
            letterSpacing='tight'
            w='64'
        >
            dashGo
            <Text as='span' ml='0.5' color='pink.500'>.</Text>
        </Text>
    )
}