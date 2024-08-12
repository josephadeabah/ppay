# Set the number of threads to use
# max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
# min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
# threads min_threads_count, max_threads_count

# Specifies the worker count for production
# if ENV["RAILS_ENV"] == "production"
#   require "concurrent-ruby"
#   worker_count = Integer(ENV.fetch("WEB_CONCURRENCY") { Concurrent.physical_processor_count })
#   workers worker_count if worker_count > 1
# end

# Specifies the port that Puma will listen on to receive requests
# port ENV.fetch("PORT") { 8080 }

# Bind to all available network interfaces
bind "tcp://0.0.0.0:#{ENV.fetch('PORT', 8080)}"

# Allows Puma to be restarted by `bin/rails restart` command
plugin :tmp_restart

# Specifies the environment that Puma will run in
environment ENV.fetch("RAILS_ENV") { "production" }

# Specifies the `pidfile` that Puma will use
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

on_worker_boot do
  ActiveRecord::Base.establish_connection if defined?(ActiveRecord::Base)
end
