class AddMoveInDateToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :move_in_date, :date
  end
end
