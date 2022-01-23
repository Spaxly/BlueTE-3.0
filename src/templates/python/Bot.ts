export var PyBotClient = 
`import discord
from config import config
import os

intents = discord.Intents.all()

bot = discord.Bot(intents=intents)

@bot.event
async def on_ready():
    print(">> Bot Activated")

for filename in os.listdir("./commands/"):
    if filename.endswith(".py") and not filename.startswith("_"):
        bot.load_extension(f"commands.{filename[:-3]}")

bot.run(config.TOKEN)`