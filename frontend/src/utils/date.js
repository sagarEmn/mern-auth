export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // date.getTime calculates the milliseconds value from unix epoch time until the moment in "date" object
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
