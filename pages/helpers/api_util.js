export const getAllData = async () => {
  const resp = await fetch(
    "https://events-ec8cd-default-rtdb.firebaseio.com/events.json"
  );
  const data = await resp.json();
  const events = [];
  for (let key in data) {
    events.push({ id: key, ...data[key] });
  }

  return events;
};

export async function getFeaturedEvents() {
  const events = await getAllData();

  return events.filter((event) => event.isFeatured);
}
