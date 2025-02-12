function DatasetsItem({ dataset }) {
  return (
    <li className="flex flex-col h-full rounded-3xl shadow-sm hover:shadow-2xl p-2 text-sm  border-2 border-black/20">
      <img
        src="https://storage.googleapis.com/kaggle-datasets-ima…341df/dataset-thumbnail.jpg?t=2025-02-11-17-59-00"
        alt=""
        className="rounded-3xl w-full object-cover aspect-square"
      />
      <p className="font-semibold text-sm">{dataset.title}</p>

      <p className="text-xs">انتشار یافت : امیرحسین همتی</p>
      <p className="text-xs"> تاریخ اپلود : 9 روز پیش</p>
      <p className="text-xs">یک فایل جیسون</p>
    </li>
  );
}

export default DatasetsItem;
