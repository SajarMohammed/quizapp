import { ref } from 'vue';

export async function useFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Return the data directly
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // Handle error appropriately
  }
}