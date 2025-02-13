class CreatePropertyImages < ActiveRecord::Migration[7.1]
  def change
    create_table :property_images do |t|
      t.references :property, foreign_key: true
      t.text :image_url
      t.string :image_type
      t.timestamps
    end
  end
 end