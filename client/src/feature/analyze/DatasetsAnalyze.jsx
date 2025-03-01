import AllDatasets from "../dataset/DatasetList";

function DatasetsAnalyze() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">
        از بین مجموعه های زیر برای آنالیز و تحلیل یکی رو انتخاب وارد ان شوید و
        شروع به تحیل کنید
      </h1>
      <AllDatasets />
    </div>
  );
}

export default DatasetsAnalyze;
