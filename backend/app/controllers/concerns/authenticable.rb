module Authenticable
    def authenticate_request
      header = request.headers['Authorization']
      token = header.split(' ').last if header
      decoded = decode_token(token)
      @current_user = User.find(decoded[:user_id]) if decoded
      render json: { error: 'Not Authorized' }, status: :unauthorized unless @current_user
    rescue
      render json: { error: 'Not Authorized' }, status: :unauthorized
    end

    def authorize_admin
        render json: { error: 'Forbidden' }, status: :forbidden unless @current_user&.admin?
    end
  
    private
  
    def encode_token(payload)
      JWT.encode(payload, Rails.application.secret_key_base)
    end
  
    def decode_token(token)
      JWT.decode(token, Rails.application.secret_key_base)[0].with_indifferent_access
    end
  end
  