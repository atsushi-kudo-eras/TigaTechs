// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const hook = process.env.HOOK_URL!;
const headers = new Headers();
headers.append("Content-Type", "application/json");

type Inputs = {
  name: string;
  mail: string;
  type: string;
  text: string;
  submit: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // テキスト整形
  const message: Inputs = req.body;
  const data = {
    username: message.name,
    content: `【お名前】\n${message.name}\n【種別】\n${message.type}\n【メールアドレス】\n${message.mail}\n【本文】\n${message.text}\n\n==============\n【返信用定型文】\n${message.name}様\n\nお世話になっております。\n工藤と申します。\n\n${message.type}について、お問い合わせありがとうございます。`,
  }
  try {
    const response = await fetch(hook, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    });
    (response.status === 200 || response.status === 204) ? res.status(200).json({ result: "success" }) : res.status(500).json({ result: "error" });
  } catch {
    res.status(500).json({ result: "error" });
  }
}
