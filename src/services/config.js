import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { PATHS_URL, API_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = publicRuntimeConfig;

export const ConfigServices = {
  getENV() {
    return [PATHS_URL, API_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID];
  },
};
