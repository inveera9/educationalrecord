class User < ActiveRecord::Base
  require 'date'
  attr_accessor :current_password

  validates :email, presence: true
 #validates :password, length: { in: 8..12 }
  validates :first_name,:last_name,:presence => true,length: { maximum: 50 }
  #validates :zip,numericality: { only_integer: true ,message:"Zip code should be numeric"},length: { is: 5 ,message: "Zip code length should be 5"}
  #validates :phone,numericality:{ only_integer: true ,message:"Phone number should be numeric"},length: { is: 10 ,message: "Phone number length should be 10"}
  has_one :subscription,dependent: :destroy
  has_one :school,dependent: :destroy
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable
  
  after_create :subscribe_user_to_mailing_list
  after_create :send_email_to_user
  after_create :add_trial_plan

  def active_for_authentication?
    super && self.checking_active # i.e. super && self.is_active
  end

  def checking_active
    self.status.to_i==0 ? is_active=false : is_active=true
  end

  def inactive_message
    "Sorry, this account has been deactivated."
  end

  private
  def subscribe_user_to_mailing_list
  	#SubscribeUserToMailingListJob.perform_later(self)
  end
  def send_email_to_user
    @user = self.first_name
    @email= self.email
    UserMailer.success_email(@email,@user).deliver
  end
  def add_trial_plan
    plan_end_date=Date.current+29.days
    @subscription = Subscription.new(plan_end_date:plan_end_date,user_id:self.id,status:false)
    @subscription.save
  end
end
