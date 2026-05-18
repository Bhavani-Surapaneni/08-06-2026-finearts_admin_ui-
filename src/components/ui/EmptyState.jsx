import { HiInbox } from "react-icons/hi";
import Button from "./Button";

export default function EmptyState({
  icon: Icon = HiInbox,
  title = "No Data Found",
  description = "There are no records to display at this time.",
  actionLabel,
  onAction,
  actionIcon: ActionIcon,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-gray-500" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-center max-w-md mb-6">{description}</p>

      {actionLabel && (
        <Button icon={ActionIcon} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
