import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = publicRuntimeConfig;

export const ConfigServices = {
  getENV() {
    return [ TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID];
  },
};
