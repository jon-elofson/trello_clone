class Item < ActiveRecord::Base
  validates :card_id, :done?, :title, presence: true

  belongs_to :card
end
