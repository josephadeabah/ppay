# Set the number of threads to use
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

# Specifies the port that Puma will listen on to receive requests
port ENV.fetch("PORT") { 8080 }

# Specifies the environment that Puma will run in
environment ENV.fetch("RAILS_ENV") { "production" }

# Specifies the `pidfile` that Puma will use
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

# Configure workers for cluster mode
worker_count = ENV.fetch("WEB_CONCURRENCY") { 2 }.to_i
workers worker_count if worker_count > 1

# Code to run when a worker boots up
on_worker_boot do
  ActiveRecord::Base.establish_connection if defined?(ActiveRecord::Base)
end

# Allow Puma to be restarted by `bin/rails restart` command
plugin :tmp_restart
