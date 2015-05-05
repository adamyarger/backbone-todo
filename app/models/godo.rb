class Godo < ActiveRecord::Base
	belongs_to :user, :class_name => "User"
	has_many :comments, :class_name => "GodoComment"


	validates :title, :presence => true
end
