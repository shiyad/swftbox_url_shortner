export async function getEncodedUrlList() {
  console.log(`${process.env.REACT_APP_BASE_API_URL}`);
  const data = await fetch(`${process.env.REACT_APP_BASE_API_URL}`);
  return await data.json();
}
