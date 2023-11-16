export const fetchCars = () => {
  return fetch(import.meta.env.VITE_API_URL + '/cars')
  .then(response => {
    if (!response.ok)
      throw new Error("Something went wrong: " + response.statusText);
  
    return response.json();  
  })
  .catch(err => console.error(err))
}

export const saveCar = (car) => {
  return fetch(import.meta.env.VITE_API_URL + '/cars', {
    method: 'POST',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify(car)
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Addition failed: " + response.statusText);

    return response.json();
  })
  .catch(err => console.error(err))
}

export const updateCar = (car, url) => {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify(car)
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Error in edit: " + response.statusText);

    return response.json();
  })
  .catch(err => console.error(err))
}

export const deleteCar = (url) => {
  return fetch(url, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Error in delete: " + response.statusText);
  })
  .catch(err => console.error(err))
}