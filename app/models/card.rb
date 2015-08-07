class Card < ActiveRecord::Base

  validates :content, :title, :ord, :list_id, presence: true

  belongs_to :list

end
