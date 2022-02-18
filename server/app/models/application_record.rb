class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  
  # Creates dates thats more readable
  def created_at
    attributes['created_at'].strftime("%m/%d/%Y %H:%M")
  end
end
