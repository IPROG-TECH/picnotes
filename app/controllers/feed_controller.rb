class FeedController < ApplicationController
  def index
    if params[:user_id]
      if params[:user_id] != current_user.id.to_s
        user = User.find_by(id: params[:user_id])
        @user = user
        @following = user.following
        @notes = Note.where(user_id: user.following.pluck(:id))
        @notes = @notes.order(created_at: :desc)
      else
        flash[:success] = "Some thing went wrong!"
        redirect_to root_path
      end
    else
      @user = current_user
      @following = current_user.following
      @notes = Note.where(user_id: current_user.following.pluck(:id))
      @notes = @notes.order(created_at: :desc)
    end

  end
end