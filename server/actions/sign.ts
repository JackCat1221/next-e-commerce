"use server";

import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";

const actionClient = createSafeActionClient();

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    // Check if the user in the database
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    })

    if (existingUser?.email !== email) {
      return { error: 'Email not found' }
    }

    // if (!existingUser.emailVerified) {
    //   return {}
    // }

    console.log("---", email, password, code);
    return { email, password, code };
  });
