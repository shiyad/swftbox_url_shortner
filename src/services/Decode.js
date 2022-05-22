export async function decodeUrl(encodedurl) {
  console.log(encodedurl);

  const data = await fetch("http://localhost:3001/decode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(encodedurl),
  });
  return await data.json();
}
