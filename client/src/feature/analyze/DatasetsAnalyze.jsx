import AllDatasets from "../dataset/DatasetList";
import { useDatasets } from "../dataset/useDatasets";

function DatasetsAnalyze() {
  const { datasets } = useDatasets();
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">
        از بین مجموعه های زیر برای آنالیز و تحلیل یکی رو انتخاب وارد ان شوید و
        شروع به تحیل کنید
      </h1>
      <AllDatasets datasets={datasets?.data} />
    </div>
  );
}

export default DatasetsAnalyze;
