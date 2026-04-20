export default createCommand({
  alias: ["message"],
  params: {
    message: z.string("Tu dois fournir un message après !coucou"),
  },
  run: async (payload, ctx) => {
    const { message } = payload.params
    await ctx.twitch.sendMessage({
      message: `Coucou2: ${message}`
    })
  },
})
