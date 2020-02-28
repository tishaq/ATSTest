/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicketPool = `query GetTicketPool($id: ID!) {
  getTicketPool(id: $id) {
    id
    agent {
      id
      name
      email
      password
      initialWallet
      nin
    }
    device {
      id
      macAddress
      type
      location
      state
      lga
    }
    ticketType
    location
    itemName
    quantity
    payerName
    fee
    date
    timeStamp
  }
}
`;
export const listTicketPools = `query ListTicketPools(
  $filter: ModelTicketPoolFilterInput
  $limit: Int
  $nextToken: String
) {
  listTicketPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      ticketType
      location
      itemName
      quantity
      payerName
      fee
      date
      timeStamp
    }
    nextToken
  }
}
`;
export const getPayment = `query GetPayment($id: ID!) {
  getPayment(id: $id) {
    id
    transactionId
    taxId
    billRef
    date
    totalAmount
    agent {
      id
      name
      email
      password
      initialWallet
      nin
    }
  }
}
`;
export const listPayments = `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      transactionId
      taxId
      billRef
      date
      totalAmount
    }
    nextToken
  }
}
`;
export const getAgent = `query GetAgent($id: ID!) {
  getAgent(id: $id) {
    id
    name
    email
    password
    initialWallet
    nin
  }
}
`;
export const listAgents = `query ListAgents(
  $filter: ModelAgentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      password
      initialWallet
      nin
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    agent {
      nextToken
    }
    userName
    email
    password
    phone
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      userName
      email
      password
      phone
    }
    nextToken
  }
}
`;
export const getDevice = `query GetDevice($id: ID!) {
  getDevice(id: $id) {
    id
    agent {
      id
      name
      email
      password
      initialWallet
      nin
    }
    macAddress
    ticketPool {
      nextToken
    }
    ticketSetting {
      nextToken
    }
    type
    location
    state
    lga
  }
}
`;
export const listDevices = `query ListDevices(
  $filter: ModelDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      macAddress
      type
      location
      state
      lga
      ticketSetting {
        items{
          id
          taxId
          reciptType
          itemName
          fee
          withQuantity
          withName
        }
       
      }
    }
    nextToken
  }
}
`;
export const getTicketSetting = `query GetTicketSetting($id: ID!) {
  getTicketSetting(id: $id) {
    id
    taxId
    device {
      id
      macAddress
      type
      location
      state
      lga
    }
    reciptType
    itemName
    fee
    withQuantity
    withName
  }
}
`;
export const listTicketSettings = `query ListTicketSettings(
  $filter: ModelTicketSettingFilterInput
  $limit: Int
  $nextToken: String
) {
  listTicketSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      taxId
      reciptType
      itemName
      fee
      withQuantity
      withName
    }
    nextToken
  }
}
`;
