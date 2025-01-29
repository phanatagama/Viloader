
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async () => {
  console.log(`load ${env.SOCIAL_SERVICE_API}`);
  return { endpoint: env.SOCIAL_SERVICE_API };
};
