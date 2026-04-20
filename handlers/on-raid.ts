export default createHook({
  event: "notification.raid",
  run: async (event, ctx) => {
    // Envoi du shoutout Twitch officiel
    try {
      await ctx.twitch.sendShoutout(event.from_broadcaster_user_id)
    } catch (e) {
      // Le shoutout peut échouer si un autre est déjà en cours ou si les permissions manquent
    }

    // Message de remerciement personnalisé dans le chat
    await ctx.twitch.sendMessage({
      message: `WOW ! Merci pour le raid de ${event.viewers} personnes @${event.from_broadcaster_user_name} ! Bienvenue tout le monde ! <3`,
    })
  },
})
