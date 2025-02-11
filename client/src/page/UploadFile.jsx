import { useUploadFile } from "../feature/dataset/useUploadFile";

function UploadFile() {
  const { createFile } = useUploadFile();
  function handelCreateFile(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target.file);
    formData.append("name", e.target.name.value);
    formData.append("description", e.target.description.value);
    formData.append("file", e.target.file.files[0]);
    createFile(formData);
  }
  return (
    <form onSubmit={handelCreateFile} className="flex flex-col ">
      <input type="text" placeholder="name file" name="name" />
      <input type="text" placeholder="description" name="description" />
      <input type="file" name="file" />
      <button>submit</button>
    </form>
  );
}

export default UploadFile;
