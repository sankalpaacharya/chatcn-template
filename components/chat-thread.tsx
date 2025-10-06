import React from "react";
import {
  Thread,
  ThreadContent,
  ThreadAction,
  ThreadActions,
} from "@/components/chatcn/thread";
import { Separator } from "@/components/ui/separator";
import { Trash2, Pencil, Share } from "lucide-react";

export default function ChatThread() {
  return (
    <Thread>
      <ThreadContent>React Thread Component Refactoring</ThreadContent>
      <ThreadActions>
        <ThreadAction className="flex gap-2.5 items-center">
          <Share className="w-4 h-4" />
          Share
        </ThreadAction>
        <ThreadAction className="flex gap-2.5 items-center">
          <Pencil className="w-4 h-4" />
          Rename
        </ThreadAction>
        <Separator className="my-2" />
        <ThreadAction className="flex gap-2.5 items-center">
          <Trash2 className="text-red-500 w-4 h-4" />
          Delete
        </ThreadAction>
      </ThreadActions>
    </Thread>
  );
}
