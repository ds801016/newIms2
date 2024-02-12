import Icon from "@/components/misc/Icon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Box,
  Boxes,
  BoxesIcon,
  Clipboard,
  Currency,
  Share,
  icons,
} from "lucide-react";

interface propTypes {
  open: boolean;
  hide: () => void;
}

const SideBar = ({ open, hide }: propTypes) => {
  return (
    <Sheet open={open} onOpenChange={hide}>
      <SheetContent side="left">
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
          <div className="flex flex-col"></div>
        </SheetHeader> */}
        {items.map((row) => (
          <div className="flex gap-2 text-sm items-center text-muted-foreground px-2 py-4 hover:bg-primary rounded-xl hover:text-white">
            <div className="text-sm">
              <Icon name={row.icon} size={10} />
            </div>
            {row.label}
          </div>
        ))}
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;

const items = [
  {
    icon: "Currency",
    label: "Finance",
  },
  {
    icon: "BoxesIcon",
    label: "Warehouse",
  },
  { icon: "Share", label: "Production" },
  { icon: "Clipboard", label: "Reports" },
];
