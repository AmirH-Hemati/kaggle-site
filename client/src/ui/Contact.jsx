import Button from "./Button";

function Contact({ dataset }) {
  console.log(dataset);
  return (
    <div className="mt-4">
      <p className="text-gray-600">
        برای ارتباط با سازنده، می‌توانید از طریق ایمیل با ایشان تماس بگیرید:
      </p>
      <Button
        type="contained"
        extraStyle="mt-4 py-2 px-6 text-white bg-green-600 hover:bg-green-700 transition-all"
        onClick={() =>
          (window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${dataset?.uploadedBy?.email}`)
        }
      >
        ارسال ایمیل به سازنده
      </Button>
    </div>
  );
}

export default Contact;
