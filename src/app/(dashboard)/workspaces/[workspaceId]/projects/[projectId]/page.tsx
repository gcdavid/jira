import { getCurrent } from "@/features/auth/action";
import { redirect } from "next/navigation";
import React from "react";

interface ProjectIdPageProps {
  params: { projectId: string };
}

const ProjectIdPage = async ({ params }: ProjectIdPageProps) => {
  const user = await getCurrent();

  if (!user) redirect("/signn-in");
  return <div>ProjectId : {params.projectId}</div>;
};

export default ProjectIdPage;
