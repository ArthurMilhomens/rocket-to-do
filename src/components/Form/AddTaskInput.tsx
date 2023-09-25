'use client'
import { Input, InputProps } from "@chakra-ui/react";

export default function AddTaskInput(props: InputProps) {
  return (
    <Input
      bgColor="gray.500"
      variant="filled"
      placeholder="Adicione uma nova tarefa"
      fontSize="16px"
      boxShadow="lg"
      border="1px"
      borderColor="black"
      _placeholder={{
        color: 'gray.300'
      }}
      _hover={{
        bgColor: 'gray.500'
      }}
      _focus={{
        bgColor: 'gray.500'
      }}
      focusBorderColor='purple.500'
      size="lg"
      {...props}
    />
  );
}
