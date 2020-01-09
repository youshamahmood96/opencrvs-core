/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors. OpenCRVS and the OpenCRVS
 * graphic logo are (registered/a) trademark(s) of Plan International.
 */
import * as fs from 'fs'
import { EMPLOYEES_SOURCE } from '@resources/bgd/constants'
import chalk from 'chalk'
import { internal } from 'boom'
import { composeAndSavePractitioners } from '@resources/bgd/features/employees/scripts/service'

const sourceJSON = `${EMPLOYEES_SOURCE}test-employees.json`

export default async function loadTestEmployees() {
  // tslint:disable-next-line:no-console
  console.log(
    `${chalk.blueBright(
      '/////////////////////////// MAPPING EMPLOYEES TO LOCATIONS, PRACTITIONERS & ROLES AND SAVING TO FHIR ///////////////////////////'
    )}`
  )
  const employees = JSON.parse(fs.readFileSync(sourceJSON).toString())
  try {
    await composeAndSavePractitioners(
      employees.slice(0, 1),
      process.argv[2],
      process.argv[3]
    )
  } catch (err) {
    return internal(err)
  }
  return true
}

loadTestEmployees()
