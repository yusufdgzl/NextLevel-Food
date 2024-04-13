import path from "path";
import fs from "fs";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "data", "meals.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");

  const extrackedData = JSON.parse(jsonData);

  return new Response(JSON.stringify(extrackedData));
}
