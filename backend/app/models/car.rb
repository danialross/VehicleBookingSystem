class Car < ApplicationRecord
  self.primary_key = 'plate_id'
  has_many :rentals, primary_key: 'plate_id', foreign_key: 'plate_id'

end
