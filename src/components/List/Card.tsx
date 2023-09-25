import { Task, useTasksContext } from "@/contexts/TasksContext";
import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, HStack, Text, Icon } from "@chakra-ui/react";

interface CardProps {
    id: number;
    checked: boolean;
    description: string;
}

export default function Card({
    id,
    checked,
    description
}: CardProps) {
    const { tasks, setTasks } = useTasksContext();

    const handleChangeTaskState = (value: boolean) => {
        let array = [...tasks];
        array[id].completed = value;
        setTasks(array);
    };

    const handleDeleteTask = () => {
        let array = [...tasks];
        array.splice(id, 1);
        setTasks(array);
    };

    return (
        <HStack spacing={8} alignItems="flex-start" bgColor="gray.500" border="1px" borderColor="gray.400" borderRadius={8} p="16px">
            <Checkbox isChecked={checked} marginTop="5px" onChange={e => handleChangeTaskState(e.target.checked)} />
            <Text w="full" as={checked ? "del" : "p"} color={checked ? "gray.300" : "gray.100"}>{description}</Text>
            <Icon cursor="pointer" as={DeleteIcon} color="gray.300" margin="5px" onClick={handleDeleteTask} />
        </HStack>
    )
}