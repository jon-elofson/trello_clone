class Api::CardsController < ApplicationController

  before_action :ensure_logged_in
  skip_before_action :verify_authenticity_token

  def create
    @card = Card.new(card_params)
    if @card.save
      render :json => @card
    else
      flash.now[:errors] = @card.errors.full_messages
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :json => @card
  end

  def index
    @cards = Card.all
    render :json => @cards
  end

  def show
    @card = Card.find(params[:id])
    render :json => @card
  end

  private

  def card_params
    params.require(:card).permit(:title,:content,:ord,:list_id)
  end

  def ensure_logged_in
    return if logged_in?
    redirect_to new_session_url
  end

end
