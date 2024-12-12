import fs from "fs/promises";
const FILE_PATH = "/tmp/activity.json";

export const POST = async (req: Request) => {
  try {
    // Parse incoming data from the POST request
    const data = await req.json();

    // Save the data to /tmp/activity.json
    await fs.writeFile(
      FILE_PATH,
      JSON.stringify({ ...data, updateTime: Date.now() }),
      "utf8",
    );

    // console.log("Data saved to /tmp/activity.json:", data);
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    // console.error("Error saving activity:", error);
    return new Response(
      JSON.stringify({ success: false, error: "something went wrong!" }),
      {
        status: 500,
      },
    );
  }
};

export const GET = async () => {
  try {
    // Check if the file exists
    const fileExists = await fs.stat(FILE_PATH).catch(() => false);
    if (!fileExists) {
      // console.log("No data found in /tmp/activity.json");
      return new Response(JSON.stringify({ activity: null }), { status: 200 });
    }

    // Read the data from /tmp/activity.json
    const fileContent = await fs.readFile(FILE_PATH, "utf8");
    const data = JSON.parse(fileContent);

    // console.log("Data retrieved from /tmp/activity.json:", data);
    if (Date.now() - data.updateTime >= 7 * 60 * 1000) {
      // 7 minutes = 7 * 60 * 1000 milliseconds
      // console.log("offline...");
      return new Response(JSON.stringify({ activity: null }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify({ ...data }), {
      status: 200,
    });
  } catch (error) {
    // console.error("Error retrieving activity:", error);
    return new Response(
      JSON.stringify({ activity: null, success: false, error }),
      {
        status: 500,
      },
    );
  }
};
