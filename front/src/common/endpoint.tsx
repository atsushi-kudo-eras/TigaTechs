const GET_URL = process.env.NEXT_PUBLIC_GET_URL!;
const CONTACT_URL = process.env.NEXT_PUBLIC_CONTACT_URL!;

type Endpoint = {
  contact: string;
  top: string;
  intro: string;
  business: string;
  prj: string;
  tech: string;
  gallery: string;
};

const endpoint: Endpoint = {
  contact: CONTACT_URL,
  top: GET_URL + 'top.json',
  intro: GET_URL + "intro.json",
  business: GET_URL + "business.json",
  prj: GET_URL + "prj.json",
  tech: GET_URL + "tech.json",
  gallery: GET_URL + "gallery.json",
};

export default endpoint;
