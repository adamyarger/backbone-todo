class Api::CommentsController < ApplicationController
	
	def create
		@comment = GodoComment.new(comment_params)

		if @comment.save
			render "comments/show"
		else
			render :json => @comment.errors, :status => :unprocessable_entity
		end
	end

	def index
		@comments = GodoComment.where(:godo_id => params[:godo_id])
		render "comments/index"
	end

	def show
		@comment = GodoComment.find(params[:id])
		render "comments/show"
	end

	def destroy
		@comment = GodoComment.find(params[:id])
		@comment.destroy
		render 'comments/show'
	end

	def update
		@comment = GodoComment.find(params[:id])
		if @comment.update_attributes(comment_params)
			render 'comments/show'
		else
			render :json => @comment.errors, :status => :unprocessable_entity
		end
		
	end


	private

		def comment_params
			params.require(:comment).permit(:godo_id, :content)
		end
end
