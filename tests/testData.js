export const baseUrl = "https://petstore.swagger.io"

export const outOfRageOrderId = 100500
export const petId = 2
export const incorrectPetId = 0

export const orderData = {
  "id": 7,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2023-08-17T13:41:28.333+0000",
  "status": "placed",
  "complete": true
}

export const orderNotFoundError = {
  code: 1,
  type: 'error',
  message: 'Order not found'
}

export const addIncorrectPetResponse = {
    "id": 9222968140498489000,
    "photoUrls": [],
    "tags": []
}

export const getPetResponse = {
    "id": 2,
    "category": {
      "id": 5,
      "name": "Southeast"
    },
    "name": "Freeport",
    "photoUrls": [
      "https://example.com/buddy.jpg"
    ],
    "tags": [
      {
        "id": 3,
        "name": "Oriental"
      }
    ],
    "status": "available"
}

export const deletePetResponse = {
    "code": 200,
    "type": "unknown",
    "message": getPetResponse.id
}

export const petData = {
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
}

export const incorretPetData = {
    "incorrect": "input"
}