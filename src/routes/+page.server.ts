import type { Actions } from "./$types";
import { env } from "$env/dynamic/private";

export const actions: Actions = {
  signIn: async ({ locals }) => {
    await locals.logtoClient.signIn(`${env.BASE_URL}/callback`);
  },
  signOut: async ({ locals }) => {
    await locals.logtoClient.signOut(`${env.BASE_URL}/logged_out`);
  },
};
