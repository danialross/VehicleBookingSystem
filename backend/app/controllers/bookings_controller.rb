class BookingsController < ApplicationController

  def getBookings
    license_id = params[:license_id]
    # rentals = Rental.where(license_id:license_id)

    # car_plates = rentals.pluck(:plate_id)
    # cars = Car.where(plate_id:car_plates)

    # makesAndModels = cars.pluck(:make,:model)
    # images = []
    # # Fetch all books and their authors

    # rentals_with_cars = Rental.joins(:car)
    # .where(license_id: license_id)
    # .select('rentals.*, cars.*')
    #
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
