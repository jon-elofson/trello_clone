class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      redirect_to "/#"
    else
      flash.now[:error] = ["Could not find user with username/password"]
      @user = User.new(username: params[:user][:username])
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end


end
