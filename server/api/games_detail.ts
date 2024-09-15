export default defineEventHandler(async (event) => {
  type ErrorResponse = {
    status: number;
    message: any;
  };

  const query = getQuery(event);

  try {
    const uri = `https://www.mmobomb.com/api1/game?id=${query.id}`;
    const response = await $fetch(uri, {
      method: "get",
    });

    return response;
  } catch (error) {
    throw createError<ErrorResponse>({
      status: 500,
      message: "error fetch",
    });
  }
});
