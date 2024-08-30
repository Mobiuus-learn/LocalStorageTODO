import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Center,
  Button,
  Stack,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

interface PropsTypes {
  addTask: (value: string) => void;
}
export function Form({ addTask }: PropsTypes) {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSave = () => {
    if (!inputValue) {
      setIsError(true);
      return;
    }
    addTask(inputValue);
    setInputValue("");
    setIsError(false);
  };
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
    setIsError(e.target.value === "");
  };
  return (
    <Flex>
      <Center flex={1}>
        <FormControl m={4} w={"60%"} isInvalid={isError} isRequired>
          <FormLabel>Create Task</FormLabel>
          <Input
            type="text"
            id="task-field"
            required
            value={inputValue}
            onChange={handleChange}
          />
          {isError ? (
            <FormErrorMessage>Task field Required</FormErrorMessage>
          ) : (
            <FormHelperText>Please insert a task</FormHelperText>
          )}

          <Stack>
            <Button
              m={"auto"}
              variant={"solid"}
              colorScheme="teal"
              mt={8}
              onClick={handleSave}
            >
              Save
            </Button>
          </Stack>
        </FormControl>
      </Center>
    </Flex>
  );
}
