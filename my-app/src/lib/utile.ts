export function formDate(date: string) {
  const d = new Date(date); // Convert to Date object
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

