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

ActiveRecord::Schema[7.1].define(version: 2024_08_02_130200) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "inflation_rate"
    t.bigint "country_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_id"], name: "index_categories_on_country_id"
    t.index ["name", "country_id"], name: "index_categories_on_name_and_country_id", unique: true
  end

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.string "overall_inflation_rate"
    t.bigint "region_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "region_id"], name: "index_countries_on_name_and_region_id", unique: true
    t.index ["name"], name: "index_countries_on_name", unique: true
    t.index ["region_id"], name: "index_countries_on_region_id"
  end

  create_table "pay_trends", force: :cascade do |t|
    t.string "country"
    t.string "industry"
    t.string "company"
    t.string "role"
    t.integer "currentSalaryByCompany"
    t.integer "currentSalaryByRole"
    t.integer "change"
    t.string "changeTimeframe"
    t.string "benefits"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "role"
    t.string "status"
    t.string "salary_role"
    t.string "experience"
    t.string "country"
    t.string "industry"
    t.string "category"
    t.string "company"
    t.string "actual_salary"
    t.string "job_website"
    t.string "avatar"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "regions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_regions_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false, null: false
  end

  add_foreign_key "categories", "countries"
  add_foreign_key "countries", "regions"
  add_foreign_key "profiles", "users"
end
