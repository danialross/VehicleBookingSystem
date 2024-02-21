class ApiController < ApplicationController
  def start
    render json:{'text':"Welcome"}
  end
  def end
    render json:{'text':"BYe BYe"}
  end
end
