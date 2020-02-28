/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTicketPool = `mutation CreateTicketPool(
  $input: CreateTicketPoolInput!
  $condition: ModelTicketPoolConditionInput
) {
  createTicketPool(input: $input, condition: $condition) {
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
export const updateTicketPool = `mutation UpdateTicketPool(
  $input: UpdateTicketPoolInput!
  $condition: ModelTicketPoolConditionInput
) {
  updateTicketPool(input: $input, condition: $condition) {
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
export const deleteTicketPool = `mutation DeleteTicketPool(
  $input: DeleteTicketPoolInput!
  $condition: ModelTicketPoolConditionInput
) {
  deleteTicketPool(input: $input, condition: $condition) {
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
export const createPayment = `mutation CreatePayment(
  $input: CreatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  createPayment(input: $input, condition: $condition) {
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
export const updatePayment = `mutation UpdatePayment(
  $input: UpdatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = `mutation DeletePayment(
  $input: DeletePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  deletePayment(input: $input, condition: $condition) {
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
export const createAgent = `mutation CreateAgent(
  $input: CreateAgentInput!
  $condition: ModelAgentConditionInput
) {
  createAgent(input: $input, condition: $condition) {
    id
    name
    user {
      id
      name
      userName
      email
      password
      phone
    }
    device {
      id
      macAddress
      type
      location
      state
      lga
    }
    ticketPool {
      nextToken
    }
    payment {
      nextToken
    }
    email
    password
    initialWallet
    nin
  }
}
`;
export const updateAgent = `mutation UpdateAgent(
  $input: UpdateAgentInput!
  $condition: ModelAgentConditionInput
) {
  updateAgent(input: $input, condition: $condition) {
    id
    name
    user {
      id
      name
      userName
      email
      password
      phone
    }
    device {
      id
      macAddress
      type
      location
      state
      lga
    }
    ticketPool {
      nextToken
    }
    payment {
      nextToken
    }
    email
    password
    initialWallet
    nin
  }
}
`;
export const deleteAgent = `mutation DeleteAgent(
  $input: DeleteAgentInput!
  $condition: ModelAgentConditionInput
) {
  deleteAgent(input: $input, condition: $condition) {
    id
    name
    user {
      id
      name
      userName
      email
      password
      phone
    }
    device {
      id
      macAddress
      type
      location
      state
      lga
    }
    ticketPool {
      nextToken
    }
    payment {
      nextToken
    }
    email
    password
    initialWallet
    nin
  }
}
`;
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createDevice = `mutation CreateDevice(
  $input: CreateDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  createDevice(input: $input, condition: $condition) {
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
export const updateDevice = `mutation UpdateDevice(
  $input: UpdateDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = `mutation DeleteDevice(
  $input: DeleteDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  deleteDevice(input: $input, condition: $condition) {
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
export const createTicketSetting = `mutation CreateTicketSetting(
  $input: CreateTicketSettingInput!
  $condition: ModelTicketSettingConditionInput
) {
  createTicketSetting(input: $input, condition: $condition) {
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
export const updateTicketSetting = `mutation UpdateTicketSetting(
  $input: UpdateTicketSettingInput!
  $condition: ModelTicketSettingConditionInput
) {
  updateTicketSetting(input: $input, condition: $condition) {
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
export const deleteTicketSetting = `mutation DeleteTicketSetting(
  $input: DeleteTicketSettingInput!
  $condition: ModelTicketSettingConditionInput
) {
  deleteTicketSetting(input: $input, condition: $condition) {
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
