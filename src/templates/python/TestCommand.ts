export var PyTestCommand = 
`from discord.commands import slash_command
from discord.ext import commands

from config import config

class TestCommand(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        
    @slash_command(guild_ids=[config.GUILD_ID])
    async def ping(self, ctx):
        await ctx.respond("Pong!")

def setup(bot):
    bot.add_cog(TestCommand(bot))`