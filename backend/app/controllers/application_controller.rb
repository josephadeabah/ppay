class ApplicationController < ActionController::API
    def authenticate_request!
      token = request.headers['Authorization']&.split(' ')&.last
      decoded_token = decode_token(token)
      @current_user = User.find_by(id: decoded_token[:user_id]) if decoded_token
    rescue
      render json: { errors: 'Unauthorized' }, status: :unauthorized
    end
  
    private
  
    def decode_token(token)
      body = JWT.decode(token, Rails.application.secret_key_base)[0]
      HashWithIndifferentAccess.new body
    rescue
      nil
    end
  end
  