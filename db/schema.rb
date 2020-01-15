# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_15_201133) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "asker_id", null: false
    t.integer "taker_id"
    t.integer "price", null: false
    t.string "order_type", null: false
    t.string "active", null: false
    t.string "sold", null: false
    t.string "shipped", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "sex", null: false
    t.string "size", null: false
    t.index ["product_id"], name: "index_orders_on_product_id"
  end

  create_table "portfolio_items", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_id", null: false
    t.string "size", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "purchase_price", null: false
    t.index ["product_id"], name: "index_portfolio_items_on_product_id"
    t.index ["user_id"], name: "index_portfolio_items_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.string "style_code"
    t.string "colorway"
    t.integer "retail_price", null: false
    t.string "img_path", null: false
    t.date "release_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "model", null: false
    t.string "brand", null: false
    t.index ["name"], name: "index_products_on_name", unique: true
  end

  create_table "sales", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "product_id", null: false
    t.date "date", null: false
    t.string "active", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price", null: false
    t.string "sex", null: false
    t.string "size", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.integer "credit"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
