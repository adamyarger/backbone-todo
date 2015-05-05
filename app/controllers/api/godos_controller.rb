class Api::GodosController < ApplicationController
	def destroy
		@godo = Godo.find(params[:id])

		if @godo.destroy
			render "godos/show"
		else
			raise "wtf?"
		end
	end

	def create
		# @godo = Godo.new(godo_params)
		@godo = current_user.godos.build(godo_params)

		if @godo.save
			render "godos/show"
		else
		render :json => @godo.errors, :status => :unprocessable_entity
		end
	end

	def index
		@godos = Godo.all
		render "godos/index"
	end

	def show
		@godo = Godo.find(params[:id])
		@comments = @godo.comments
		# used for jbuilder
		render "godos/show"
	end

	def update
		@godo = Godo.find(params[:id])

		if @godo.update_attributes(godo_params)
			render "godos/show"
		else
			render :json => @godo.errors, status => :unprocessable_entity
		end
	end

	private

		def godo_params
			params.require(:godo).permit(:title)
		end
  
end