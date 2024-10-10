import { Client, Databases } from "appwrite";
import { three60Env } from "@/utils/functions";

const client = new Client();
const databases = new Databases(client);

client
	.setEndpoint(three60Env.APPWRITE_BASE_URL)
	.setProject(three60Env.PROJECT_ID);

export { client, databases };
