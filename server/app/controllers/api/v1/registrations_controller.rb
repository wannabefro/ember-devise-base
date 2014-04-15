class Api::V1::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  respond_to :html, only: []
  respond_to :xml, only: []

  def create
    build_resource(sign_up_params)

    if resource.save
      if resource.active_for_authentication?
        return render json: {success: true}
      else
        expire_session_data_after_sign_in!
        return render :json => {:success => true}
      end
    else
      clean_up_passwords resource
      return render :status => 401, :json => {:errors => resource.errors}
    end
  end

  protected

  def sign_up_params
    params.require(:user).permit( :email, :password, :password_confirmation, :username)
  end
end
