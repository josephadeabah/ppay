# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

users = [
  { email: 'user1@example.com', password: 'password', password_confirmation: 'password', profile: { name: 'John Doe', role: 'Software Engineer', status: 'Online', salary_role: 'Full-time', experience: '5 years', country: 'USA', industry: 'Technology', category: 'Employer', company: 'TechCorp', actual_salary: '$100,000', job_website: 'https://techcorp.jobs', avatar: 'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUFhCM2ZKczBEd2NDVnRleGhIVElNNmxkWG4iLCJyaWQiOiJ1c2VyXzJqWTA4empFUU5XS0oyNXVNOFU5elB3RnhOTyJ9' } },
  { email: 'user2@example.com', password: 'password', password_confirmation: 'password', profile: { name: 'Jane Smith', role: 'UX Designer', status: 'Offline', salary_role: 'Part-time', experience: '3 years', country: 'UK', industry: 'Design', category: 'Employee', company: 'DesignCo', actual_salary: '$70,000', job_website: 'https://designco.jobs', avatar: 'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUFhCM2ZKczBEd2NDVnRleGhIVElNNmxkWG4iLCJyaWQiOiJ1c2VyXzJqWTA4empFUU5XS0oyNXVNOFU5elB3RnhOTyJ9' } }
]

users.each do |user_data|
  profile_data = user_data.delete(:profile)
  user = User.create!(user_data)
  user.create_profile!(profile_data)
end

puts "Seeded #{User.count} users and #{Profile.count} profiles"

