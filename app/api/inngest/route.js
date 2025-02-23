export const { GET, POST, PUT } = (async () => {
    const { serve } = await import("inngest/next");
    return serve({
      client: inngest,
      functions: [syncUserCreation, syncUserUpdate, syncUserDeletion],
    });
  })();
  