import Button from "../../ui/Button";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";

function SendMessage({ userId, email }) {
  function handelSendMessage(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSendMessage} className="flex flex-col font-semibold text-lg">
      <h2>
          ارسال پیام به کاربر <span className="text-blue-600">{email}</span> 
      </h2>
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
