export let getWeatherDataForCity = async (city) => {
  let response = await fetch(
    `"https://api.weatherapi.com/v1/current.json?key=03423b58aa7b40fa8a1132735242807&q=${city}&aqi=no";`,
    {
      method: "GET",
    }
  );
  return await response.json();
};
