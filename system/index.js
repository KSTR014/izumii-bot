import 'dotenv/config';
import { Telegraf } from 'telegraf';
import chalk from 'chalk';
import handler from './client.js';
import { cmdLoader } from '../lib/plugins.js';
import Function from '../lib/function.js';

// Global Functions
global.Func = Function;

// Validasi BOT_TOKEN dari environment variables
if (!process.env.BOT_TOKEN) {
  console.error(chalk.red.bold('Error: BOT_TOKEN not found in environment variables.'));
  process.exit(1);
}

// Inisialisasi bot
const bot = new Telegraf(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log(chalk.blue('Loading commands...'));
    await cmdLoader(bot);

    console.log(chalk.blue('Setting up handlers...'));
    handler(bot);

    // Meluncurkan bot
    console.log(chalk.green.bold('Bot started successfully!'));
    await bot.launch();

  } catch (error) {
    console.error(chalk.red.bold('Error starting bot:'), error);
  }

  // Menangani sinyal untuk menghentikan bot dengan benar
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
})();
