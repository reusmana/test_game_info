export default defineEventHandler(async (event) => {
  type ErrorResponse = {
    status: number;
    message: any;
  };
  try {
    const uri = `https://www.mmobomb.com/api1/games?platform=pc`;
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
