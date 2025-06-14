import { defineDb, defineTable, column } from "astro:db";

const user = defineTable({
  columns: {
    user_id: column.number({
      primaryKey: true,
      unique: true,
    }),
    clerk_user_id: column.text({ unique: true }),
    name: column.text(),
    email: column.text(),
    phone: column.text({ optional: true }),
    address: column.text({ optional: true }),
    created_at: column.date({ default: new Date() }),
  },
});

const product = defineTable({
  columns: {
    product_id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    name: column.text(),
    description: column.text({ optional: true }),
    price: column.number(),
    image_url: column.text({ optional: true }),
    category: column.text({ optional: true }),
    is_active: column.boolean({ default: true }),
    created_at: column.date({ default: new Date() }),
  },
});

const cart = defineTable({
  columns: {
    cart_id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    user_id: column.number({ references: () => user.columns.user_id }),
    status: column.text({ default: "active" }),
    created_at: column.date({ default: new Date() }),
    updated_at: column.date({ default: new Date() }),
  },
});

const cart_item = defineTable({
  columns: {
    cart_item_id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    cart_id: column.number({ references: () => cart.columns.cart_id }),
    product_id: column.number({ references: () => product.columns.product_id }),
    quantity: column.number({ default: 1 }),
    unit_price: column.number(),
    added_at: column.date({ default: new Date() }),
  },
});

const order = defineTable({
  columns: {
    order_id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    user_id: column.number({ references: () => user.columns.user_id }),
    cart_id: column.number({ references: () => cart.columns.cart_id }),
    total_amount: column.number(),
    status: column.text({ default: "pending" }),
    delivery_address: column.text(),
    delivery_phone: column.text(),
    notes: column.text({ optional: true }),
    created_at: column.date({ default: new Date() }),
    updated_at: column.date({ default: new Date() }),
  },
});

const order_item = defineTable({
  columns: {
    order_item_id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    order_id: column.number({ references: () => order.columns.order_id }),
    product_id: column.number({ references: () => product.columns.product_id }),
    product_name: column.text(),
    quantity: column.number(),
    unit_price: column.number(),
    subtotal: column.number(),
  },
});

export default defineDb({
  tables: {
    user,
    product,
    cart,
    cart_item,
    order,
    order_item,
  },
});
