export const MOCKDATAYEARS = {
  2021: {
    id: 2021,
    value: "2021",
  },
  2022: {
    id: 2022,
    value: "2022",
  },
};

export const MOCKDATAMONTHS = {
  January: {
    id: 1,
    value: "January",
  },
  February: {
    id: 2,
    value: "February",
  },
  March: {
    id: 3,
    value: "March",
  },
  April: {
    id: 4,
    value: "April",
  },
  May: {
    id: 5,
    value: "May",
  },
  June: {
    id: 6,
    value: "June",
  },
  July: {
    id: 7,
    value: "July",
  },
  August: {
    id: 8,
    value: "August",
  },
  September: {
    id: 9,
    value: "September",
  },
  October: {
    id: 10,
    value: "October",
  },
  November: {
    id: 11,
    value: "November",
  },
  December: {
    id: 12,
    value: "December",
  },
};
const MOCKDATA = [
  {
    id: 1,
    title: "Programming is awesome",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: " Mars 11, 12345 San Mercury",
    date: "2021-02-20",
    image: "images/coding.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 51, 98999 New Work",
    date: "2021-07-30",
    image: "images/introvert.jpg",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Venera Street 2, 115 Moon City",
    date: "2022-01-15",
    image: "images/extrovert.jpg",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Planet for all",
    description:
      "You probably need to help our planet in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Earth Street 2022,  Every City",
    date: "2021-10-15",
    image: "images/planet.jpg",
    isFeatured: true,
  },
  {
    id: 5,
    title: "Water is everything",
    description:
      "Human life is nothing without water.It is the crutial element we  need in our life ",
    location: "Atlantic Street 1, Europe City",
    date: "2021-07-15",
    image: "images/water.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return MOCKDATA.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return MOCKDATA;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = MOCKDATA.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return MOCKDATA.find((event) => event.id === id);
}
