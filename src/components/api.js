const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-2',
  headers: {
    authorization: 'bb1fee31-957c-4b3e-9d5c-e5a39df6a8a4',
    'Content-Type': 'application/json'
  }
}

function getResponseData(result) {
  if (result.ok) {
    return result.json();
  } else {
    return Promise.reject(`Ошибка: ${result.status}`);
  }
}

export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
  .then(getResponseData);
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
  .then(getResponseData);
}

export const editMyProfile = (inputName, inputDescription) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: inputName,
      about: inputDescription
    })
  })
  .then(getResponseData);
}

export const createCardNew = (data) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(data)
  })
  .then(getResponseData);
}

export const clickOnLike = (id, isLiked) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: config.headers
  })
  .then(getResponseData);
}

export const deleteMyCard = (data) => {
  return fetch(`${config.baseUrl}/cards/${data}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(getResponseData);
}

export const updateMyAvatar = (data) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(data)
  })
  .then(getResponseData);
}