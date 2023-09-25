'use client'
import { Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Card from "./Card";
import { useTasksContext } from "@/contexts/TasksContext";

export default function Body() {
  const { tasks } = useTasksContext();

  return tasks?.length > 0 ? (
    <Stack>
      {tasks.map((task, index) => (
        <Card
          key={index}
          id={index}
          checked={task.completed}
          description={task.description}
        />
      ))}
    </Stack>
  ) : (
    <Stack
      w="full"
      h="244px"
      borderRadius={8}
      borderTop="1px"
      borderColor="gray.400"
      marginTop="6"
      justifyContent="center"
      alignItems="center"
      spacing="16px"
    >
      <Image width={56} height={56} alt="empty-state" src="/Clipboard.svg" />
      <Stack justifyContent="center" alignItems="center" spacing="0px">
        <Text color="gray.300" fontSize="16px" fontWeight="bold">
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text color="gray.300" fontSize="16px">
          Crie tarefas e organize seus itens a fazer
        </Text>
      </Stack>
    </Stack>
  );
}
