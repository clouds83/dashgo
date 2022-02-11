import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>

        { showProfileData && (
            <Box mr='4' textAlign='right'>

            <Text>Claudio Godoy</Text>
            <Text color='gray.300' fontSize='small'>
                clouds83@gmail.com
            </Text>

        </Box>
        )}

        <Avatar size='md' name='Claudio Godoy' src='https://github.com/clouds83.png' />

    </Flex>

    )
}