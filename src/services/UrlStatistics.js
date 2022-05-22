export async function getUrlStatistics(url) {
  console.log(url);

  const data = await fetch(`http://localhost:3001/statistics/${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await data.json();
}
