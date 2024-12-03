import { Account, Client, Databases, ID } from "appwrite";
import { three60Env } from "@/utils/functions";

const client = new Client();

client
	.setEndpoint(three60Env.APPWRITE_BASE_URL)
	.setProject(three60Env.PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export const authService = {
	async createAccount(email: string, password: string, name?: string) {
		try {
			const response = await account.create(
				ID.unique(),
				email,
				password,
				name
			);
			return response;
		} catch (error) {
			console.error("Appwrite create account error:", error);
			throw error;
		}
	},

	async login(email: string, password: string) {
		try {
			const session = await account.createEmailPasswordSession(
				email,
				password
			);
			return session;
		} catch (error) {
			console.error("Appwrite login error:", error);
			throw error;
		}
	},
};

export { client };
