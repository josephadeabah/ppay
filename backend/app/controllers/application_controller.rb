class ApplicationController < ActionController::API
  before_action :authenticate_request!

  private

  def authenticate_request!
    token = request.headers['Authorization']&.split(' ')&.last
    decoded_token = decode_token(token)
    @current_user = User.find_by(id: decoded_token[:user_id]) if decoded_token
  rescue JWT::DecodeError => e
    render json: { errors: e.message }, status: :unauthorized
  rescue ActiveRecord::RecordNotFound => e
    render json: { errors: e.message }, status: :unauthorized
  end

  def decode_token(token)
    JWT.decode(token, Rails.application.secret_key_base)[0]
  rescue JWT::DecodeError
    nil
  end
end
