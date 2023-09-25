import { useTasksContext } from "@/contexts/TasksContext";
import { Box, HStack, Text } from "@chakra-ui/react";

export default function Header() {
  const { tasks } = useTasksContext();
  
  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Text fontWeight="bold" color="custom-blue">
          Tarefas criadas
        </Text>
        <Box bgColor="gray.400" borderRadius="full">
          <Text
            color="gray.200"
            paddingX={2}
            paddingY={0.5}
            fontSize="12px"
            fontWeight="bold"
          >
            {tasks.length}
          </Text>
        </Box>
      </HStack>
      <HStack>
        <Text fontWeight="bold" color="custom-purple">
          Concluídas
        </Text>
        <Box bgColor="gray.400" borderRadius="full">
          <Text
            color="gray.200"
            paddingX={2}
            paddingY={0.5}
            fontSize="12px"
            fontWeight="bold"
          >
            {tasks.filter(task => task.completed === true).length} de {tasks.length}
          </Text>
        </Box>
      </HStack>
    </HStack>
  );
}
