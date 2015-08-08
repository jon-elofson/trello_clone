class List < ActiveRecord::Base

  validates :title, :ord, :board_id, presence: true

  belongs_to :board

  has_many :cards

end
