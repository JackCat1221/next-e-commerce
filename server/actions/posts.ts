"use server";

import { db } from "@/server";
// import { posts } from "../schema";
// import { revalidatePath } from "next/cache";

// export type Post = {
//   id?: number;
//   title: string;
// };
// export async function getPosts() {
//   const posts = await db.query.posts.findMany();
//   if (!posts) {
//     return { error: "err msg" };
//   }
//   return {
//     success: true,
//     data: posts,
//   };
// }

// export async function createPost(formData: FormData) {
//   const title = formData.get("title")?.toString().trim();
//   if (!title) {
//     return { error: "Title is required!" };
//   }
//   revalidatePath("/"); // 相当于刷新
//   try {
//     await db.insert(posts).values({ title });
//     return { success: true };
//   } catch (error) {
//     return { error };
//   }
// }
