class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  acts_as_token_authenticatable
  validates :username, presence: true, uniqueness: {case_sensitive: false}, length: {minimum: 4}
end
