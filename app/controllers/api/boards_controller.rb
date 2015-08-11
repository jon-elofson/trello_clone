class Api::BoardsController < ApplicationController

  before_action :ensure_logged_in
  skip_before_action :verify_authenticity_token

  def index
    @boards = current_user.boards
    render :json => @boards
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def create
    @board = Board.new(board_params)
    @board.user = current_user
    if @board.save
      render :json => @board
    else
        flash.now[:errors] = @board.errors.full_messages
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    index
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end

  def ensure_logged_in
    return if logged_in?
    redirect_to new_session_url
  end

end
