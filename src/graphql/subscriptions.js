/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicketPool = `subscription OnCreateTicketPool {
  onCreateTicketPool {
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
export const onUpdateTicketPool = `subscription OnUpdateTicketPool {
  onUpdateTicketPool {
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
export const onDeleteTicketPool = `subscription OnDeleteTicketPool {
  onDeleteTicketPool {
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
export const onCreatePayment = `subscription OnCreatePayment {
  onCreatePayment {
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
export const onUpdatePayment = `subscription OnUpdatePayment {
  onUpdatePayment {
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
export const onDeletePayment = `subscription OnDeletePayment {
  onDeletePayment {
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
export const onCreateAgent = `subscription OnCreateAgent {
  onCreateAgent {
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
export const onUpdateAgent = `subscription OnUpdateAgent {
  onUpdateAgent {
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
export const onDeleteAgent = `subscription OnDeleteAgent {
  onDeleteAgent {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateDevice = `subscription OnCreateDevice {
  onCreateDevice {
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
export const onUpdateDevice = `subscription OnUpdateDevice {
  onUpdateDevice {
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
export const onDeleteDevice = `subscription OnDeleteDevice {
  onDeleteDevice {
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
export const onCreateTicketSetting = `subscription OnCreateTicketSetting {
  onCreateTicketSetting {
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
export const onUpdateTicketSetting = `subscription OnUpdateTicketSetting {
  onUpdateTicketSetting {
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
export const onDeleteTicketSetting = `subscription OnDeleteTicketSetting {
  onDeleteTicketSetting {
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
