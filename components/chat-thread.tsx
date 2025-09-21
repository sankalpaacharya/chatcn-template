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
    <div className="flex justify-center">
      <Thread>
        <ThreadContent>Finding Optimal Solution</ThreadContent>
        <ThreadActions>
          <ThreadAction className="flex">
            <Share className="" />
            Share
          </ThreadAction>
          <ThreadAction className="flex">
            <Pencil className="" />
            Rename
          </ThreadAction>
          <Separator className="my-2" />
          <ThreadAction className="flex">
            <Trash2 className="text-red-500" />
            Delete
          </ThreadAction>
        </ThreadActions>
      </Thread>
    </div>
  );
}
