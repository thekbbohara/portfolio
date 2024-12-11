export const POST = async (req: Request) => {
  console.log(req);
  const data = await req.json();
  console.log(data);
  return Response.json({ hello: "world" });
};
