// Your web app's Firebase configuration (reuse from script.js)

// Initialize Firebase (reuse from script.js)

// Function to display document data on result page
function displayDocumentData(searchData) {
    document.getElementById('cek').innerText = searchData.id;
  }
  
  // Get search data from query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const searchData = {};
  for (const [key, value] of searchParams) {
    searchData[key] = value;
  }
  
  // Display document data on result page
  if (searchData.id) {
    displayDocumentData(searchData);
  } else {
    console.log('No document data found.');
  }
  