class BookingsController < ApplicationController

  def getBookings
    license_id = params[:license_id]
    rentals_with_cars_and_images = Rental.joins(:car)
                                      .joins("INNER JOIN images ON cars.make = images.make AND cars.model = images.model")
                                      .joins("INNER JOIN customers ON rentals.license_id = customers.license_id")
                                      .where(license_id: license_id)
                                      .select('rentals.*, cars.*,customers.name, images.image')


    render json: {bookings:rentals_with_cars_and_images}

  end

  def searchRentalCars

  @cars = Car.all
  @cars = @cars.where(make:params[:make]) if params[:make].present?
  @cars = @cars.where(model:params[:model]) if params[:model].present?
  @cars = @cars.where(fuel:params[:fuel]) if params[:fuel].present?
  @cars = @cars.where(category:params[:category]) if params[:category].present?
  @cars = @cars.where(color:params[:color]) if params[:color].present?
  @cars = @cars.where(transmission:params[:transmission]) if params[:transmission].present?
  @cars = @cars.where(year:params[:year]) if params[:year].present?

  if(params[:order].present?)
    if(params[:order] == "asc")
      @cars = @cars.order(:rate)
    elsif(params[:order] == "desc")
      @cars = @cars.order(rate: :desc)
    end
  end



  @cars = @cars.joins("INNER JOIN images ON cars.make = images.make AND cars.model = images.model")
    .select("cars.*,images.image")

  render json:{cars:@cars}

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

  def getOptions
    @cars = Car.all
    @cars = @cars.where(make:params[:make]) if params[:make].present?
    @cars = @cars.where(model:params[:model]) if params[:model].present?
    @cars = @cars.where(fuel:params[:fuel]) if params[:fuel].present?
    @cars = @cars.where(category:params[:category]) if params[:category].present?
    @cars = @cars.where(color:params[:color]) if params[:color].present?
    @cars = @cars.where(transmission:params[:transmission]) if params[:transmission].present?
    @cars = @cars.where(year:params[:year]) if params[:year].present?

    make = @cars.distinct.pluck(:make)
    model = @cars.distinct.pluck(:model)

    fuel = @cars.distinct.pluck(:fuel)
    category = @cars.distinct.pluck(:category)
    color = @cars.distinct.pluck(:color)
    transmission = @cars.distinct.pluck(:transmission)
    year = @cars.distinct.pluck(:year).sort
    year = year.map(&:to_s)

    make.unshift("\u00A0");
    fuel.unshift("\u00A0");
    category.unshift("\u00A0");
    color.unshift("\u00A0");
    transmission.unshift("\u00A0");
    year.unshift("\u00A0");

    render json:{make:make,model:model,fuel:fuel,category:category,color:color,transmission:transmission,year:year}
  end

  def bookRental
    raw_data = request.body.read
    jsonData = JSON.parse(raw_data)

    customer = Customer.new
    customer.attributes = { license_id: jsonData["license_id"],name:jsonData["name"],age:jsonData["age"],gender:jsonData["gender"],contact_info:jsonData["contact_info"]}
    rental = Rental.new
    rental.attributes = { license_id: jsonData["license_id"], plate_id: jsonData["plate_id"] }

    puts rental
    puts customer

    # customer = Customer.create( license_id: jsonData["license_id"],name:jsonData["name"],age:jsonData["age"],gender:jsonData["gender"],contact_info:jsonData["contact_info"])
    # rental = Rental.create( license_id: jsonData.license_id, plate_id: jsonData.plate_id )


    # if customer.persisted? && rental.persisted?
    #   puts "Records Successfully Added"
    # else
    #   puts "Error Saving Records"
    # end

    # customer.save
    # rental.save

  end

end
