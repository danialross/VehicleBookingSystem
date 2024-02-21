class GalleriesController < ApplicationController
    def getAllPictures
        @galleries = Gallery.all
        render json: @galleries
    end
end
