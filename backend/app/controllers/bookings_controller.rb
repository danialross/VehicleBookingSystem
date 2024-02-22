class BookingsController < ApplicationController

  def getBookings
    license_id = params[:license_id]
    @rentals = Rental.where(license_id:license_id)
    render json: @rentals
  end

  def getPictures
    images_query = Image.all

    if params[:make].present?
      images_query = images_query.where(make: params[:make])
    end

    if params[:model].present?
      images_query = images_query.where(model: params[:model])
    end

    @images = images_query.all

    render json: @images
  end
end
