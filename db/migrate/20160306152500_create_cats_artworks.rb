class CreateCatsArtworks < ActiveRecord::Migration
  def change
    create_table :cats_artworks do |t|
    	t.belongs_to :artwork
      	t.belongs_to :cat
    end
  end
end
