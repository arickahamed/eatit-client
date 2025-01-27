type StoredItem<T> = {
  value: T;
  expiry: number;
};

export const setWithExpiry = <T,>(key: string, value: T, time: number): void => {
  const now = new Date();

  // Create an object with the value and expiry
  const item: StoredItem<T> = {
    value: value,
    expiry: now.getTime() + time * 60 * 60 * 1000, // Convert hours to milliseconds
  };

  // Store the item as a JSON string
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = <T,>(key: string): T | null => {
  const itemStr = localStorage.getItem(key);

  // If the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  try {
    const item: StoredItem<T> = JSON.parse(itemStr);
    const now = new Date();

    // Check if the item has expired
    if (now.getTime() > item.expiry) {
      // Remove the expired item
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error("Error parsing localStorage item", error);
    localStorage.removeItem(key);
    return null;
  }
};
