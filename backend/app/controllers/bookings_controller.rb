class BookingsController < ApplicationController

  def getBookings
    license_id = params[:license_id]
    rentals = Rental.where(license_id:license_id)

    car_plates = rentals.pluck(:plate_id)
    cars = Car.where(plate_id:car_plates)

    makesAndModels = cars.pluck(:make,:model)
    images = []
    makesAndModels.each do |makeAndModel|
      make,model = makeAndModel
      images.concat(Image.where(make:make,model:model))
    end

    render json: {rentals:rentals,cars:cars,images:images}
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
