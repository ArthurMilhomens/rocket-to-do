import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface TasksProps {
  children: ReactNode;
}

export type Task = {
  completed: boolean;
  description: string;
};

interface TasksContextData {
  tasks: Task[];
  setTasks(tasks: Task[]): void;
}

const TasksContext = createContext({} as TasksContextData);

export function TasksProvider({ children }: TasksProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", completed: true },
    { description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", completed: true },
    { description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", completed: true },
    { description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", completed: true },
    { description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", completed: true },
  ]);

  return (
    <TasksContext.Provider
      value={{tasks, setTasks}}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTasksContext = () => useContext(TasksContext);
