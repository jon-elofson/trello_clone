class CardAssignment < ActiveRecord::Base

  validates :card_id, :user_id, presence: true

  belongs_to :card

  belongs_to :user

end
