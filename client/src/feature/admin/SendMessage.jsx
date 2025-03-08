import Button from "../../ui/Button";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";

function SendMessage({ userId }) {
  console.log(userId);
  function handelSendMessage(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSendMessage} className="flex flex-col">
      <FormLabel label={`عنوان`}>
        <Input type="text" name="title" />
      </FormLabel>
      <FormLabel label={`توضیحات پیام`}>
        <Input type="textarea" name="title" />
      </FormLabel>

      <Button type={`contained`} extraStyle={`self-end`}>
        ارسال پیام
      </Button>
    </form>
  );
}

export default SendMessage;
