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
        <Heading>
          <Text fontSize="md" color={"#aaaaaa"}>
            Todo App
          </Text>
        </Heading>
      </Center>
    </Flex>
  );
}
