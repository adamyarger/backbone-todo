class SiteController < ApplicationController
	respond_to :html

	def root
		render "root"
	end
end