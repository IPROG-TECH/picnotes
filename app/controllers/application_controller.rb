class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :initiate_instance_variables
  include UsersHelper
  def user_signed_in?
    if session[:user_id].present? && current_user.nil?
      session[:user_id] = nil
    end

    session[:user_id].present?
  end

  helper_method :user_signed_in?

  def initiate_instance_variables
    @note = Note.find_by_id(params[:id]) || Note.new
    @notes = Note.all
    @user = User.new
  end

  helper_method :initiate_instance_variables

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def default_meta_tags
    @page_title = 'Picnotes | Knowledge Sharing Hub for Lifelong Learners'
    @page_description = 'Picnotes is a knowledge sharing website full of educational topics. We connect people through general knowledge and education.'
    @page_keywords = 'free online general knowledge,free online knowledge base platform,general knowledge hub,knowledge hub,knowledge sharing websites,knowledge websites,online knowledge portal,online knowledge sharing hub,open knowledge,share your knowledge online,Educational Knowledge,research topics in education,intellectual knowledge,intellectual assets in knowledge management,intellectual knowledge management,best knowledge base platform,knowledge exchange platform,free knowledge base platform,free knowledge sharing platform,online knowledge sharing platform,intellectually stimulating books,hemoglobin study material,Respiratory system study guide,biology study material,philosophical books,How small scale mining works study notes,Raspberry pi study material,meditation books,Polity resources,science and technology study guide,technology study material,geopolitics study material,formation of stars study material,astronomy study material,academic notes astronomy,astronomy academic resources,star formation notes,DNA Study guide,philosophy academic resources,non fictional books,academic climate resources,industrial revolution study material,history study notes,tidal energy study notes,Business management study material,renewable energy study material,renewable energy academic resources,Technology academic notes,enterprenuer study material,climate change study material,picnotes'
    #expires_in(30.days, public: true)
  end

  def about_us_meta_tags
    @page_title = 'About Us | Educational Website for Ongoing Learning '
    @page_description = 'Join an education community for lifelong leaners and share topics that you love. Be part of a worldwide learning hub. Free online general knowledge'
    @page_keywords = 'free online general knowledge,free online knowledge base platform,general knowledge hub,knowledge hub,knowledge sharing websites,knowledge websites,online knowledge portal,online knowledge sharing hub,open knowledge,share your knowledge online,Educational Knowledge,research topics in education,intellectual knowledge,intellectual assets in knowledge management,intellectual knowledge management,best knowledge base platform,knowledge exchange platform,free knowledge base platform,free knowledge sharing platform,online knowledge sharing platform,intellectually stimulating books,hemoglobin study material,Respiratory system study guide,biology study material,philosophical books,How small scale mining works study notes,Raspberry pi study material,meditation books,Polity resources,science and technology study guide,technology study material,geopolitics study material,formation of stars study material,astronomy study material,academic notes astronomy,astronomy academic resources,star formation notes,DNA Study guide,philosophy academic resources,non fictional books,academic climate resources,industrial revolution study material,history study notes,tidal energy study notes,Business management study material,renewable energy study material,renewable energy academic resources,Technology academic notes,enterprenuer study material,climate change study material,picnotes'
    #expires_in(30.days, public: true)
  end

  def community_guideline_meta_tags
    @page_title = 'Community Guidelines |  free online knowledge base platform, general knowledge hub'
    @page_description = 'Try to treat others as you would want them to treat you. Knowledge hub. Knowledge sharing websites. General knowledge websites.'
    @page_keywords = 'free online general knowledge,free online knowledge base platform,general knowledge hub,knowledge hub,knowledge sharing websites,knowledge websites,online knowledge portal,online knowledge sharing hub,open knowledge,share your knowledge online,Educational Knowledge,research topics in education,intellectual knowledge,intellectual assets in knowledge management,intellectual knowledge management,best knowledge base platform,knowledge exchange platform,free knowledge base platform,free knowledge sharing platform,online knowledge sharing platform,intellectually stimulating books,hemoglobin study material,Respiratory system study guide,biology study material,philosophical books,How small scale mining works study notes,Raspberry pi study material,meditation books,Polity resources,science and technology study guide,technology study material,geopolitics study material,formation of stars study material,astronomy study material,academic notes astronomy,astronomy academic resources,star formation notes,DNA Study guide,philosophy academic resources,non fictional books,academic climate resources,industrial revolution study material,history study notes,tidal energy study notes,Business management study material,renewable energy study material,renewable energy academic resources,Technology academic notes,enterprenuer study material,climate change study material,picnotes'
    #expires_in(30.days, public: true)
  end

  def for_schools_meta_tags
    @page_title = 'Free online Knowledge Base platform For Schools'
    @page_description = 'We build private Picnotes portals for educational organizations such as K-12 schools, tutoring companies, online course providers. Online knowledge portal.'
    @page_keywords = 'free online general knowledge,free online knowledge base platform,general knowledge hub,knowledge hub,knowledge sharing websites,knowledge websites,online knowledge portal,online knowledge sharing hub,open knowledge,share your knowledge online,Educational Knowledge,research topics in education,intellectual knowledge,intellectual assets in knowledge management,intellectual knowledge management,best knowledge base platform,knowledge exchange platform,free knowledge base platform,free knowledge sharing platform,online knowledge sharing platform,intellectually stimulating books,hemoglobin study material,Respiratory system study guide,biology study material,philosophical books,How small scale mining works study notes,Raspberry pi study material,meditation books,Polity resources,science and technology study guide,technology study material,geopolitics study material,formation of stars study material,astronomy study material,academic notes astronomy,astronomy academic resources,star formation notes,DNA Study guide,philosophy academic resources,non fictional books,academic climate resources,industrial revolution study material,history study notes,tidal energy study notes,Business management study material,renewable energy study material,renewable energy academic resources,Technology academic notes,enterprenuer study material,climate change study material,picnotes'
    #expires_in(30.days, public: true)
  end

  def ed_fluencers_meta_tags
    @page_title = 'Sharing Your Knowledge online & Passionate Lifelong Learners'
    @page_description = 'Conversations with thoughtful educational leaders and passionate lifelong learners. Online knowledge sharing hub. Open knowledge, share your knowledge online,'
    @page_keywords = 'free online general knowledge,free online knowledge base platform,general knowledge hub,knowledge hub,knowledge sharing websites,knowledge websites,online knowledge portal,online knowledge sharing hub,open knowledge,share your knowledge online,Educational Knowledge,research topics in education,intellectual knowledge,intellectual assets in knowledge management,intellectual knowledge management,best knowledge base platform,knowledge exchange platform,free knowledge base platform,free knowledge sharing platform,online knowledge sharing platform,intellectually stimulating books,hemoglobin study material,Respiratory system study guide,biology study material,philosophical books,How small scale mining works study notes,Raspberry pi study material,meditation books,Polity resources,science and technology study guide,technology study material,geopolitics study material,formation of stars study material,astronomy study material,academic notes astronomy,astronomy academic resources,star formation notes,DNA Study guide,philosophy academic resources,non fictional books,academic climate resources,industrial revolution study material,history study notes,tidal energy study notes,Business management study material,renewable energy study material,renewable energy academic resources,Technology academic notes,enterprenuer study material,climate change study material,picnotes'
    #expires_in(30.days, public: true)
  end

  helper_method :current_user

  private

  def authenticate_user!
    if !user_signed_in?
      redirect_to new_session_path, alert: 'You must sign in or sign up first!'
    end
  end

end
