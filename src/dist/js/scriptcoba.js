import { createClient } from './';
const supabase = createClient('https://hxwsqciriodojdeiotvz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4d3NxY2lyaW9kb2pkZWlvdHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MzM1NjgsImV4cCI6MjAzNTQwOTU2OH0.VtY2iN9DlQbCxABeCnF4qZAmt___pW10Pm0LD1HBzzA')

// Function to fetch and display data from the "servis" table
async function fetchServisData() {
  const { data, error } = await supabase
    .from('servis')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  data.forEach(servis => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = servis.id;
    row.appendChild(idCell);

    const namaCell = document.createElement('td');
    namaCell.textContent = servis.nama_servis;
    row.appendChild(namaCell);

    const deskripsiCell = document.createElement('td');
    deskripsiCell.textContent = servis.deskripsi;
    row.appendChild(deskripsiCell);

    const hargaCell = document.createElement('td');
    hargaCell.textContent = servis.harga;
    row.appendChild(hargaCell);

    tableBody.appendChild(row);
  });
}

// Fetch and display data when the page loads
window.addEventListener('DOMContentLoaded', fetchServisData);