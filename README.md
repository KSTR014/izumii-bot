
# IzumiiV2

![Logo](https://github.com/rlzyy/izumii-bot/raw/main/components/image/thumbnail.jpg)


**Izumii Bot** is a versatile Telegram bot built with the **Telegraf** framework for Telegram integration. This bot offers a wide range of features including AI, multimedia support, and custom plugin handling. Created by **Rlzyy**, it is designed to be a powerful tool for automation and interactive.

## Features
- **AI Chat**: The bot supports intelligent conversations with the help of AI.
- **Multimedia Support**: Easily send videos, images, and audios.
- **Custom Plugins**: Add your own plugins to extend the bot's functionality.
- **Custom Commands**: Create and use custom commands tailored to your needs.

## Usage/Examples

```
const helper = {
  command: ['hello'],
  description: 'Sends a hello message',
  operate: async (ctx, { bot, text, prefix, command }) => {
    await ctx.reply('Hello, World!');
  },
  noPrefix: false,
  isOwner: false,
  isGroup: false,
  isPremium: false,
};

export default helper;
```


## Installation

Install my-project with npm

```bash
git clone https://github.com/rlzyy/izumii-bot.git
cd izumii-bot
npm install

# .env file
BOT_TOKEN=your_bot_token_here
OWNER=["your_username_here"]

npm start
```
    
## License

[MIT](https://raw.githubusercontent.com/rlzyy/izumii-bot/refs/heads/main/LICENSE)

