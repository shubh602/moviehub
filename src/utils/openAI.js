import OpenAI from 'openai';
import { openAI_Key } from './Constant';

const client = new OpenAI({
  apiKey: openAI_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default client;