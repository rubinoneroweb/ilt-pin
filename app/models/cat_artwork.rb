class CatArtwork < ActiveRecord::Base

belongs_to :category
belongs_to :tutorial

end