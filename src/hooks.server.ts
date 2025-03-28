import { env } from "$env/dynamic/private";
import { handleLogto } from "@logto/sveltekit";

if (
	!env.LOGTO_ENDPOINT ||
	!env.LOGTO_APP_ID ||
	!env.LOGTO_APP_SECRET ||
	!env.LOGTO_COOKIE_ENCRYPTION_KEY
) {
	throw new Error("Missing Logto environment variables");
}

export const handle = handleLogto(
	{
		endpoint: env.LOGTO_ENDPOINT,
		appId: env.LOGTO_APP_ID,
		appSecret: env.LOGTO_APP_SECRET,
	},
	{ encryptionKey: env.LOGTO_COOKIE_ENCRYPTION_KEY },
);
