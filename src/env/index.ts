import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('🖐️  Invalid Environment Variables! ⚠️ ', _env.error.errors)

  throw new Error('Invalid Environment Variables!')
}

export const env = _env.data
