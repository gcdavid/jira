import { cn } from "@/lib/utils";

import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface WorkspaceAvatarProps {
  name: string;
  image?: string;
  className?: string;
}

import React from "react";

export const WorkspaceAvatar = ({
  className,
  image,
  name,
}: WorkspaceAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("size-10 relative rounded-md overflow-hidden", className)}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-10 rounded-md", className)}>
      <AvatarFallback className="text-white bg-blue-600 font-semibold text-lg uppercase rounded-md">
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
};
