import { numeric, pgTable, serial, text, timestamp,integer } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: serial().primaryKey(),
  title: text().notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})


export const tenants = pgTable('tenants', {
  id: serial().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  owner: integer('id')
    .notNull()
    .references(() => users.id),
  balance: numeric('balance', { precision: 10, scale: 2 }).notNull(),
  password: text().notNull(),
})

export const users = pgTable('user', {
  id: serial().primaryKey(),
  name: text().notNull(),
  role: text().notNull().$type<'tenant' | 'owner' | 'admin' | 'admin_super'>(),
  email: text().notNull().unique(),
  balance: numeric('balance', { precision: 10, scale: 2 }).notNull(),
  password: text().notNull(),
})