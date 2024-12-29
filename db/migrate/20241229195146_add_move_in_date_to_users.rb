class AddMoveInDateToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :move_in_date, :date
  end
end
