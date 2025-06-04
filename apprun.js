const axios = require('axios');

let callNumber = 1; // Initialize call counter

const fetchData = async () => {
    try {
        const response = await axios.get('https://turf-backend-cdpo.onrender.com/maininfos');
        console.log(`Call #${callNumber} - Data fetched at ${new Date().toISOString()}:`, response.data);
    } catch (error) {
        console.error(`Call #${callNumber} - Error fetching data at ${new Date().toISOString()}:`, error.message);
    } finally {
        callNumber++; // Increment the call counter after each attempt
    }
};

// Call the fetch function every minute
setInterval(fetchData, 60 * 1000);

console.log("Turf monitoring app is running...");
