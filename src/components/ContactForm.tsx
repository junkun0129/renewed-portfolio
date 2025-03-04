import React, { useEffect, useRef, useState } from "react";
const message = {
  ease: "メール送信",
  error: "メールの送信が失敗しました",
  success: "メールの送信が完了しました",
  sending: "・・・メール送信中・・・",
};
const backendserver = import.meta.env.VITE_MAIL_SERVER_URL || "";
type ContactFormProps = {
  setStatus: (text: string) => void;
};
const ContactForm = ({ setStatus }: ContactFormProps) => {
  const [mailText, setmailText] = useState<string>(message.ease);
  const [email, setemail] = useState<string>("");
  const [subject, setsubject] = useState<string>("");
  const [text, settext] = useState<string>("");
  useEffect(() => {
    if (mailText === message.ease) return;
    setTimeout(() => {
      setmailText(message.ease);
    }, 5000);
  }, [mailText]);

  useEffect(() => {
    setStatus(mailText);
  }, [mailText]);

  const submitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault(); // デフォルトのフォーム送信を防ぐ
      setmailText(message.sending);
      const emailInfo = {
        email,
        subject,
        text,
      };
      const res = await fetch(`${backendserver}`, {
        method: "POST",
        body: JSON.stringify(emailInfo),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status !== 200) throw new Error();
      setmailText(message.success);
      setemail("");
      settext("");
      setsubject("");
    } catch (err) {
      setmailText(message.error);
    }
  };
  return (
    <div className="max-w-[500px] mx-5 mt-10">
      <div className="flex justify-center text-2xl mb-5">
        お問い合わせフォーム
      </div>
      <form onSubmit={submitEmail}>
        <div></div>
        <input
          className="w-full p-2 rounded-lg mb-2"
          placeholder="メールアドレス"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="w-full p-2 rounded-lg mb-2"
          placeholder="件名"
          name="subject"
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
        />
        <textarea
          className="w-full p-2 rounded-lg mb-2"
          placeholder="メール内容"
          name="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button
          disabled={mailText !== message.ease}
          className="w-full p-3 border shadow-lg rounded-lg border-black"
        >
          {mailText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
