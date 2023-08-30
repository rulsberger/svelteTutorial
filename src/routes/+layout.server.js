export const load = (async ({ cookies }) => {
  const logged_in = cookies.get('logged_in');

  return {
    logged_in
  };
})
