export const getAllData = async () => {
  const resp = await fetch(
    "https://events-ec8cd-default-rtdb.firebaseio.com/events.json"
  );
  const data = await resp.json();
  const events = [];

  for (let key of Object.keys(data)) {
    events.push({ id: key, ...data[key] });
  }
  //   for (let key in data) {
  //     events.push({ id: key, ...data[key] });
  //   }

  return events;
};

export async function getFeaturedEvents() {
  const events = await getAllData();

  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const events = await getAllData();

  return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allData = await getAllData();
  let filteredEvents = allData.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
