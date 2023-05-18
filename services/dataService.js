import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('data.json');
    const data = response.data;
    console.log(data);
    // Process and use the data as needed
  } catch (error) {
    console.log(error);
    // Handle the error
  }
};

fetchData();
