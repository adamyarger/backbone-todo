class GodoComment < ActiveRecord::Base

	belongs_to :godo
	

	validates :content, :godo, :presence => true
end
