class BookingsController < ApplicationController

  def getBookings
    license_id = params[:license_id]
    @rentals = Rental.where(license_id:license_id)
    render json: @rentals
  end

  def getAllPictures
    @images = Image.all
    render json: @images
  end
end
