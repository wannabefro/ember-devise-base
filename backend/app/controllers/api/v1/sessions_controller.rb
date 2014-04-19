class Api::V1::SessionsController < Devise::SessionsController
  def create
    user = User.find_by_email(params[:email])
    if user && user.valid_password?(params[:password])
      sign_in user
      data = {
        auth_token: user.authentication_token,
        auth_email: user.email
      }
      render json: data, status: 201
    else
      render json: {
        errors: {
          username: "invalid username or password"
        }
      }, status: :unprocessable_entity
    end
    # data     = {
    #   auth_token: resource.authentication_token,
    #   auth_email: resource.email
    # }
    # render json: data, status: 201
  end
end
