class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :update_sanitized_params, if: :devise_controller?
  private

  def authenticate_user_from_token!
    token = request.headers['auth-token'].to_s
    email = request.headers['auth-email'].to_s
    return unless token && email

    user = User.find_by_email(email)

    if user && Devise.secure_compare(user.authentication_token, token)
      sign_in user, store: false
    end
  end

  def update_sanitized_params
    devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(
      :username, :email, :password, :password_confirmation)
    }
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:login, :password) }
  end
end
