// async function weatherStation(keyword) {
//     const base_url = "https://jsonmock.hackerrank.com/api/weather/search";
//     let page = 1;
//     let results = [];
  
//     while (true) {
//       const url = `${base_url}?name=${keyword}&page=${page}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       const total_pages = data.total_pages;
  
//       for (const record of data.data) {
//         const city_name = record.name;
//         const weather = record.weather;
//         const wind_speed = parseInt(record.status[0].split(": ")[1].replace("Kmph", ""));
//         const humidity = parseInt(record.status[1].split(": ")[1].replace("%", ""));
  
//         results.push(`${city_name}, ${weather}, ${wind_speed}, ${humidity}`);
//       }
  
//       page++;
//       if (page > total_pages) {
//         break;
//       }
//     }
  
//     results.sort(); // Sort the results by city name
//     return results;
//   }
  
//   // Example usage:
//   const keyword = "y";
//   weatherStation(keyword)
//     .then((output) => console.log(output.join("\n")))
//     .catch((error) => console.error(error));

async function weatherStation(keyword) {
    const baseUrl = "https://jsonmock.hackerrank.com/api/weather/search?";
    const url = `${baseUrl}name=${keyword}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const records = data.data;
      const filteredRecords = records.filter(record => record.name.toLowerCase().includes('all'));
      filteredRecords.sort((a, b) => a.name.localeCompare(b.name));
  
      const result = filteredRecords.map(record => {
        const cityName = record.name;
        const temperature = record.weather;
        const wind = record.status[0].split(":")[1].trim().replace("Kmph", "");
        const humidity = record.status[1].split(":")[1].trim().replace("%", "");
  
        return `${cityName}, ${temperature}, ${wind}, ${humidity}`;
      });
  
      return result;
    } catch (error) {
      console.error("Error:", error);
      return [];s
    }
  }
  const keyword = "q";
    weatherStation(keyword)
      .then((output) => console.log(output.join("\n")))
    .catch((error) => console.error(error));

