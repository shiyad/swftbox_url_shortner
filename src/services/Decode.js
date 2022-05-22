export async function decodeUrl(encodedurl) {
  console.log(encodedurl);

  const data = await fetch(`${process.env.REACT_APP_BASE_API_URL}/decode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(encodedurl),
  });
  return await data.json();
}
