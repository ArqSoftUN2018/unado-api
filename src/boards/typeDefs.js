export const boardsTypeDef = `

scalar Date

type Board {
    _id: ID !
    name: String !
    description: String
    group: [ID]
    owner_code: ID !
    archived: Boolean!  @default(value: false)
    create_at: Date
    update_at: Date
}

input BoardInput {
    name: String!
    description: String!
    archived : Boolean
    group: [ID!]
    owner_code: ID!
}`;

export const boardsQueries = `
    allBoards: [Board]!
    boardByCode(id: ID!): Board!
`;

export const boardsMutations = `
    createBoard(board: BoardInput!): Board!
    deleteBoard(id: ID!): String!
    updateBoard(id: ID!, board: BoardInput!): Board!
`;
