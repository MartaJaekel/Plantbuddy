export default async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`);
  }
  return response.json();
}
