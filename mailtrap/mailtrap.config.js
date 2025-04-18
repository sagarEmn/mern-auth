import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

// load environment variables from .env file
dotenv.config();

// access the token from process.env
export const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

