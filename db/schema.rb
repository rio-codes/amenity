# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_12_29_195146) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "apartment_images", force: :cascade do |t|
    t.bigint "apartment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["apartment_id"], name: "index_apartment_images_on_apartment_id"
  end

  create_table "apartments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title"
    t.string "address"
    t.integer "beds"
    t.decimal "baths"
    t.integer "square_feet"
    t.decimal "monthly_rent"
    t.decimal "security_deposit"
    t.decimal "pet_deposit"
    t.decimal "application_fee"
    t.text "pet_policy"
    t.decimal "overall_rating"
    t.decimal "location_rating"
    t.decimal "value_rating"
    t.decimal "maintenance_rating"
    t.decimal "noise_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_apartments_on_user_id"
  end

  create_table "properties", force: :cascade do |t|
    t.bigint "user_id"
    t.text "address", null: false
    t.decimal "price"
    t.integer "square_footage"
    t.integer "bedrooms"
    t.integer "bathrooms"
    t.jsonb "hoa_info"
    t.integer "overall_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_properties_on_user_id"
  end

  create_table "property_images", force: :cascade do |t|
    t.bigint "property_id"
    t.text "image_url"
    t.string "image_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["property_id"], name: "index_property_images_on_property_id"
  end

  create_table "property_ratings", force: :cascade do |t|
    t.bigint "property_id"
    t.string "category"
    t.integer "score"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["property_id"], name: "index_property_ratings_on_property_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "move_in_date"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "apartment_images", "apartments"
  add_foreign_key "apartments", "users"
  add_foreign_key "properties", "users"
  add_foreign_key "property_images", "properties"
  add_foreign_key "property_ratings", "properties"
end
