export async function getEncodedUrlList() {
  const data = await fetch(`http://localhost:3001`);
  return await data.json();
}
