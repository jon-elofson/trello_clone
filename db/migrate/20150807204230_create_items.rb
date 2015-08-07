class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :card_id, null: false
      t.string :title, null: false
      t.boolean :done?, null: false, default: false
      t.timestamps null: false
    end
    add_index :items, :card_id
  end
end
