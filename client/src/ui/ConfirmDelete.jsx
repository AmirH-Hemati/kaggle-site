import Button from "./Button";

function ConfirmDelete({ onClose, resourceName, deleteDataset }) {
  return (
    <div className="flex gap-6 flex-col font-semibold">
      <p>
        آیا از حذف مجموعه داده{" "}
        <span className="text-[#1E40AF] font-semibold text-lg">"{resourceName}"</span>{" "}
        مطمعن هستید؟
      </p>
      <div className="flex gap-2">
        <Button type={`primary`} onClick={onClose}>
          لغو
        </Button>
        <Button type={`danger`} onClick={deleteDataset}>
          حذف
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
