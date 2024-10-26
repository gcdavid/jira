import { getCurrent } from "@/features/auth/action";
import { getWorkspace } from "@/features/workspaces/actions";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { redirect } from "next/navigation";
import React from "react";

interface WorkspaceIdSettingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const intialValues = await getWorkspace({ workspaceId: params.workspaceId });

  if (!intialValues) redirect(`/workspaces/${params.workspaceId}`);

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={intialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
