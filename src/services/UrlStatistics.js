export async function getUrlStatistics(url) {
  console.log(url);

  const data = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/statistics/${url}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
}
