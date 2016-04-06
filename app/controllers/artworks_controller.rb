class ArtworksController < ApplicationController
  before_action :set_artwork, only: [:show, :edit, :update, :destroy]

  # GET /artworks
  # GET /artworks.json
  def index
    if params[:cat_id]
      @cat_id=params[:cat_id]
      @artworks = Cat.find(@cat_id).artworks.rank(:row_order).all
    else
      @artworks = Artwork.rank(:row_order).all
    end
    
  end


 def catalog
    @artworks = Artwork.rank(:row_order).all
  end


def update_row_order
    @artwork = Artwork.find(artwork_params[:artwork_id])
    @artwork.row_order_position = artwork_params[:row_order_position]
    @artwork.save

    render nothing: true # this is a POST action, updates sent via AJAX, no view rendered
  end



  # GET /artworks/1
  # GET /artworks/1.json
  def show
  end

  # GET /artworks/new
  def new
    @artwork = Artwork.new
  end

  # GET /artworks/1/edit
  def edit
  end

  # POST /artworks
  # POST /artworks.json
  def create
    @artwork = Artwork.new(artwork_params)

    respond_to do |format|
      if @artwork.save
        format.html { redirect_to @artwork, notice: 'Disegno inserito con successo.' }
        format.json { render :show, status: :created, location: @artwork }
      else
        format.html { render :new }
        format.json { render json: @artwork.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /artworks/1
  # PATCH/PUT /artworks/1.json
  def update
    respond_to do |format|
      if @artwork.update(artwork_params)
        format.html { redirect_to artworks_url, notice: 'Disegno modificato con successo!' }
        format.json { render :show, status: :ok, location: @artwork }
      else
        format.html { render :edit }
        format.json { render json: @artwork.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /artworks/1
  # DELETE /artworks/1.json
  def destroy
    @artwork.destroy
    respond_to do |format|
      format.html { redirect_to artworks_url, notice: 'Disegno eliminato!' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artwork
      @artwork = Artwork.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def artwork_params
      params.require(:artwork).permit(:name, :description, :picture, :row_order, :cat_id, :artwork_id, :row_order_position, {:cat_ids =>[]}) 
    end
end
