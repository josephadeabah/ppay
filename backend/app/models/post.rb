# app/models/post.rb
class Post < ApplicationRecord
  belongs_to :forum
  belongs_to :user

  validates :content, presence: true
end
