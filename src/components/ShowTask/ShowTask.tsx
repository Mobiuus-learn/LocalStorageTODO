import { Box, Text, Button, Icon, Center } from "@chakra-ui/react";
import { LuTrash } from "react-icons/lu";

interface ShowTaskProps {
  tasks: string[];
  removeTasks: (task: string) => void;
}

export function ShowTask({ tasks, removeTasks }: ShowTaskProps) {
  return (
    <Center
      flexDirection={"column"}
      p={2}
      border={"1px solid teal"}
      borderRadius={10}
      w={"60%"}
      gap={2}
      justifyContent={"space-between"}
      m={"auto"}
    >
      Tarefas
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            w={"100%"}
            justifyContent={"space-between"}
            position={"relative"}
            gap={2}
          >
            {" "}
            <Text
              key={index}
              borderBottom={"1px solid teal"}
              p={4}
              w={"90%"}
              height={"auto"}
              alignItems={"center"}
              position={"relative"}
              display={"flex"}
              gap={20}
              fontSize="sm"
            >
              {task}
            </Text>
            <Button
              onClick={() => removeTasks(task)}
              bg={"red"}
              mx={2}
              position={"absolute"}
              right={0}
              _hover={{
                bg: "var(--chakra-gray.900)",
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
  );
}
