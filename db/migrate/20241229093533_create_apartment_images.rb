class CreateApartmentImages < ActiveRecord::Migration[8.0]
  def change
    create_table :apartment_images do |t|
      t.references :apartment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
