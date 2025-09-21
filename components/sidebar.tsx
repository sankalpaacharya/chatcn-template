import {
  LucideIcon,
  PanelRightOpen,
  Search,
  SquarePen,
  FolderClosed,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ChatThread from "./chat-thread";

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
    type: "HEADING",
    label: "Chats",
  },
];

export default function Sidebar() {
  return (
    <div className="p-4 flex flex-col h-full border-r">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold tracking-tight text-sm text-muted-foreground">
          Chatcn
        </span>
        <button className="text-muted-foreground hover:bg-muted p-2 rounded-lg transition-colors cursor-e-resize">
          <PanelRightOpen size={18} />
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          placeholder="Search"
          className="shadow-none outline-none rounded-xl h-10 pl-9 text-sm w-full"
        />
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
                  className="px-3 pt-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                >
                  {item.label}
                </div>
              );
            }
          })}
        </div>

        <div className="mt-2">
          <ChatThread />
        </div>
      </div>
    </div>
  );
}

function SideBarLink({ label, href, Icon }: SideBarLinkItem) {
  return (
    <Link
      href={href}
      className="hover:bg-muted/70 flex gap-3 items-center px-3 py-2 rounded-lg transition-colors"
    >
      <Icon size={18} className="text-muted-foreground" />
      <p className="text-sm font-medium tracking-wide">{label}</p>
    </Link>
  );
}
