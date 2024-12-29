Rails.application.config.hosts << /.*\.ngrok\.app/

# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!
