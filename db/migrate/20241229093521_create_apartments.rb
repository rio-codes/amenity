class CreateApartments < ActiveRecord::Migration[7.1]
  def change
    create_table :apartments do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.string :address
      t.integer :beds
      t.decimal :baths
      t.integer :square_feet
      t.decimal :monthly_rent
      t.decimal :security_deposit
      t.decimal :pet_deposit
      t.decimal :application_fee
      t.text :pet_policy
      t.decimal :overall_rating
      t.decimal :location_rating
      t.decimal :value_rating
      t.decimal :maintenance_rating
      t.decimal :noise_rating

      t.timestamps
    end
  end
end
