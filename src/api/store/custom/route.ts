import { MedusaRequest, MedusaResponse } from '@medusajs/medusa'

//this import does not work
// import helloWorld from '@modules/index'

//this import works
import helloWorld from './../../../modules/index'

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const result = helloWorld()
  res.json({ message: result })
}
