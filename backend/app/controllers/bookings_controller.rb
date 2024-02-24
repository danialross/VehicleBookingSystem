class BookingsController < ApplicationController

  def getBookings
    license_id = params[:license_id]
    rentals_with_cars_and_images = Rental.joins(:car)
                                      .joins("INNER JOIN images ON cars.make = images.make AND cars.model = images.model")
                                      .where(license_id: license_id)
                                      .select('rentals.*, cars.*, images.image')


    render json: {bookings:rentals_with_cars_and_images}

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
