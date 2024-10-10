import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { databases } from "@/lib/appwrite";
import { three60Env } from "@/utils/functions";
import { useToast } from "@chakra-ui/react";


interface TodoContextType {
	todos: any;
	setTodos: React.Dispatch<React.SetStateAction<any[]>>;
	fetchTodos: () => Promise<void>;
	addTodo: (todo: Omit<any, "id">) => Promise<void>;
	updateTodo: (id: string, updates: Partial<any>) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [todos, setTodos] = useState<any[] | any>([]);
	const toast = useToast();

	const fetchTodos = async () => {
		try {
			const response = await databases.listDocuments(
				three60Env.DATABASE_ID,
				three60Env.TASKS_COLLECTION_ID
			);
			setTodos(response.documents);
		} catch (error) {
			console.error("Error fetching todos:", error);
			toast({
				title: "Error.",
				description: "Error fetching Todos.",
				status: "error",
			});
		}
	};

	const addTodo = async (todo: Omit<any, "id">) => {
		try {
			const response = await databases.createDocument(
				three60Env.DATABASE_ID,
				three60Env.TASKS_COLLECTION_ID,
				"unique()",
				todo
			);
			setTodos((prevTodos: any) => [...prevTodos, response]);
		} catch (error) {
			console.error("Error adding todo:", error);
			toast({
				title: "Error.",
				description: "Error adding Todo.",
				status: "error",
			});
		}
	};

	const updateTodo = async (id: string, updates: Partial<any>) => {
		try {
			const response = await databases.updateDocument(
				three60Env.DATABASE_ID,
				three60Env.TASKS_COLLECTION_ID,
				id,
				updates
			);
			setTodos((prevTodos: any) =>
				prevTodos.map((todo: any) =>
					todo.$id === id ? { ...todo, ...response } : todo
				)
			);
		} catch (error) {
			console.error("Error updating todo:", error);
			toast({
				title: "Error.",
				description: "Error updating Todo.",
				status: "error",
			});
		}
	};

	const deleteTodo = async (id: string) => {
		try {
			await databases.deleteDocument(
				three60Env.DATABASE_ID,
				three60Env.TASKS_COLLECTION_ID,
				id
			);
			setTodos((prevTodos: any) =>
				prevTodos.filter((todo: any) => todo.$id !== id)
			);
		} catch (error) {
			console.error("Error deleting todo:", error);
			toast({
				title: "Error.",
				description: "Error deleting Todo.",
				status: "error",
			});
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<TodoContext.Provider
			value={{
				todos,
				setTodos,
				fetchTodos,
				addTodo,
				updateTodo,
				deleteTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodo = () => {
	const context = useContext(TodoContext);
	if (context === undefined) {
		throw new Error("useTodo must be used within a TodoProvider");
	}
	return context;
};
