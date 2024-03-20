// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'
import { GraphQLClient } from 'graphql-request'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(['info', 'warn', 'error']),
})

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})

export const request = async (query, variables) => {
  const endpoint = process.env.APPSYNC_API_ENDPOINT_URL

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'x-api-key': process.env.APPSYNC_API_KEY,
    },
  })

  return await graphQLClient.request(query, variables)
}
