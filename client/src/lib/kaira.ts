const Kaira = async (name: string, email: string, query: string): Promise<{ sender: "admin", msg: string } | undefined> => {
  const res = await fetch("/api/kaira", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      query,
      email
    })
  })
  const output = await res.json()
  return output
}
export default Kaira;
