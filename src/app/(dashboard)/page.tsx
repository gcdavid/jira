import { getCurrent } from "@/features/auth/action";
import { UserButton } from "@/features/auth/components/user-button";
import { getWorkspaces } from "@/features/workspaces/actions";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  console.log(user, "user in home");

  if (!user) redirect("/sign-in");

  const workspaces = await getWorkspaces();

  if (workspaces?.total === 0) redirect("/workspaces/create");
  else {
    redirect(`/workspaces/${workspaces?.documents[0].$id}`);
  }
  return <div className="bg-neutral-500 ">{/* <CreateWorkspaceForm /> */}</div>;
}
