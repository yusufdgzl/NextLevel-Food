import path from "path";
import fs from "fs";
import { Meals } from "@/components/meals/MealsGridSection";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const filePath = path.join(process.cwd(), "data", "meals.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");

  const extrackedData = JSON.parse(jsonData);

  const selectedData = extrackedData.find((item:Meals) => item.title === slug);

  return new Response(JSON.stringify(selectedData));
}
