import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { PATH_URL, API_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = publicRuntimeConfig;

export const ConfigServices = {
  getENV() {
    return [PATH_URL, API_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID];
  },
};
