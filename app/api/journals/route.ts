export async function GET(request: Request) {
  const res = await fetch("http://localhost:8080/api/v1/journals");

  const data = await res.json();

  return Response.json(data);
}
