import {
  Container,
  Box,
  Text,
  Button,
  Icon,
  Spacer,
  Flex,
  Center,
} from "@chakra-ui/react";
import { LuTrash } from "react-icons/lu";

interface ShowTaskProps {
  tasks: string[];
  removeTasks: (task: string) => void;
}

export function ShowTask({ tasks, removeTasks }: ShowTaskProps) {
  return (
    <Container>
      <Flex direction={"column"}>
        <Center
          flex={1}
          flexDirection={"column"}
          p={2}
          border={"1px solid teal"}
          borderRadius={10}
        >
          Tarefas
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <Box key={index} display="flex" alignItems="center">
                <Text key={index} m={10} border={"1px solid teal"} p={2}>
                  {task}
                </Text>
                <Spacer />
                <Button
                  onClick={() => removeTasks(task)}
                  p={0}
                  bg={"transparent"}
                  border={"1px solid teal"}
                  _hover={{
                    bg: "transparent",
                  }}
                >
                  <Icon as={LuTrash} />
                </Button>
              </Box>
            ))
          ) : (
            <Text>There's no data in Local Storage</Text>
          )}
        </Center>
      </Flex>
    </Container>
  );
}
