const parseTime = (time, setGreeting, setIsDay) => {
  if (time === null) return;

  const data = JSON.parse(time);
  const currentTime = new Date(data.datetime);
  const currentHour = currentTime.getHours();
  if (currentHour >= 5 && currentHour < 12) {
    setGreeting("Good morning");
    setIsDay(true);
  } else if (currentHour >= 12 && currentHour < 18) {
    setGreeting("Good afternoon");
    setIsDay(true);
  } else {
    setGreeting("Good evening");
    setIsDay(false);
  }
};

export default parseTime;
