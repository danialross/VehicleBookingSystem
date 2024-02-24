class Rental < ApplicationRecord
  belongs_to :car, foreign_key: 'plate_id'

end
