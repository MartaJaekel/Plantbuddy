import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ProtectedRoute({ fallback, children }) {
  const { status, loading } = useSession();
  const router = useRouter();

  if (status !== "authenticated") {
    router.push("/login");
  }

  return status === "authenticated" ? <>{children}</> : fallback;
}
