import Groq from "groq-sdk";
import { Groq_Key } from "./Constant";

const groq = new Groq({
  apiKey: Groq_Key,
  dangerouslyAllowBrowser: true,
});

export default groq;