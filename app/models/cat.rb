class Cat < ActiveRecord::Base

	has_and_belongs_to_many :artworks, join_table: :cats_artworks
	mount_uploader :picture, PictureUploader

end
