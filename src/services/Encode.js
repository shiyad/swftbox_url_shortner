export async function encodeUrl(fullUrl) {
  console.log(fullUrl);

  const currentUrl = window.location.href;

  console.log(fullUrl);

  debugger;

  const data = await fetch("http://localhost:3001/encode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ host: currentUrl, fullUrl: fullUrl }),
  });
  return await data.json();
}
