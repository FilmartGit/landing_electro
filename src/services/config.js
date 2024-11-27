import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = publicRuntimeConfig;

export const ConfigServices = {
  getENV() {
    return [ API_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID];
  },
};
