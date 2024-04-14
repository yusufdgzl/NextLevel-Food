import path from "path";
import fs from "fs";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "data", "meals.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");

  const extrackedData = JSON.parse(jsonData);

  return new Response(JSON.stringify(extrackedData));
}

export async function POST(request: Request) {
  const formData = await request.json();

  const filePath = path.join(process.cwd(), "data", "meals.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");

  const extrackedData = JSON.parse(jsonData);

  const updatedData = extrackedData.concat(formData);

  fs.writeFileSync(filePath, JSON.stringify(updatedData));

  return new Response(JSON.stringify(updatedData));
}
