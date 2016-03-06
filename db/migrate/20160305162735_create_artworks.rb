class CreateArtworks < ActiveRecord::Migration
  def change
    create_table :artworks do |t|
      t.string :name
      t.text :description
      t.string :picture
      t.integer :row_order

      t.timestamps null: false
    end
  end
end
