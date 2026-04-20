export default createCommand({
  alias: ["death"],
  params: {
    action: z.enum(["+", "-", "set"]).optional(),
    value: z.number().optional(),
  },
  run: async (payload, ctx) => {
    const key = "death:count";
    let current = (await ctx.data.get<number>(key)) ?? 0;

    const { action, value } = payload.params;

    if (action === "+") {
      current++;
    } else if (action === "-") {
      current = Math.max(0, current - 1);
    } else if (action === "set" && typeof value === "number") {
      current = value;
    } else if (payload.args[0] === "+") {
      // Fallback pour !death + sans params typés si besoin
      current++;
    } else {
      await ctx.twitch.sendMessage({
        message: `@${payload.username}, le compteur de morts est à ${current}. Utilise !death + pour l'incrémenter.`,
      });
      return;
    }

    await ctx.data.set(key, current);
    await ctx.twitch.sendMessage({
      message: `Mort enregistrée ! Nouveau total : ${current} 💀`,
    });
  },
});
