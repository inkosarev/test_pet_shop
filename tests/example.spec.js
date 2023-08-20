const { test, expect } = require('@playwright/test')

import {
  addIncorrectPetResponse,
  baseUrl,
  deletePetResponse,
  getPetResponse,
  // incorrectPetId,
  incorretPetData,
  orderData,
  orderNotFoundError,
  outOfRageOrderId,
  petData,
  // petNotFound,
} from './testData.js'

const baseTest = async(response) => {
  expect(response.status()).toBe(200)
  expect(response.headers()).toHaveProperty('content-type', 'application/json')
  return JSON.parse(await response.text())
}

test.describe.parallel('Order API testing', () => {
  test('Place order', async ({ request }) => {
    const response = await request.post(`${baseUrl}/v2/store/order`, { data: orderData })

    const responseText = await baseTest(response)
    expect(responseText).toEqual(orderData)
  })

  test('Get order', async ({ request }) => {
    const orderId = orderData.id

    const response = await request.get(`${baseUrl}/v2/store/order/${ orderId }`)
    const responseText = await baseTest(response)
    debugger
    expect(responseText).toEqual(orderData)
  })

  test('Get out-of-range order',  async ({ request }) => {
    const response = await request.get(`${baseUrl}/v2/store/order/${ outOfRageOrderId }`)
    
    expect(response.status()).toBe(404)
    
    const responseText = JSON.parse(await response.text())
    expect(responseText).toEqual(orderNotFoundError)
  })

  test('Get inventory',  async ({ request }) => {
    const response = await request.get(`${baseUrl}/v2/store/inventory`)
    await baseTest(response)
  })
})

test.describe.parallel('Pet API testing', () => {
  test('Add pet', async ({ request }) => {
    const response = await request.post(`${baseUrl}/v2/pet`, { data: petData })
    const responseText = await baseTest(response)
  })

  test('Add incorrect pet', async ({ request }) => {
    const response = await request.post(`${baseUrl}/v2/pet`, { data: incorretPetData })
    const responseText = JSON.parse(await response.text())
    expect(responseText).toEqual(addIncorrectPetResponse)
  })
  
  test('Get pet', async ({ request }) => {
    const response = await request.get(`${baseUrl}/v2/pet/${petData.id}`)
    const responseText = await baseTest(response)
    expect(responseText).toEqual(getPetResponse)
  })

  test('Delete pet', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/v2/pet/${petData.id}`)
    const responseText = await baseTest(response)
    expect(responseText).toEqual(deletePetResponse)
  })

  test('Get deleted pet', async ({ request }) => {
    const response = await request.get(`${baseUrl}/v2/pet/${petData.id}`)
    expect(response.status()).toBe(404)
  })
})