json.array!(@artworks) do |artwork|
  json.extract! artwork, :id, :name, :description, :picture, :row_order
  json.url artwork_url(artwork, format: :json)
end
