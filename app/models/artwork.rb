class Artwork < ActiveRecord::Base

		has_and_belongs_to_many :cats, join_table: :cats_artworks

		mount_uploader :picture, PictureUploader

		include RankedModel
  		ranks :row_order

end
