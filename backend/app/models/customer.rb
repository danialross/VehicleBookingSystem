class Customer < ApplicationRecord
  has_many :rentals, primary_key: 'license_id', foreign_key: 'license_id'

end
