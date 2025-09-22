"use client";
import {
  LucideIcon,
  PanelRightOpen,
  Search,
  SquarePen,
  FolderClosed,
  AudioLines,
  Image,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ChatThread from "./chat-thread";
import { createContext, useState, useContext } from "react";
import { cn } from "@/lib/utils";

type SideBarLinkItem = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

type SideBarHeadingItem = {
  type: "HEADING";
  label: string;
};

type SideBarProps = SideBarLinkItem | SideBarHeadingItem;

const SideBarLinks: SideBarProps[] = [
  {
    label: "New Chat",
    href: "/c",
    Icon: SquarePen,
  },
  {
    label: "New Project",
    href: "/p",
    Icon: FolderClosed,
  },
  {
    label: "Voice",
    href: "/v",
    Icon: AudioLines,
  },
  {
    label: "Image",
    href: "/i",
    Icon: Image,
  },
  {
    type: "HEADING",
    label: "Chats",
  },
];

type SideBarContextType = {
  isOpen: boolean;
};
const SideBarContext = createContext<SideBarContextType | null>(null);

function useSideBarContext() {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSourceContext must be used within a Source component");
  }
  return context;
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SideBarContext.Provider value={{ isOpen }}>
      <div
        className={cn(
          "p-4 flex flex-col h-full border-r w-80 transition-all justify-center ease-in-out duration-300",
          isOpen ? "w-80" : "w-20"
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <span
            className={cn(
              "font-semibold tracking-tight text-sm text-muted-foreground",
              !isOpen ? "hidden" : ""
            )}
          >
            Chatcn
          </span>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-muted-foreground hover:bg-muted p-3 rounded-lg transition-colors cursor-e-resize"
          >
            <PanelRightOpen size={20} />
          </button>
        </div>

        <div className="relative mb-4 flex items-center">
          {isOpen ? (
            <>
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search"
                className="shadow-none outline-none rounded-full h-12 pl-10 text-sm w-full transition-all"
              />
            </>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="p-3 rounded-full hover:bg-muted transition-colors flex justify-center items-center"
            >
              <Search size={20} />
            </button>
          )}
        </div>

        {/* Links & Headings */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-1">
            {SideBarLinks.map((item, i) => {
              if ("href" in item && "Icon" in item) {
                return <SideBarLink key={i} {...item} />;
              }

              if (item.type === "HEADING") {
                return (
                  <div
                    key={i}
                    className={cn(
                      "px-3 pt-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                      !isOpen ? "hidden" : ""
                    )}
                  >
                    {item.label}
                  </div>
                );
              }
            })}
          </div>

          <div className={cn("mt-2", !isOpen ? "hidden" : "")}>
            <ChatThread />
          </div>
        </div>
      </div>
    </SideBarContext.Provider>
  );
}

function SideBarLink({ label, href, Icon }: SideBarLinkItem) {
  const { isOpen } = useSideBarContext();
  return (
    <Link
      href={href}
      className="hover:bg-muted/70 flex gap-3 items-center px-3 py-3 rounded-lg transition-colors"
    >
      <Icon size={20} className="text-muted-foreground" />
      <p
        className={cn(
          "text-sm font-medium tracking-wide",
          !isOpen ? "hidden" : ""
        )}
      >
        {label}
      </p>
    </Link>
  );
}
