import { useUploadFile } from "../feature/dataset/useUploadFile";
import Input from "../ui/Input";

function UploadFile() {
  const { createFile } = useUploadFile();
  function handelCreateFile(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target.file);
    formData.append("title", e.target.title.value);
    formData.append("description", e.target.description.value);
    formData.append("file", e.target.file.files[0]);
    createFile(formData);
  }
  return (
    <form onSubmit={handelCreateFile} className="flex flex-col ">
      <Input type="text" placeholder="title file" name="title" />
      <Input type="textarea" placeholder="description" name="description" />
      <Input type="file" name="file" />
      <button>submit</button>
    </form>
  );
}

export default UploadFile;
