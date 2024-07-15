# app/models/forum.rb
class Forum < ApplicationRecord
    has_many :posts
  
    validates :name, presence: true
  end
  