import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Spacer,
  Icon,
  Button,
} from "@chakra-ui/react";
import { LuSettings2, LuHome } from "react-icons/lu";

export function Header() {
  return (
    <Flex>
      <Center w={"100%"} p={1} m={2} justifyContent={"center"}>
        <Box>
          <Button
            p={0}
            bg={"transparent"}
            onClick={() => console.log("Home")}
            _focus={{
              bg: "transparent",
            }}
          >
            <Icon as={LuHome} w={8} h={6} mt={2} color={"gray.400"} />
          </Button>
        </Box>
        <Spacer />
        <Heading>
          <Text fontSize="md" color={"#aaaaaa"}>
            Todo App
          </Text>
        </Heading>
        <Spacer />{" "}
        <Box>
          <Button
            p={0}
            bg={"transparent"}
            onClick={() => console.log("click")}
            _focus={{
              bg: "transparent",
            }}
          >
            <Icon as={LuSettings2} w={8} h={6} mt={2} color={"gray.400"} />
          </Button>
        </Box>
      </Center>
    </Flex>
  );
}
