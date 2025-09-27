import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export async function GetToken() {
  const encodedToken = (await cookies()).get("next-auth.session-token")?.value;

  try {
    const decodedToken = await decode({
      token: encodedToken,
      secret: process.env.NEXTAUTH_SECRET!,
    });
    const token = decodedToken?.token;
    console.log(token, "decodedToken");
    return token;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}
