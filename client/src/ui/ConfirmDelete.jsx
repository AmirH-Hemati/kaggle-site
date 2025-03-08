import Button from "./Button";

function ConfirmDelete({ onClose, resourceName, handelDelete }) {
  return (
    <div className="flex gap-6 flex-col font-semibold">
      <p>
        آیا از حذف{" "}
        <span className="text-[#1E40AF] font-semibold text-lg">
          "{resourceName}"
        </span>{" "}
        مطمعن هستید؟
      </p>
      <div className="flex gap-2">
        <Button type={`primary`} onClick={onClose}>
          لغو
        </Button>
        <Button type={`danger`} onClick={handelDelete}>
          حذف
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
