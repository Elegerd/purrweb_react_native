export default (firstDate, secondDate) => {
  return Math.ceil(
    Math.abs(new Date(secondDate).getTime() - new Date(firstDate).getTime()) /
      (1000 * 3600 * 24),
  );
};
