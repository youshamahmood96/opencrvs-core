import gql from 'graphql-tag'

const allSearchFields = `
  id
    type
    registration {
      status
      contactNumber
      trackingId
      registrationNumber
      registeredLocationId
      duplicates
      createdAt
      modifiedAt
    }
    ... on BirthEventSearchSet {
      dateOfBirth
      childName {
        firstNames
        familyName
        use
      }
    }
    ... on DeathEventSearchSet {
      dateOfDeath
      deceasedName {
        firstNames
        familyName
        use
      }
    }
  `

export const REGISTRATION_HOME_QUERY = gql`
  query registrationHome(
    $locationIds: [String]
    $count: Int
    $inProgressSkip: Int
    $reviewStatuses: [String]
    $reviewSkip: Int
    $rejectSkip: Int
    $approvalSkip: Int
    $printSkip: Int
  ) {
    inProgressTab: searchEvents(
      locationIds: $locationIds
      status: ["IN_PROGRESS"]
      count: $count
      skip: $inProgressSkip
    ) {
      totalItems
      results {
        ${allSearchFields}
      }
    }
    reviewTab: searchEvents(
      locationIds: $locationIds
      status: $reviewStatuses
      count: $count
      skip: $reviewSkip
    ) {
      totalItems
      results {
        ${allSearchFields}
      }
    }
    rejectTab: searchEvents(
      locationIds: $locationIds
      status: ["REJECTED"]
      count: $count
      skip: $rejectSkip
    ) {
      totalItems
      results {
        ${allSearchFields}
      }
    }
    approvalTab: searchEvents(
      locationIds: $locationIds
      status: ["VALIDATED"]
      count: $count
      skip: $approvalSkip
    ) {
      totalItems
      results {
        ${allSearchFields}
      }
    }
    printTab: searchEvents(
      locationIds: $locationIds
      status: ["REGISTERED"]
      count: $count
      skip: $printSkip
    ) {
      totalItems
      results {
        ${allSearchFields}
      }
    }
  }
`

export const SEARCH_EVENTS = gql`
  query(
    $sort: String
    $trackingId: String
    $contactNumber: String
    $registrationNumber: String
    $status: [String]
    $locationIds: [String]
    $count: Int
    $skip: Int
  ) {
    searchEvents(
      sort: $sort
      trackingId: $trackingId
      registrationNumber: $registrationNumber
      contactNumber: $contactNumber
      locationIds: $locationIds
      status: $status
      count: $count
      skip: $skip
    ) {
      totalItems
      results {
        ${allSearchFields}
      }
    }
  }
`

export const FETCH_REGISTRATION_BY_COMPOSITION = gql`
  query data($id: ID!) {
    fetchRegistration(id: $id) {
      id
      registration {
        id
        type
        status {
          id
          user {
            id
            name {
              use
              firstNames
              familyName
            }
            role
          }
          location {
            id
            name
            alias
          }
          office {
            name
            alias
            address {
              district
              state
            }
          }
          type
          timestamp
          comments {
            comment
          }
        }
        contact
        contactPhoneNumber
      }
      ... on BirthRegistration {
        child {
          id
          name {
            use
            firstNames
            familyName
          }
          birthDate
        }
      }
      ... on DeathRegistration {
        deceased {
          name {
            use
            firstNames
            familyName
          }
          deceased {
            deathDate
          }
        }
        informant {
          individual {
            telecom {
              use
              system
              value
            }
          }
        }
      }
    }
  }
`
