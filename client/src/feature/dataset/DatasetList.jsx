import DatasetsItem from "./DatasetsItem";

function DatasetList({ datasets }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {datasets?.map((dataset) => (
        <DatasetsItem key={dataset._id} dataset={dataset} />
      ))}
    </ul>
  );
}

export default DatasetList;
