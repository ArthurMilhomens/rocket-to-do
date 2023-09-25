'use client'
import { HStack } from "@chakra-ui/react";
import AddTaskInput from "./AddTaskInput";
import SubmitButton from "./SubmitButton";
import { MdAddCircleOutline } from 'react-icons/md';
import { useTasksContext } from "@/contexts/TasksContext";
import { useState } from "react";

export default function Form() {
    const { tasks, setTasks } = useTasksContext();
    const [description, setDescription] = useState('');

    const handleCreateTask = () => {
        if (description !== '') {
            setTasks([...tasks, { description: description, completed: false }]);
            setDescription('');
        }
    }
    
    return (
        <HStack maxW="736px" alignContent="center" marginX="auto" marginTop="-6">
           <AddTaskInput value={description} onChange={e => setDescription(e.target.value)} />
           <SubmitButton onClick={handleCreateTask} rightIcon={<MdAddCircleOutline />}>
            Criar
           </SubmitButton>
        </HStack>
    );
}