module Authenticable
  def authenticate_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    begin
      decoded = decode_token(token)
      @current_user = User.find(decoded[:user_id]) if decoded[:user_id]
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'User not found' }, status: :not_found
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end

  def authorize_admin
    render json: { error: 'Forbidden' }, status: :forbidden unless @current_user&.admin?
  end

  private

  def decode_token(token)
    JWT.decode(token, Rails.application.secret_key_base)[0].with_indifferent_access
  rescue
    nil
  end
end