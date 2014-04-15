class Api::V1::SessionsController < Devise::SessionsController
  def create
    resource = resource_from_credentials
    data     = {
      auth_token: resource.authentication_token,
      auth_email: resource.email
    }
    render json: data, status: 201
  end
end
