class Api::ListsController < ApplicationController

  before_action :ensure_logged_in

  def create
    @list = List.new(list_params)
    if @list.save
      render :json => @list
    else
      flash.now[:errors] = @list.errors.full_messages
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :json => @list
  end

  def index
    @lists = List.all
    render :json => @lists
  end

  def show
    @list = List.find(params[:id])
    render :json => @list
  end

  private

  def list_params
    params.require(:list).permit(:title,:ord,:board_id)
  end

  def ensure_logged_in
    return if logged_in?
    redirect_to new_session_url
  end

end
