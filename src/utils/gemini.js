import { GoogleGenAI } from "@google/genai";
import { Gemini_Key } from "./Constant";

const ai = new GoogleGenAI({
  apiKey: Gemini_Key,
});

export default ai;