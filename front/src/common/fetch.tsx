import endpoint from "@/common/endpoint";
import { useState, useEffect } from "react";

const { contact } = endpoint;

type Inputs = {
  name: string;
  mail: string;
  type: string;
  text: string;
  submit: any;
};

type Data = {
  head: string;
  text: string;
  items: string[];
  images: {
    alt: string;
    src: string;
  }[];
}[];

const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function postSender(input: Inputs, setStatus: Function) {
  setStatus(1);
  try {
    const response = await fetch(contact, {
      method: 'POST',
      body: JSON.stringify(input),
      headers
    });
    if (!response.ok) {
      setStatus(3);
      return false;
    };
    setStatus(2);
    return true;
  } catch {
    setStatus(3);
    return false;
  }
}

export const useFetchJson = (url: string) => {
  headers.append("Access-Control-Allow-Origin", "https://asset.tigatechs.com");
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(url, { headers })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(reportError);
  }, [url]);

  return data;
}
