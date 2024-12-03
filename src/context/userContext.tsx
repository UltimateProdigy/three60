// contexts/UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { Account } from "appwrite";
import { client } from "@/lib/appwrite";

interface UserContextType {
	user: any | null;
	logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({
	user: null,
	logout: async () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<any | null>(null);

	useEffect(() => {
		const account = new Account(client);
		const fetchUser = async () => {
			try {
				const currentUser = await account.get();
				setUser(currentUser);
			} catch (error) {
				setUser(null);
			}
		};

		fetchUser();
	}, []);

	const logout = async () => {
		const account = new Account(client);
		await account.deleteSessions();
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
