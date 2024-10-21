"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { useCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen } = useCreateWorkspaceModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={() => setIsOpen(!open)}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
